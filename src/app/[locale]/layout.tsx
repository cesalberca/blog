import { Azeret_Mono, Inter } from 'next/font/google'
import '../globals.css'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/core/components/theme/theme-provider'
import { locales } from '@/core/i18n/locales'
import { baseUrl } from '@/app/sitemap'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  const t = await getTranslations({
    locale,
  })

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('home.title'),
      template: '%s | Blog',
    },
    description:
      'César Alberca is a Senior Front-end Architect with over 10 years of experience in React, Angular, and Vue. Dedicated to best practices, architecture, and testing, César is also an international speaker, digital nomad, and podcast host. Explore his projects, talks, and insights on modern web development.',
    openGraph: {
      title: 'César Alberca | Front-end Software Architect',
      description:
        'Explore the world of César Alberca, a Senior Frontend Architect with over 10 years of experience in React, Angular, and Vue. Passionate about best practices, architecture, and testing, César shares his knowledge as an international speaker, freelancer, and podcast host. Discover his projects, talks, and more on his personal site.',
      url: baseUrl,
      siteName: 'cesalberca',
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const inter = Inter({ subsets: ['latin'] })
const azeret = Azeret_Mono({ subsets: ['latin'], weight: '400', variable: '--font-azeret-mono' })

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`antialiased font-medium lg:mx-auto sm:text-lg text-base ${inter.className} ${azeret.variable}`}>
        <ThemeProvider attribute="class" enableSystem={false} forcedTheme="dark" disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}