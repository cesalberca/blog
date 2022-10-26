import { useRouter } from 'next/router'

export function useCanonicalUrl() {
  const router = useRouter()
  let url = process.env.NEXT_PUBLIC_URL
  url += '/' + router.locale + (router.asPath === '/' ? '' : router.asPath).split('?')[0]
  return url
}
