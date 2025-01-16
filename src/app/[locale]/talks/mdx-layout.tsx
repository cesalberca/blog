import type { ReactNode } from 'react'
import { TalkPage } from '@/features/talks/delivery/talk.page'
import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'

export default async function Layout({ children, slug }: { children: ReactNode; slug: string }) {
  const { metadata } = (await import(`./(talks)/${slug}/page.mdx`)) as { metadata: TalkMetadata }

  return (
    <TalkPage slug={slug} metadata={metadata}>
      {children}
    </TalkPage>
  )
}
