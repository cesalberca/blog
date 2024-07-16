type Messages = typeof import('./src/core/i18n/translations/en.json')
declare interface IntlMessages extends Messages {}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}
