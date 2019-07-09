import { TalksRepository } from './TalksRepository'

export class TalksMockRepository implements TalksRepository {
  public findAllByLocale = jest.fn()

  public findOneByLocale = jest.fn()
}
