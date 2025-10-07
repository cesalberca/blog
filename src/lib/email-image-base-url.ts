const envUrl = process.env['NEXT_PUBLIC_URL']
const environment = process.env['NODE_ENV']
export const emailImageBaseUrl = (url?: string) => {
  if (envUrl === undefined) throw new Error('NEXT_PUBLIC_URL is not defined. Please define it in your .env file.')

  if (environment === 'development') return `/static/${url}`

  return `${envUrl}/assets/emails/${url}`
}
