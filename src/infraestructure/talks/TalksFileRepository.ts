import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Talk } from '../../domain/talks'
import { Locale } from '../language'
import { Id, Markdown } from '../../domain'
import { FileLoader } from '../FileLoader'
import { TranslationService } from '../../application'
import { Length } from '../../domain/talks/Length'
import { DifficultyService } from '../../application/DifficultyService'

export class TalksFileRepository implements TalksRepository {
  public constructor(
    private readonly fileLoader: FileLoader,
    private readonly translationService: TranslationService
  ) {}

  public async findOneByLocale(id: Id, locale: Locale): Promise<Talk> {
    let talk: any

    try {
      talk = await import(`./../../domain/talks/${this.translationService.toString(locale)}/${
        id.value
      }.md`)
    } catch (e) {
      const locale = this.translationService.toString(Locale.DEFAULT)
      talk = await import(`./../../domain/talks/${locale}/${id.value}.md`)
    }

    return Talk.create({
      id,
      language: talk.attributes.language,
      title: talk.attributes.title,
      abstract: Markdown.fromValue(talk.body),
      references: [],
      length: Length.fromMinutes(talk.attributes.length),
      difficulty: DifficultyService.create().toDifficulty(talk.attributes.difficulty),
      topics: []
    })
  }

  public async findAllByLocale(locale: Locale): Promise<Talk[]> {
    const talksIds = this.fileLoader
      .loadTalks()
      .map(id => id.substr(2, id.length).substr(0, id.length - 5))

    return Promise.all(talksIds.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
