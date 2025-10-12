import { EmailTemplate } from './email-template'
import { Container, Link, Section, Text, Row, Column } from '@react-email/components'
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
      <Section className="sm:px-6 border-t border-border">
        <Text className="text-foreground mb-4 mt-0 sm:text-center text-lg font-medium">
          Help me by sharing this newsletter
        </Text>

        <Container className="w-full sm:w-2/3">
          <Row>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <SiX size={16} className="inline-block mr-2"></SiX>
                X/Twitter
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <SiLinkedin size={16} className="inline-block mr-2" />
                LinkedIn
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <SiInstagram size={16} className="inline-block mr-2" />
                Instagram
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-primary hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <LucideMail size={16} className="inline-block mr-2" />
                Email
              </Link>
            </Column>
          </Row>
        </Container>
      </Section>
    </EmailTemplate>
  )
}
