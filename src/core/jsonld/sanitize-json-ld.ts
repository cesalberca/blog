export function sanitizeJsonLd(jsonLd: unknown) {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}
