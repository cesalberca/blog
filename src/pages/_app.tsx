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
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../features/theme/delivery/theme-context'
import { container } from '../container'
import { GetPreferencesUseCase } from '../core/preferences/application/get-preferences.use-case'
import type { Preferences } from '../core/preferences/domain/preferences'
import { Theme } from '../features/theme/domain/theme'
import { SetPreferencesUseCase } from '../core/preferences/application/set-preferences.use-case'

const App = ({ Component, pageProps }: AppProps<{ messages: AbstractIntlMessages }>) => {
  const [preferences, setPreferences] = useState<Preferences>({ theme: Theme.LIGHT })

  async function loadPreferences() {
    const preferences = await container.resolve(GetPreferencesUseCase).execute()
    setPreferences(preferences)
  }

  useEffect(() => {
    container.resolve(SetPreferencesUseCase).execute({ theme: preferences.theme })
  }, [preferences])

  useEffect(() => {
    loadPreferences()
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <ThemeContext.Provider
        value={{
          theme: preferences.theme,
          setTheme: theme => setPreferences({ theme }),
        }}
      >
        <NextIntlProvider
          defaultTranslationValues={{
            strong: children => <strong>{children}</strong>,
          }}
          messages={pageProps.messages}
        >
          <Page>
            <Component {...pageProps} />
          </Page>
        </NextIntlProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
