import type { FC, PropsWithChildren } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="w-full" />
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
