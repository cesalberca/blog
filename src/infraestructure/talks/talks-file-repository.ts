import { TalksRepository } from '../../domain/talks/talks-repository'
import { FileLoader } from '../file-loader'
import { Length } from '../../domain/length'
import { DifficultyService } from '../../domain/talks/difficulty-service'
import { TranslationService } from '../../domain/translation-service'
import { Event } from '../../domain/talks/Event'
import { Datetime } from '../../domain/datetime'
import { Maybe } from '../../domain/utils/maybe'
import { LanguageService } from '../../domain/talks/language-service'
import { Topic } from '../../domain/talks/topic'
import { TalkDto } from './talk-dto'
import { Locale } from '../../domain/language/locale'
import { Id } from '../../domain/id'
import { Talk } from '../../domain/talks/talk'
import { Markdown } from '../../domain/markdown'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(
    @Inject(TYPES.FILE_LOADER) private readonly fileLoader: FileLoader,
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.LANGUAGE_SERVICE) private readonly languageService: LanguageService
  ) {}

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
      abstract: Markdown.fromValue(talk.html),
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
