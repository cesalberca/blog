import { EmailTemplate } from './email-template'
import { Column, Container, Link, Row, Section, Text, Img } from '@react-email/components'
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
    <EmailTemplate
      title={title}
      description={description}
      browserUrl={browserUrl}
      footer={
        <Container className="w-2/3">
          <Text className="text-muted-foreground text-xs mb-0 text-center leading-relaxed">
            You&#39;re receiving this email because you subscribed voluntarily and confirmed it by clicking a link in a
            verification email.
          </Text>
        </Container>
      }
    >
      {children}

      {/* Social Sharing Footer */}
      <Section className="sm:px-6 mt-6">
        <Text className="text-foreground mb-4 mt-0 sm:text-center text-lg font-medium">
          Help me by sharing this newsletter
        </Text>

        <Container className="w-full sm:w-2/3">
          <Row>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <Img
                  alt="X"
                  src={emailImageBaseUrl('x.png')}
                  width="16"
                  height="16"
                  className="inline-block md:mr-2"
                ></Img>
                X/Twitter
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <Img
                  alt="LinkedIn"
                  src={emailImageBaseUrl('linkedin.png')}
                  width="16"
                  height="16"
                  className="inline-block md:mr-2"
                ></Img>
                LinkedIn
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <Img
                  alt="Instagram"
                  src={emailImageBaseUrl('instagram.png')}
                  width="16"
                  height="16"
                  className="inline-block md:mr-2"
                ></Img>
                Instagram
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`}
                className="mx-2 py-2 px-3 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline inline-block text-center"
              >
                <Img
                  alt="Email"
                  src={emailImageBaseUrl('email.png')}
                  width="16"
                  height="16"
                  className="inline-block md:mr-2"
                ></Img>
                Email
              </Link>
            </Column>
          </Row>
        </Container>
      </Section>
    </EmailTemplate>
  )
}
