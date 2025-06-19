import { type FC, type PropsWithChildren } from 'react'

export const Masonry: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 wrapper">{children}</div>
}
