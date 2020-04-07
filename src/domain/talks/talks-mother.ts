import { Talk } from './talk.js'
import { Id } from '../id.js'
import { Language } from './language.js'
import { Difficulty } from './difficulty.js'
import { Length } from '../length.js'
import { Markdown } from '../markdown.js'

export class TalksMother {
  static getTalksGiven() {
    return [
      Talk.create({
        id: Id.fromValue('Advanced JavaScript Patterns'),
        title: 'Advanced JavaScript Patterns',
        topics: [],
        language: Language.ENGLISH,
        events: [],
        difficulty: Difficulty.ADVANCED,
        length: Length.fromMinutes(45),
        references: [],
        abstract: Markdown.fromValue(
          "When you tell people you code in JavaScript they usually look down on you. This talk will give you the tools to enlighten those heretics. We'll be entering the world of **design patterns** applied to JavaScript, looking through some of the cutting edge properties of ES6 such as **Proxies** and **default function parameter expressions**, dealing with **objects** and even some examples of **functional programming**. This talk is not allowed for cardiacs."
        )
      })
    ]
  }
}
