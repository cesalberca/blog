import type { ReactNode } from 'react'
import type { TalkMetadata } from '@/talks'
import { TalkPage } from '@/features/talks/delivery/talk.page'

export default async function MdxLayout({ children, slug }: { children: ReactNode; slug: string }) {
  const { metadata } = (await import(`./(talks)/${slug}/page.mdx`)) as { metadata: TalkMetadata }

  return (
    <TalkPage slug={slug} metadata={metadata}>
      {children}
    </TalkPage>
  )
}
