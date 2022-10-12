export interface TalkDto {
  body: string
  attributes: {
    title: string
    length: number
    difficulty: string
    language: string
    topics: string[]
    events: {
      name: string
      date: string
      slides: string
      demo: string | undefined
      video: string
      code: string
    }[]
  }
}
