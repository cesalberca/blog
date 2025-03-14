import { Page } from '@/core/components/page/page'
import type { ReactNode } from 'react'
import { Background } from '@/core/components/background/background'
import { AccentText } from '@/core/components/accent-text/accent-text'

export function CaseStudyLayout({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Page>
      <Background className="w-full h-[60vh]">
        <div className="p-xl flex items-center justify-center h-full">
          <h1 className="text-center">
            <AccentText>{title}</AccentText>
          </h1>
        </div>
      </Background>
      <article className="wrapper my-l prose dark:prose-invert max-w-3xl mx-auto">{children}</article>
    </Page>
  )
}
