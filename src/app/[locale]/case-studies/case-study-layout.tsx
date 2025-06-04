import { Page } from '@/core/components/page/page'
import type { FC, PropsWithChildren } from 'react'
import { Background } from '@/core/components/background/background'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { getLocale } from 'next-intl/server'
import { CaseStudyMetadata } from '../../../features/case-studies/domain/case-study'

export const CaseStudyLayout: FC<PropsWithChildren<{ slug: string }>> = async ({ children, slug }) => {
  const locale = await getLocale()

  const { metadata } = (await import(`./${slug}/${locale}.mdx`)) as {
    metadata: CaseStudyMetadata
  }

  return (
    <Page>
      <Background className="w-full h-[60vh]" image={`/assets/images/case-studies/${metadata.image}`}>
        <div className="p-xl flex items-center justify-center h-full p-4">
          <h1 className="text-center">
            <AccentText>{metadata.title}</AccentText>
          </h1>
        </div>
      </Background>
      <article className="wrapper my-8 prose dark:prose-invert max-w-3xl mx-auto">{children}</article>
    </Page>
  )
}
