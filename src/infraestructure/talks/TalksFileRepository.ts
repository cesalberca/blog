import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Talk } from '../../domain/talks'
import { Locale, Translator } from '../../domain/language'
import { Id, Markdown } from '../../domain'
import { FileLoader } from '../FileLoader'
import { Length } from '../../domain/Length'
import { DifficultyService } from '../../domain/DifficultyService'
import { TranslationService } from '../../domain/TranslationService'
import { Event } from '../../domain/talks/Event'
import { Datetime } from '../Datetime'
import { Maybe } from '../Maybe'
import { LanguageService } from '../../domain/talks/LanguageService'
import { Topic } from '../../domain/talks/Topic'
import { TalkDto } from './TalkDto'

export class TalksFileRepository implements TalksRepository {
  constructor(
    private readonly fileLoader: FileLoader,
    private readonly translationService: TranslationService,
    private readonly languageService: LanguageService
  ) {}

  static create() {
    return new TalksFileRepository(
      FileLoader.create(),
      TranslationService.create(Translator.create()),
      LanguageService.create()
    )
  }

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    let talk: TalkDto

    try {
      talk = await import(
        `./../../domain/talks/${this.translationService.toString(locale)}/${id.value}.md`
      )
    } catch (e) {
      const locale = this.translationService.toString(Locale.DEFAULT)
      talk = await import(`./../../domain/talks/${locale}/${id.value}.md`)
    }

    return Talk.create({
      id,
      language: this.languageService.toLanguage(talk.attributes.language),
      title: talk.attributes.title,
      abstract: Markdown.fromValue(talk.body),
      references: [],
      length: Length.fromMinutes(talk.attributes.length),
      difficulty: DifficultyService.create().toDifficulty(talk.attributes.difficulty),
      topics: talk.attributes.topics.map(topic => Topic.fromValue(topic)),
      events: Maybe.fromValue(talk.attributes.events)
        .getOrElse([])
        .map(event =>
          Event.create({
            name: event.name,
            datetime: Datetime.fromString(event.date)
          })
        )
    })
  }

  async findAllByLocale(locale: Locale): Promise<Talk[]> {
    const talksIds = this.fileLoader
      .loadTalks()
      .map(id => id.substr(2, id.length).substr(0, id.length - 5))

    return Promise.all(talksIds.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
