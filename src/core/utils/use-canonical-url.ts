import { useRouter } from 'next/router'
import { Url } from '../types/url'

export function useCanonicalUrl(): Url {
  const router = useRouter()
  let url = process.env.NEXT_PUBLIC_URL!
  url += '/' + router.locale + (router.asPath === '/' ? '' : router.asPath).split('?')[0]
  return Url.fromValue(url)
}
