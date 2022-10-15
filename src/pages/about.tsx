import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import { AboutPage } from '../features/about/delivery/about.page'

const Index: NextPage = () => {
  return <AboutPage />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index
