import 'reflect-metadata'
import '../styles/base.css'
import '../styles/colors.css'
import '../styles/color-theme.css'
import '../styles/theme.css'
import '../styles/sizes.css'
import '../styles/typography.css'
import '../styles/code-theme.scss'
import './../container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'
import { useEffect, useState } from 'react'
import { container } from '../container'
import { GetPreferencesUseCase } from '../core/preferences/application/get-preferences.use-case'
import type { Preferences } from '../core/preferences/domain/preferences'
import { SetPreferencesUseCase } from '../core/preferences/application/set-preferences.use-case'
import { ThemeProvider } from '../features/theme/delivery/theme-provider'
import { Theme } from '../features/theme/domain/theme'

const App = ({ Component, pageProps }: AppProps<{ messages: AbstractIntlMessages }>) => {
  const [preferences, setPreferences] = useState<Preferences>({ theme: Theme.LIGHT })

  async function loadPreferences() {
    const preferences = await container.resolve(GetPreferencesUseCase).execute()
    setPreferences(preferences)
  }

  useEffect(() => {
    loadPreferences()
  }, [])

  function setNewTheme(theme: Theme) {
    setPreferences({ theme })
    container.resolve(SetPreferencesUseCase).execute({ theme })
  }

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

      <ThemeProvider theme={preferences.theme} setTheme={theme => setNewTheme(theme)}>
        <NextIntlProvider
          defaultTranslationValues={{
            strong: children => <strong>{children}</strong>,
          }}
          messages={pageProps.messages}
        >
          <Component {...pageProps} />
        </NextIntlProvider>
      </ThemeProvider>
    </>
  )
}

export default App
