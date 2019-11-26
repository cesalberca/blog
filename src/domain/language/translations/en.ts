import { Translation } from './translation'
import { TranslationIdentifiers } from './translation-identifiers'

export const en: Translation = new Map<keyof TranslationIdentifiers, string>([
  ['_en', 'EN'],
  ['_es', 'ES'],
  ['_dark', 'Dark'],
  ['_light', 'Light'],
  ['_coverage', 'Test coverage'],
  ['_minutes', 'minutes'],
  ['home_title', 'César Alberca'],
  ['home_articles', 'Articles'],
  ['home_heroTitle', 'Frontend developer.<br/>Designer.<br/>Speaker.<br/>'],
  [
    'home_heroCaption',
    'Passionate about <strong>good practices</strong> and <strong>testing</strong>.'
  ],
  ['article_title', 'Articles'],
  ['article_shareArticle', 'Share article'],
  ['article_via', 'via'],
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
  ['talks_talkDifficultyEasy', 'Beginner']
])
