import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import { cn } from '@/lib/utils'

export function WebCode({ children, ...props }: { children: string; className: string }) {
  const className = props?.className ?? ''
  const match = /language-(\w+)/.exec(className ?? '')
  return match ? (
    <SyntaxHighlighter
      {...props}
      language={match[1]}
      CodeTag="div"
      PreTag="div"
      style={dark}
      codeTagProps={{
        className: 'font-mono',
      }}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code
      {...props}
      className={cn(className, 'bg-muted px-[4px] py-[2px] mx-[2px] rounded not-prose text-foreground font-mono')}
    >
      {children}
    </code>
  )
}
