import type { FC, ReactNode } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'

type Tag = 'em' | 'strong' | 'leet'

interface Props {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode
  className?: string
}

export const RichText: FC<Props> = ({ children, className }) => (
  <div className={className}>
    {children({
      strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
      em: (chunks: ReactNode) => <em>{chunks}</em>,
      leet: (chunks: ReactNode) => <AccentText>{chunks}</AccentText>,
    })}
  </div>
)
