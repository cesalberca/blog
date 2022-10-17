import { useRouter } from 'next/router'

export function useCanonicalUrl() {
  const router = useRouter()
  let url: string

  if (process.env.environment === 'PRODUCTION') {
    url = 'https://cesalberca.com'
  } else {
    url = 'http://localhost:3000'
  }

  url += '/' + router.locale + (router.asPath === '/' ? '' : router.asPath).split('?')[0]

  return url
}
