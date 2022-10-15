import type { TalksRepository } from '../../domain/talks/talks-repository'
import { Length } from '../../domain/length'
import { DifficultyService } from '../../domain/talks/difficulty-service'
import { Event } from '../../domain/talks/event'
import { Datetime } from '../../domain/datetime'
import { Maybe } from '../../domain/utils/maybe'
import { LanguageService } from '../../domain/talks/language-service'
import { Topic } from '../../domain/talks/topic'
import type { TalkDto } from './talk-dto'
import { Id } from '../../domain/id'
import { Talk } from '../../domain/talks/talk'
import { Markdown } from '../../domain/markdown'
import { Injectable } from '../../domain/types/injectable'
import { talks } from './talks'
import frontMatter from 'front-matter'
import { FileLoader } from '../../domain/file-loader'
import type { Locale } from '../../../../core/i18n/locale'
import { join } from 'path'
import fs from 'fs'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(
    private readonly fileLoader: FileLoader,
    private readonly languageService: LanguageService,
    private readonly difficultyService: DifficultyService,
  ) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    const fullPath = join(process.cwd(), `src/features/blog/infrastructure/talks/${locale}/${id.value}.md`)
    const article: TalkDto = frontMatter(fs.readFileSync(fullPath, 'utf8'))

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
            demo: Maybe.fromValue(event.demo),
          }),
        ),
    })
  }

  async findAllByLocale(locale: Locale): Promise<Talk[]> {
    return Promise.all(talks.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
