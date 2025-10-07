import { EmailTemplate } from './email-template'
import { Link, Section, Text } from '@react-email/components'
import { type FC, type PropsWithChildren } from 'react'
import { emailImageBaseUrl } from '@/lib/email-image-base-url'

interface NewsletterEmailProps {
  title: string
  description: string
  browserUrl: string
  shareUrl?: string
}

export const NewsletterTemplate: FC<PropsWithChildren<NewsletterEmailProps>> = ({
  title,
  description,
  children,
  browserUrl,
  shareUrl,
}) => {
  const urlToShare = shareUrl ?? browserUrl ?? emailImageBaseUrl('')
  const encodedTitle = encodeURIComponent(typeof title === 'string' ? title : 'Newsletter')
  const encodedUrl = encodeURIComponent(urlToShare)

  return (
    <EmailTemplate title={title} description={description} browserUrl={browserUrl}>
      {children}

      {/* Social Sharing Footer */}
      <Section className="bg-muted py-6 px-6 border-t border-border">
        <Text className="text-foreground text-sm mb-4 text-center font-medium">Share this newsletter</Text>

        <Text className="text-center mb-0">
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            className="inline-block mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </Link>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            className="inline-block mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            LinkedIn
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            className="inline-block mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </Link>
          <Link
            href={`mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`}
            className="inline-block mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </Link>
        </Text>
      </Section>
    </EmailTemplate>
  )
}
