import type { Datetime } from '@/core/date/datetime'

export interface NewsletterMetadata {
  slug: string
  title: string
  description: string
  date?: Datetime
}
