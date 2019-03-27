import { Talk, TalksMother } from '../domain/talks'
import { Command } from './Command'

export class GetTalksGiven implements Command<Talk[]> {
  public async execute(): Promise<Talk[]> {
    return TalksMother.getTalksGiven()
  }
}
