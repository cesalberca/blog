import 'reflect-metadata'
import '../core/dependency-injection/container'
import './app.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { AbstractIntlMessages } from 'next-intl'
import { IntlProvider } from 'next-intl'
import { useEffect, useState } from 'react'
import { container } from '../core/dependency-injection/container'
import { GetPreferencesUseCase } from '../core/preferences/application/get-preferences.use-case'
import type { Preferences } from '../core/preferences/domain/preferences'
import { SetPreferencesUseCase } from '../core/preferences/application/set-preferences.use-case'
import { ThemeProvider } from '../features/theme/delivery/theme-provider'
import { Theme } from '../features/theme/domain/theme'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps<{ messages: AbstractIntlMessages }>) => {
  const router = useRouter()

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
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <ThemeProvider theme={preferences.theme} setTheme={theme => setNewTheme(theme)}>
        <IntlProvider
          locale={router.locale!}
          timeZone={'Europe/Madrid'}
          defaultTranslationValues={{
            strong: children => <strong>{children}</strong>,
          }}
          messages={pageProps.messages}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </>
  )
}

export default App
