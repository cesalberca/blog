import { TalksRepository } from './TalksRepository'

export class TalksMockRepository implements TalksRepository {
  findAllByLocale = jest.fn()
  findOneByLocale = jest.fn()
}
