export interface TalkMetadata {
  title: string
  length: string
  slug: string
  difficulty: string
  language: string
  categories: string[]
  image: string
  abstract: string
  events: {
    name: string
    date: string
    slides: string
    video: string
  }[]
}
