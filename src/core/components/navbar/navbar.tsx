import { FC, useState } from 'react'
import styles from './navbar.module.scss'
import { Direction } from '../../types/direction'
import { bind } from '../../utils/bind'
import { Links } from '../links/links'
import { Options } from '../options/options'

const cx = bind(styles)

export const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className={cx('navbar')}>
      <nav className={cx('mobile-navigation')}>
        <button
          type="button"
          aria-label="Menu"
          className={cx({ hamburger: true, 'is-active': isActive })}
          onClick={() => setIsActive(x => !x)}
        >
          <span className={cx('hamburger-box')}>
            <span className={cx('hamburger-inner')}></span>
          </span>
        </button>

        <Options />

        <div className={cx({ backdrop: true, 'has-backdrop': isActive })}>
          <Links direction={Direction.VERTICAL}></Links>
        </div>
        <div className={cx({ veil: true, 'show-veil': isActive })} onClick={() => setIsActive(false)}></div>
      </nav>

      <nav className={cx('desktop-navigation')}>
        <div className={cx('wrapper')}>
          <Links />
          <Options />
        </div>
      </nav>
    </header>
  )
}
