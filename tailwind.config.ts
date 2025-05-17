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
      // In Tailwind v4, arbitrary spacing values are not allowed
      // Converted to numeric values based on the 4px scale:
      // xxs (8px) = 2, xs (12px) = 3, s (16px) = 4, m (24px) = 6,
      // l (32px) = 8, xl (48px) = 12, xxl (56px) = 14
    },
  },
} satisfies Config

export default config
