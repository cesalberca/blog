export function sanitizeJsonLd(jsonLd: Record<string | number, unknown>) {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}
