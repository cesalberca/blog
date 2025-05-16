import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

const config = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        xxs: '8px',
        xs: '12px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '56px',
      },
    },
  },
} satisfies Config

export default config
