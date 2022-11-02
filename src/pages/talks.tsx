import type { GetStaticProps, NextPage } from 'next'
import { TalksPage } from '../features/talks/delivery/talks/talks.page'
import { container } from '../core/dependency-injection/container'
import { GetTalksGivenUseCase } from '../features/talks/application/get-talks-given-use-case'
import type { Locale } from '../core/i18n/locale'
import { Talk } from '../features/talks/domain/talk'

const Index: NextPage<{ talks: ReturnType<Talk['toJson']>[] }> = ({ talks }) => {
  return <TalksPage talks={talks.map(x => Talk.fromJson(x))} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const talks = await container.resolve(GetTalksGivenUseCase).execute({ locale: locale as Locale })

  return {
    props: {
      talks: talks.map(x => x.toJson()),
      messages: (await import(`../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index
