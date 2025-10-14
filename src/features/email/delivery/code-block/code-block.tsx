import { type FC, type PropsWithChildren } from 'react'
import { CodeBlock as EmailCodeBlock, type PrismLanguage, synthwave84 } from '@react-email/code-block'
import { cn } from '@/lib/utils'
import { Column, Row, Section } from '@react-email/components'

export const CodeBlock: FC<PropsWithChildren<{ className?: string; code: string; language: PrismLanguage }>> = ({
  code,
  className,
  language,
}) => {
  return (
    <Section className="w-xl">
      <Row className="w-xl">
        <Column className="overflow-x-auto whitespace-nowrap w-xl">
          <EmailCodeBlock
            className={cn('text-xs', className)}
            language={language}
            lineNumbers
            code={code}
            theme={synthwave84}
          ></EmailCodeBlock>
        </Column>
      </Row>
    </Section>
  )
}
