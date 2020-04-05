import { Talk } from './talk'
import { Id } from '../id'
import { Language } from './language'
import { Difficulty } from './difficulty'
import { Length } from '../length'
import { Markdown } from '../markdown'

describe('Talk', () => {
  it('should be able to create a talk', () => {
    const talk = Talk.create({
      id: Id.fromValue('Advanced JavaScript Patterns'),
      title: 'Advanced JavaScript Patterns',
      topics: [],
      events: [],
      language: Language.ENGLISH,
      difficulty: Difficulty.ADVANCED,
      length: Length.fromMinutes(45),
      references: [],
      abstract: Markdown.fromValue(
        "When you tell people you code in JavaScript they usually look down on you. This talk will give you the tools to enlighten those heretics. We'll be entering the world of **design patterns** applied to JavaScript, looking through some of the cutting edge properties of ES6 such as **Proxies** and **default function parameter expressions**, dealing with **objects** and even some examples of **functional programming**. This talk is not allowed for cardiacs."
      )
    })

    expect(talk.id.value).toEqual('Advanced JavaScript Patterns')
    expect(talk.title).toEqual('Advanced JavaScript Patterns')
    expect(talk.topics).toEqual([])
    expect(talk.language).toEqual(Language.ENGLISH)
    expect(talk.difficulty).toEqual(Difficulty.ADVANCED)
    expect(talk.length.minutes).toEqual(45)
    expect(talk.references).toEqual([])
    expect(talk.abstract.value).toEqual(
      "When you tell people you code in JavaScript they usually look down on you. This talk will give you the tools to enlighten those heretics. We'll be entering the world of **design patterns** applied to JavaScript, looking through some of the cutting edge properties of ES6 such as **Proxies** and **default function parameter expressions**, dealing with **objects** and even some examples of **functional programming**. This talk is not allowed for cardiacs."
    )
  })
})
