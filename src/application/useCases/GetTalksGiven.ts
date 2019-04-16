import { Talk } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { CommandType } from '../../infraestructure/types/CommandType'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Locale } from '../../infraestructure/language'

export type GetTalksGivenType = CommandType<GetTalksGiven>

export class GetTalksGiven implements Command<Talk[]> {
  public constructor(
    private readonly talksRepository: TalksRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(this.locale)
  }
}
