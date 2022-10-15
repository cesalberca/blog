import 'reflect-metadata'
import '../styles/base.css'
import '../styles/colors.css'
import '../styles/color-theme.css'
import '../styles/theme.css'
import '../styles/sizes.css'
import '../styles/typography.css'
import './../container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Page } from '../core/components/page/page'
import { NextIntlProvider } from 'next-intl'
import type { AbstractIntlMessages } from 'use-intl'

const App = ({ Component, pageProps }: AppProps<{ messages: AbstractIntlMessages }>) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </Head>
    <NextIntlProvider messages={pageProps.messages}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </NextIntlProvider>
  </>
)

export default App
