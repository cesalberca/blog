const envUrl = process.env['NEXT_PUBLIC_URL']
export const baseUrl = (url?: string) => {
  if (envUrl === undefined) throw new Error('NEXT_PUBLIC_URL is not defined. Please define it in your .env file.')

  return `${envUrl}/${url}`
}
