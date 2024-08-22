import { type FC, type PropsWithChildren } from 'react'

export const Masonry: FC<PropsWithChildren> = ({ children }) => {
  return <div className="columns-1 md:columns-2 gap-4 wrapper">{children}</div>
}
