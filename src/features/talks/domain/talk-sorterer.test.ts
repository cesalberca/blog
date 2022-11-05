import { TalkSorterer } from './talk-sorterer'
import { TalksMother } from './talks-mother'

describe('TalkSorterer', () => {
  it('should sort talks by latest event given', () => {
    const { talkSorterer } = setup()

    const actual = talkSorterer.sort([TalksMother.advancedJavascriptPatterns(), TalksMother.goodArchitecture()])

    expect(actual[0].title).toBe('Good architecture')
  })
})

function setup() {
  return {
    talkSorterer: new TalkSorterer(),
  }
}
