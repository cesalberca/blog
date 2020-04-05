import { TalksRepository } from '../../domain/talks/talks-repository'
import { Length } from '../../domain/length'
import { DifficultyService } from '../../domain/talks/difficulty-service'
import { TranslationService } from '../../domain/translation-service'
import { Event } from '../../domain/talks/event'
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
import { talks } from '../../domain/talks/files/talks'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.LANGUAGE_SERVICE) private readonly languageService: LanguageService,
    @Inject(TYPES.DIFFICULTY_SERVICE) private readonly difficultyService: DifficultyService
  ) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    let talk: TalkDto

    try {
      talk = await import(
        `../../ui/content/talks/${this.translationService.toString(locale)}/${id.value}.md`
      )
    } catch (e) {
      try {
        const locale = this.translationService.toString(Locale.DEFAULT)
        talk = await import(`../../ui/content/talks/${locale}/${id.value}.md`)
      } catch (e) {
        const locale = this.translationService.toString(Locale.ES)
        talk = await import(`../../ui/content/talks/${locale}/${id.value}.md`)
      }
    }

    return Talk.create({
      id,
      language: this.languageService.toLanguage(talk.attributes.language),
      title: talk.attributes.title,
      abstract: Markdown.fromValue(talk.html),
      references: [],
      length: Length.fromMinutes(talk.attributes.length),
      difficulty: this.difficultyService.toDifficulty(talk.attributes.difficulty),
      topics: talk.attributes.topics.map(topic => Topic.fromValue(topic)),
      events: Maybe.fromValue(talk.attributes.events)
        .getOrElse([])
        .map(event =>
          Event.create({
            name: event.name,
            datetime: Datetime.fromString(event.date),
            video: event.video,
            code: event.code,
            slides: event.slides,
            demo: Maybe.fromValue(event.demo)
          })
        )
    })
  }

  async findAllByLocale(locale: Locale): Promise<Talk[]> {
    return Promise.all(talks.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
