import { Translation } from './translation'
import { TranslationIdentifiers } from './translation-identifiers'

export const es: Translation = new Map<keyof TranslationIdentifiers, string>([
  ['_en', 'EN'],
  ['_es', 'ES'],
  ['_dark', 'Oscuro'],
  ['_light', 'Claro'],
  ['_coverage', 'Cobertura de tests'],
  ['_minutes', 'minutos'],
  ['home_title', 'César Alberca'],
  ['home_articles', 'Artículos'],
  ['home_heroTitle', 'Frontend developer.<br/>Designer.<br/>Speaker.<br/>'],
  [
    'home_heroCaption',
    'Apasionado de las <strong>buenas prácticas</strong>,<strong>arquitectura</strong> y el <strong>testing</strong>.'
  ],
  ['article_title', 'Artículos'],
  ['article_via', 'vía'],
  ['article_shareArticle', 'Compartir artículo'],
  ['about_title', 'Acerca de mí'],
  [
    'about_description',
    'Soy un desarrollador interesado en buenas prácticas, arquitectura y testing. Trabajo en [Autentia](https://www.autentia.com/) como desarrollador frontend con tecnologías como React, Vue, Angular, TypeScript, JavaScript, HTML, CSS, etc. Siempre estoy en busca de cosas que leer, aprender y compartir. He dado charlas en [JSDay Madrid](https://www.youtube.com/watch?v=aNf1Oos0ZB8&t=1s), Codenares 2018 and 2019, [Ritsi](https://www.youtube.com/watch?v=SuykoyC0T74&t=1s), [JSDay Canarias 2019](https://www.youtube.com/watch?v=3nPPRvRcoo0&feature=youtu.be) y [Codemotion Madrid 2019](https://www.youtube.com/watch?v=y0BymiCki54&feature=youtu.be).'
  ],
  ['talks_title', 'Charlas'],
  ['talks_talkTitle', 'Title'],
  ['talks_talkAbstract', 'Descripción'],
  ['talks_talkTopics', 'Temas'],
  ['talks_talkDifficulty', 'Dificultad'],
  ['talks_talkLength', 'Duración'],
  ['talks_talkDifficultyAdvanced', 'Avanzado'],
  ['talks_talkDifficultyIntermediate', 'Intermedio'],
  ['talks_talkDifficultyEasy', 'Iniciado'],
  ['talks_event', 'Eventos'],
  ['talks_talkLengthMinutes', 'minutos'],
  ['talks_talkSlides', 'Diapositivas'],
  ['talks_talkCode', 'Código'],
  ['talks_talkVideo', 'Video'],
  ['talks_talkDemo', 'Demo']
])
