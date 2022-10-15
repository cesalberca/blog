import type { FC, PropsWithChildren } from 'react'
import styles from './page.module.scss'
import { bind } from '../../utils/bind'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'

const cx = bind(styles)

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cx('page')}>
      <Navbar />
      <main className={cx('wrapper')}>{children}</main>
      <Footer />
    </div>
  )
}
