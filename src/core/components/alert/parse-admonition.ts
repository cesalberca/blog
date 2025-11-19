export interface ParsedAdmonition {
  type: 'note' | 'tip' | 'important' | 'warning' | 'caution'
  content: string
}

/**
 * Parses a GitHub-style admonition directive from a plain text string.
 * Supported forms: [!NOTE], [!TIP], [!IMPORTANT], [!WARNING], [!CAUTION]
 * Returns the mapped alert type and content with the directive removed,
 * or null if the string does not start with a supported directive.
 */
export function parseAdmonition(allText: string): ParsedAdmonition | null {
  const match = allText.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i)
  if (!match?.[1]) return null

  const kind = match[1].toUpperCase() as 'NOTE' | 'TIP' | 'IMPORTANT' | 'WARNING' | 'CAUTION'
  const map: Record<typeof kind, ParsedAdmonition['type']> = {
    NOTE: 'note',
    TIP: 'tip',
    IMPORTANT: 'important',
    WARNING: 'warning',
    CAUTION: 'caution',
  }

  const content = allText.slice(match[0].length).trim()
  return { type: map[kind], content }
}
