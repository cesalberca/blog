import type { GetStaticProps, NextPage } from 'next'
import { LinksPage } from '../features/links/delivery/links.page'

const Index: NextPage = () => {
  return <LinksPage />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index
