import type { FC, PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { NewsletterPage } from '@/features/newsletter/delivery/newsletter.page'
import { getNewsletter } from '@/newsletters'

const Layout: FC<PropsWithChildren<{ params: Promise<{ slug: string }> }>> = async ({ children, params }) => {
  const { slug } = await params
  const locale = await getLocale()
  const metadata = await getNewsletter({ slug, locale })

  if (!metadata) {
    notFound()
  }

  return (
    <NewsletterPage slug={slug} metadata={metadata}>
      {children}
    </NewsletterPage>
  )
}

export default Layout
