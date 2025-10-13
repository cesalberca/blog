import { type FC, type PropsWithChildren } from 'react'
import { CodeBlock as EmailCodeBlock, type PrismLanguage, synthwave84 } from '@react-email/code-block'
import { cn } from '@/lib/utils'
import { Container } from '@react-email/components'

export const CodeBlock: FC<PropsWithChildren<{ className?: string; code: string; language: PrismLanguage }>> = ({
  code,
  className,
  language,
}) => {
  return (
    <Container className="w-full">
      <EmailCodeBlock
        className={cn('text-sm overflow-y-scroll min-w-min', className)}
        language={language}
        lineNumbers
        code={code.trim()}
        theme={synthwave84}
      ></EmailCodeBlock>
    </Container>
  )
}
