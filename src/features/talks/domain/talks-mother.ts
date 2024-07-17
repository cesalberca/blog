import { Talk } from './talk'
import { Id } from '../../../core/id'
import { Difficulty } from './difficulty'
import { Event } from './event'
import { Length } from '../../../core/length'
import { Markdown } from '../../../core/markdown'
import { Locale } from '../../../core/i18n/locale'
import { Url } from '../../../core/types/url'
import { Datetime } from '../../../core/datetime'
import { Topic } from './topic'

export class TalksMother {
  static advancedJavascriptPatterns() {
    return Talk.create({
      id: Id.fromValue('Advanced JavaScript Patterns'),
      title: 'Advanced JavaScript Patterns',
      topics: [],
      image: '/assets/advanced-javascript-patterns.png',
      language: Locale.EN,
      events: [
        Event.create({
          name: 'JSDay Madrid',
          datetime: Datetime.fromIso('2018-10-20'),
          slides: Url.fromValue('https://drive.google.com/open?id=15tLH3xBpZbwHlhRGtiygc0x9NRaxNlPWhqghw5iNu4U'),
          code: Url.fromValue('https://github.com/cesalberca/advanced-javascript-patterns/tree/2018-jsday-madrid'),
          video: Url.fromValue('https://www.youtube.com/watch?v=aNf1Oos0ZB8'),
        }),
        Event.create({
          name: 'JSDay Canarias',
          datetime: Datetime.fromIso('2019-11-10'),
          slides: Url.fromValue('https://drive.google.com/open?id=1Eoa1EVelW11x5Es7Ru0tnmWdzfQOAlEWz07TK1qLh_o'),
          code: Url.fromValue('https://github.com/cesalberca/advanced-javascript-patterns/tree/2019-jsday-canarias'),
          video: Url.fromValue('https://www.youtube.com/watch?v=aNf1Oos0ZB8'),
        }),
        Event.create({
          name: 'Codenares',
          datetime: Datetime.fromIso('2019-03-19'),
          slides: Url.fromValue('https://drive.google.com/open?id=1LEWc3ErrzjaN3nzlsMtGVx1QKGsc8G2mgw-qP-WZhJo'),
          code: Url.fromValue('https://github.com/cesalberca/advanced-javascript-patterns/tree/2019-codenares'),
          video: Url.fromValue('https://youtu.be/MuCgyOTXIRU'),
        }),
      ],
      difficulty: Difficulty.ADVANCED,
      length: Length.fromMinutes(45),
      references: [],
      abstract: Markdown.fromValue(
        "When you tell people you code in JavaScript they usually look down on you. This talk will give you the tools to enlighten those heretics. We'll be entering the world of **design patterns** applied to JavaScript, looking through some of the cutting edge properties of ES6 such as **Proxies** and **default function parameter expressions**, dealing with **objects** and even some examples of **functional programming**. This talk is not allowed for cardiacs.",
      ),
    })
  }

  static goodArchitecture() {
    return Talk.create({
      id: Id.fromValue('Good architecture'),
      title: 'Good Architecture',
      topics: [Topic.fromValue('TypeScript'), Topic.fromValue('Vue')],
      image: '/assets/good-architecture.png',
      language: Locale.EN,
      events: [
        Event.create({
          name: 'Vue Meetup',
          datetime: Datetime.fromIso('2020-02-27'),
          slides: Url.fromValue(
            'https://docs.google.com/presentation/d/1mkWPRN56PIdKw60WmzcrCM28WU04e_18Tv1Jg0ZVzzY/edit#slide=id.p',
          ),
          code: Url.fromValue('https://github.com/cesalberca/arquitectura-de-la-vue-na/tree/2020-vuejs-madrid?files=1'),
          video: Url.fromValue('https://www.youtube.com/watch?v=NpjecaAgcVQ&feature=youtu.be'),
        }),
      ],
      difficulty: Difficulty.ADVANCED,
      length: Length.fromMinutes(50),
      references: [],
      abstract: Markdown.fromValue(
        "Are you sick of architecture talks where they show you nice graphs (📊) but no code? Talks where they teach you SOLID, layers and –for an unseemingly weird reason– onions but they don't go deeper? Want to know how to apply architecture to the crazy world of the frontend, but you don't know why? If that is the case, this is your talk. We'll review at a technical level what makes up a good architecture, good practices™️ and loads and loads go code with TypeScript and Vue. Batteries not included.\n",
      ),
    })
  }

  static howToBuildBadSoftware() {
    return Talk.create({
      id: Id.fromValue('101-how-to-build-bad-software'),
      title: '101. How to build bad Software',
      topics: [Topic.fromValue('JavaScript'), Topic.fromValue('Software design')],
      image: '/assets/good-architecture.png',
      language: Locale.EN,
      events: [],
      difficulty: Difficulty.INTERMEDIATE,
      length: Length.fromMinutes(40),
      references: [],
      abstract: Markdown.fromValue(
        'There are too many talks talking about what Good™️ Software looks and feels. However, creating Bad™️ Software requires a true level of expertise, dedication and craftsmanship. In this talk we’ll guide you how to truly create deceiving, nay, nefarious code, that’ll make your teammates rethink their career path. After this talk you will come up with new bad habits that you will integrate in your day to day developer life and change how you perceive Software development for the better. Join us and let’s make bad code great again!\n',
      ),
    })
  }
}
