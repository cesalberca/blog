import type { FC, PropsWithChildren } from 'react'

export const Card: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
