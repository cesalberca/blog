import { TalksOrderer } from './talks-orderer'
import { TalksMother } from './talks-mother'

describe('TalksOrderer', () => {
  it('should sort talks by latest event given', () => {
    const { talksOrderer } = setup()

    const actual = talksOrderer.sort([TalksMother.advancedJavascriptPatterns(), TalksMother.goodArchitecture()])

    expect(actual[0].title).toBe('Good Architecture')
  })

  it('should handle empty events', () => {
    const { talksOrderer } = setup()

    const actual = talksOrderer.sort([TalksMother.advancedJavascriptPatterns(), TalksMother.howToBuildBadSoftware()])

    expect(actual[0].title).toBe('101. How to build bad Software')
  })
})

function setup() {
  return {
    talksOrderer: new TalksOrderer(),
  }
}
