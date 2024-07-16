import createMiddleware from 'next-intl/middleware'

export const i18nMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
}
