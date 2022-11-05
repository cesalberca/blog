type Messages = typeof import('./src/core/i18n/en.json')
declare interface IntlMessages extends Messages {}

declare module '*.svg' {
  const content: string
  export default content
}
