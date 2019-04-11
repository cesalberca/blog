import { Talk, TalksMother } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { CommandType } from '../../infraestructure/types/CommandType'

export type GetTalksGivenType = CommandType<GetTalksGiven>

export class GetTalksGiven implements Command<Talk[]> {
  public async execute(): Promise<Talk[]> {
    return TalksMother.getTalksGiven()
  }
}
