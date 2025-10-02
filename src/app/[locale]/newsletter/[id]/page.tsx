import { notFound } from 'next/navigation'
import React, { type FC } from 'react'

interface NewsletterWebViewPageProps {
  params: {
    id: string
  }
}

const NewsletterWebViewPage: FC<NewsletterWebViewPageProps> = async ({ params }) => {
  const { id } = params

  const newsletterModule = await import(`@/content/emails/newsletters/${id}.tsx`)

  const Component = newsletterModule.default

  if (!Component) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Component />
    </div>
  )
}

export default NewsletterWebViewPage
