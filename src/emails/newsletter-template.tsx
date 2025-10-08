import { EmailTemplate } from './email-template'
import { Container, Link, Section, Text } from '@react-email/components'
import { type FC, type PropsWithChildren } from 'react'
import { emailImageBaseUrl } from '@/lib/email-image-base-url'
import { SiInstagram, SiLinkedin, SiX } from '@icons-pack/react-simple-icons'
import { LucideMail } from 'lucide-react'

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
      <Section className="px-6 border-t border-border">
        <Text className="text-foreground text-sm mb-4 text-center text-lg font-medium">Share this newsletter</Text>

        <Container className="w-2/3">
          <Text className="mb-0 flex justify-between">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
              className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline flex items-center gap-2"
            >
              <SiX size={16}></SiX>
              X/Twitter
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline  flex items-center gap-2"
            >
              <SiLinkedin size={16} />
              LinkedIn
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline  flex items-center gap-2"
            >
              <SiInstagram size={16} />
              Instagram
            </Link>
            <Link
              href={`mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`}
              className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline  flex items-center gap-2"
            >
              <LucideMail size={16} />
              Email
            </Link>
          </Text>
        </Container>
      </Section>
    </EmailTemplate>
  )
}
