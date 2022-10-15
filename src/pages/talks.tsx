import type { GetStaticProps, NextPage } from 'next'
import { Talks } from '../features/talks/delivery/talks/talks'
import { container } from '../container'
import { GetTalksGivenUseCase } from '../features/blog/application/use-cases/get-talks-given-use-case'
import type { Locale } from '../core/i18n/locale'
import { Talk } from '../features/blog/domain/talks/talk'

const Index: NextPage<{ talks: ReturnType<Talk['toJson']>[] }> = ({ talks }) => {
  return <Talks talks={talks.map(x => Talk.fromJson(x))} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const talks = await container.resolve(GetTalksGivenUseCase).execute({ locale: locale as Locale })

  return {
    props: {
      talks: talks.map(x => {
        console.log(x.toJson())
        return x.toJson()
      }),
      messages: (await import(`../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index
