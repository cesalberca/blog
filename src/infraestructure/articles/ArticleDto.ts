export interface ArticleDto {
  body: string
  attributes: {
    title: string
    date: string
    locale: string
    image: string
  }
}
