import type { FC, PropsWithChildren } from 'react'
import { TalkPage } from '@/features/talks/delivery/talk.page'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { getTalk } from '@/talks'

const Layout: FC<PropsWithChildren<{ params: Promise<{ slug: string }> }>> = async ({ children, params }) => {
  const { slug } = await params
  const locale = await getLocale()
  const metadata = await getTalk({ slug, locale })

  if (!metadata) {
    notFound()
  }

  return (
    <TalkPage slug={slug} metadata={metadata}>
      {children}
    </TalkPage>
  )
}

export default Layout
