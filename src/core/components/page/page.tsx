import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

interface CustomCSS extends CSSProperties {
  '--navbar-background': string
  '--navbar-position': string
}

export const Page: FC<PropsWithChildren<{ topSection?: ReactNode; focused?: boolean }>> = ({
  children,
  topSection,
  focused,
}) => {
  return (
    <div
      style={
        {
          '--navbar-background': focused ? 'transparent' : 'var(--black-color)',
          '--navbar-position': focused ? 'absolute' : 'fixed',
        } as CustomCSS
      }
    >
      <Navbar />
      {topSection}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
