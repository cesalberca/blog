import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react'
import styles from './page.module.scss'
import { bind } from '../../utils/bind'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

const cx = bind(styles)

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
      className={cx('page')}
      style={
        {
          '--navbar-background': focused ? 'transparent' : 'var(--primary-color)',
          '--navbar-position': focused ? 'absolute' : 'initial',
        } as CustomCSS
      }
    >
      <Navbar />
      {topSection}
      <main className={cx('wrapper')}>{children}</main>
      <Footer />
    </div>
  )
}
