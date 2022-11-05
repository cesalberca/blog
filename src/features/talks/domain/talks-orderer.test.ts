import { TalksOrderer } from './talks-orderer'
import { TalksMother } from './talks-mother'

describe('TalksOrderer', () => {
  it('should sort talks by latest event given', () => {
    const { talksOrderer } = setup()

    const actual = talksOrderer.sort([TalksMother.advancedJavascriptPatterns(), TalksMother.goodArchitecture()])

    expect(actual[0].title).toBe('Good Architecture')
  })
})

function setup() {
  return {
    talksOrderer: new TalksOrderer(),
  }
}
