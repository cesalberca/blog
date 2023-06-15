export interface TalkDto {
  body: string
  attributes: {
    title: string
    length: number
    difficulty: string
    language: string
    image: string
    topics: string[]
    notes?: string
    events?: {
      name: string
      date: string
      slides: string | undefined
      demo: string | undefined
      video: string | undefined
      code: string | undefined
    }[]
  }
}
