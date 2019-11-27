export interface ArticleDto {
  html: string
  attributes: {
    title: string
    date: string
    locale: string
    image: string
  }
}
