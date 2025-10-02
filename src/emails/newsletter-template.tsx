import { EmailTemplate } from './email-template'
import { type FC, type PropsWithChildren } from 'react'

interface NewsletterEmailProps {
  title: string
  description: string
}

export const NewsletterTemplate: FC<PropsWithChildren<NewsletterEmailProps>> = ({ title, description, children }) => {
  return (
    <EmailTemplate title={title} description={description}>
      {children}
    </EmailTemplate>
  )
}
