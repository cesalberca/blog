import type { ReactNode } from 'react'
import type { Metadata } from 'next'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-dark.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-light.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children
}
