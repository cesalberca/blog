import { TalksRepository } from '../../domain/talks/talks-repository.js'
import { Length } from '../../domain/length.js'
import { DifficultyService } from '../../domain/talks/difficulty-service.js'
import { TranslationService } from '../../domain/translation-service.js'
import { Event } from '../../domain/talks/event.js'
import { Datetime } from '../../domain/datetime.js'
import { Maybe } from '../../domain/utils/maybe.js'
import { LanguageService } from '../../domain/talks/language-service.js'
import { Topic } from '../../domain/talks/topic.js'
import { TalkDto } from './talk-dto.js'
import { Locale } from '../../domain/language/locale.js'
import { Id } from '../../domain/id.js'
import { Talk } from '../../domain/talks/talk.js'
import { Markdown } from '../../domain/markdown.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { talks } from './talks.js'
import frontMatter from 'front-matter'
import { FileLoader } from '../../domain/file-loader.js'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(
    @Inject(TYPES.FILE_LOADER) private readonly fileLoader: FileLoader,
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.LANGUAGE_SERVICE) private readonly languageService: LanguageService,
    @Inject(TYPES.DIFFICULTY_SERVICE) private readonly difficultyService: DifficultyService
  ) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    const url = `/infrastructure/talks/${this.translationService.toLiteral(locale)}/${id.value}.md`
    const talk: TalkDto = frontMatter(await this.fileLoader.loadFrom(url))

    return Talk.create({
      id,
      language: this.languageService.toLanguage(talk.attributes.language),
      title: talk.attributes.title,
      abstract: Markdown.fromValue(talk.body),
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
