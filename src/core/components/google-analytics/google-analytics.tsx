'use client'

import { FC } from 'react'
import Script from 'next/script'

export const GoogleAnalytics: FC<{ measurementId: string }> = ({ measurementId }) => {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });

                gtag('config', '${measurementId}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  )
}
