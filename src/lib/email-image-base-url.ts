const envUrl = process.env['NEXT_PRODUCTION_URL']

export const emailImageBaseUrl = (url?: string) => {
  if (envUrl === undefined) throw new Error('NEXT_PRODUCTION_URL is not defined. Please define it in your .env file.')

  return `${envUrl}/assets/emails/${url}`
}
