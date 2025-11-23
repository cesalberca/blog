export interface TalkMetadata {
  title: string
  length: string
  slug: string
  difficulty: string
  language: string
  categories: string[]
  image: string
  notes: string
  abstract: string
  events: {
    name: string
    date: string
    code: string
    slides: string
    video: string
  }[]
}
