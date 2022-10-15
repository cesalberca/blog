import type { TalksRepository } from '../../../talks/domain/talks-repository'
import { Length } from '../../domain/length'
import { DifficultyService } from '../../../talks/domain/difficulty-service'
import { Event } from '../../../talks/domain/event'
import { Datetime } from '../../domain/datetime'
import { Topic } from '../../../talks/domain/topic'
import type { TalkDto } from './talk-dto'
import { Id } from '../../domain/id'
import { Talk } from '../../../talks/domain/talk'
import { Markdown } from '../../domain/markdown'
import { Injectable } from '../../../../core/dependency-injection/injectable'
import { talks } from './talks'
import frontMatter from 'front-matter'
import type { Locale } from '../../../../core/i18n/locale'
import { join } from 'path'
import fs from 'fs'
import { Url } from '../../../talks/domain/url'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(private readonly difficultyService: DifficultyService) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    const fullPath = join(process.cwd(), `src/features/talks/infrastructure/talks/${locale}/${id.value}.md`)
    const talk: TalkDto = frontMatter(fs.readFileSync(fullPath, 'utf8'))

    return Talk.create({
      id,
      language: talk.attributes.language as Locale,
      title: talk.attributes.title,
      abstract: Markdown.fromValue(talk.body),
      references: [],
      length: Length.fromMinutes(talk.attributes.length),
      difficulty: this.difficultyService.toDifficulty(talk.attributes.difficulty),
      topics: talk.attributes.topics.map(topic => Topic.fromValue(topic)),
      events: talk.attributes.events.map(event =>
        Event.create({
          name: event.name,
          datetime: Datetime.fromString(event.date),
          video: event.video !== undefined ? Url.fromValue(event.video) : undefined,
          code: event.code !== undefined ? Url.fromValue(event.code) : undefined,
          slides: event.slides !== undefined ? Url.fromValue(event.slides) : undefined,
          demo: event.demo !== undefined ? Url.fromValue(event.demo) : undefined,
        }),
      ),
    })
  }

  async findAllByLocale(locale: Locale): Promise<Talk[]> {
    return Promise.all(talks.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
