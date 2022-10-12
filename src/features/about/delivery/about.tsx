import { FC } from 'react'
import { Markdown } from '../../../core/components/markdown/markdown'

export const About: FC = () => {
  return (
    <>
      <h1>About me</h1>
      <Markdown
        value={
          "I'm a software developer very interested in good practices, architecture and testing. I work at [Autentia](https://www.autentia.com/) as a frontend developer with technologies such as React, Vue, Angular, TypeScript, JavaScript, HTML, CSS, etc. I'm continuously on the lookout for things to read, learn and [share](https://www.adictosaltrabajo.com/author/calberca/). I've talked at [JSDay Madrid 2019](https://www.youtube.com/watch?v=aNf1Oos0ZB8&t=1s), Codenares 2018 and 2019, [Ritsi](https://www.youtube.com/watch?v=SuykoyC0T74&t=1s), [JSDay Canarias 2019](https://www.youtube.com/watch?v=3nPPRvRcoo0&feature=youtu.be) and [Codemotion Madrid 2019](https://www.youtube.com/watch?v=y0BymiCki54&feature=youtu.be)."
        }
      ></Markdown>
    </>
  )
}
