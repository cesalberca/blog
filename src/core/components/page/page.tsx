import type { FC, PropsWithChildren } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar className="w-full" />
      <main className="mx-auto max-w-xl flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  )
}
