import { env } from '@/env'

const envUrl = env.NEXT_PRODUCTION_URL

export const emailImageBaseUrl = (url?: string) => {
  if (env.NODE_ENV === 'development') return `/static/${url}`

  return `${envUrl}/assets/emails/${url}`
}
