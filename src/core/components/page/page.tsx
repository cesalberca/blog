import type { FC, PropsWithChildren, ReactNode } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

export const Page: FC<PropsWithChildren<{ topSection?: ReactNode }>> = ({ children, topSection }) => {
  return (
    <div>
      <Navbar />
      {topSection}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
