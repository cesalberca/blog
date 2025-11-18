import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'

/**
 * Comparator for sorting newsletters: undefined dates first, then by most recent date (descending).
 */
export function compareNewsletters(a: NewsletterMetadata, b: NewsletterMetadata): number {
  const aTime = a.date?.getTime()
  const bTime = b.date?.getTime()

  const aHasDate = Number.isFinite(aTime)
  const bHasDate = Number.isFinite(bTime)

  if (!aHasDate && !bHasDate) return 0
  if (!aHasDate) return -1
  if (!bHasDate) return 1

  // Both have valid dates: most recent first
  return (bTime as number) - (aTime as number)
}
