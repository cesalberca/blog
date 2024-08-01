import type { FC, PropsWithChildren } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar className="w-full" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
