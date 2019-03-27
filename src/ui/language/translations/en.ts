import { Translation } from './Translation'
import { TranslationIdentifiers } from './TranslationIdentifiers'

export const en: Translation = new Map<keyof TranslationIdentifiers, string>([
  ['home_title', 'Home'],
  ['home_recentArticles', 'Recent articles'],
  ['article_title', 'Articles'],
  ['about_title', 'About me'],
  [
    'about_description',
    "I'm a young programmer very interested in good practices, architecture, testing and SOLID principles. I work at [Autentia](https://www.autentia.com/) as a frontend developer (Vue, React, TypeScript, JavaScript, HTML, CSS, etc) although I have worked a bit in Java and Android. I'm continuously on the lookout for things to read, learn and [share](https://www.adictosaltrabajo.com/author/calberca/). I've talked at [JSDay Madrid](https://www.youtube.com/watch?v=aNf1Oos0ZB8&t=1s), Codenares 2018 and 2019, [Ritsi](https://www.youtube.com/watch?v=SuykoyC0T74&t=1s) and several internal talks at my company, like [this one](https://www.youtube.com/watch?v=RFQy-ud8Ec4&t=4477s)."
  ],
  ['talks_title', 'Talks'],
  ['talks_talkTitle', 'Title'],
  ['talks_talkAbstract', 'Abstract'],
  ['talks_talkTopics', 'Topics'],
  ['talks_talkDifficulty', 'Difficulty'],
  ['talks_talkLength', 'Length'],
  ['talks_talkDifficultyAdvanced', 'Advanced'],
  ['talks_talkDifficultyIntermediate', 'Intermediate'],
  ['talks_talkDifficultyEasy', 'Easy']
])
