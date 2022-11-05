import type { TalksRepository } from '../domain/talks-repository'
import { Length } from '../../../core/length'
import { DifficultyService } from '../domain/difficulty-service'
import { Event } from '../domain/event'
import { Datetime } from '../../../core/datetime'
import { Topic } from '../domain/topic'
import type { TalkDto } from './talk-dto'
import { Id } from '../../../core/id'
import { Talk } from '../domain/talk'
import { Markdown } from '../../../core/markdown'
import { Injectable } from '../../../core/dependency-injection/injectable'
import frontMatter from 'front-matter'
import type { Locale } from '../../../core/i18n/locale'
import { join, parse } from 'path'
import fs from 'fs'
import { Url } from '../../../core/types/url'

@Injectable()
export class TalksFileRepository implements TalksRepository {
  constructor(private readonly difficultyService: DifficultyService) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    const fullPath = join(process.cwd(), `src/features/talks/infrastructure/${locale}/${id.value}.md`)
    return this.getTalk(fullPath)
  }

  async findAllByLocale(locale: Locale): Promise<Talk[]> {
    const directory = join(process.cwd(), `src/features/talks/infrastructure/${locale}`)
    const files = fs.readdirSync(directory)
    return Promise.all(
      files.map(path => this.getTalk(join(process.cwd(), `src/features/talks/infrastructure/${locale}`, path))),
    )
  }

  private getTalk(fullPath: string) {
    const talk: TalkDto = frontMatter(fs.readFileSync(fullPath, 'utf8'))

    return Talk.create({
      id: Id.fromValue(parse(fullPath).name),
      language: talk.attributes.language as Locale,
      title: talk.attributes.title,
      image: `/assets/images/talks/${talk.attributes.image}`,
      abstract: Markdown.fromValue(talk.body),
      references: [],
      length: Length.fromMinutes(talk.attributes.length),
      difficulty: this.difficultyService.toDifficulty(talk.attributes.difficulty),
      topics: talk.attributes.topics.map(topic => Topic.fromValue(topic)),
      events:
        talk.attributes.events?.map(event =>
          Event.create({
            name: event.name,
            datetime: Datetime.fromIso(event.date),
            video: event.video !== undefined ? Url.fromValue(event.video) : undefined,
            code: event.code !== undefined ? Url.fromValue(event.code) : undefined,
            slides: event.slides !== undefined ? Url.fromValue(event.slides) : undefined,
            demo: event.demo !== undefined ? Url.fromValue(event.demo) : undefined,
          }),
        ) ?? [],
    })
  }
}
