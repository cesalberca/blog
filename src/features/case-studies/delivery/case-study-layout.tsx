import { Page } from '@/core/components/page/page'
import type { ReactNode } from 'react'
import { Background } from '@/core/components/background/background'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { getLocale } from 'next-intl/server'
import { CaseStudyMetadata } from '../domain/case-study'

export async function CaseStudyLayout({ children, slug }: { children: ReactNode; slug: string }) {
  const locale = await getLocale()

  const { metadata } = (await import(`@/app/[locale]/case-studies/(${locale})/${slug}/page.mdx`)) as {
    metadata: CaseStudyMetadata
  }

  return (
    <Page>
      <Background className="w-full h-[60vh]" image={`/assets/images/case-studies/${metadata.image}`}>
        <div className="p-xl flex items-center justify-center h-full">
          <h1 className="text-center">
            <AccentText>{metadata.title}</AccentText>
          </h1>
        </div>
      </Background>
      <article className="wrapper my-l prose dark:prose-invert max-w-3xl mx-auto">{children}</article>
    </Page>
  )
}
