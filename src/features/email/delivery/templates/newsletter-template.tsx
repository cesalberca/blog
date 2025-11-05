import { EmailTemplate } from './email-template'
import { Column, Container, Link, Row, Section, Text, Img } from '@react-email/components'
import { type FC, type PropsWithChildren } from 'react'
import { emailImageBaseUrl } from '@/lib/email-image-base-url'

interface NewsletterEmailProps {
  title: string
  description: string
  browserUrl: string
}

export const NewsletterTemplate: FC<PropsWithChildren<NewsletterEmailProps>> = ({
  title,
  description,
  children,
  browserUrl,
}) => {
  const urlToShare = process.env['NEXT_PUBLIC_URL'] + '/newsletter/' + browserUrl
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(urlToShare)
  const shareUrl = (by: string) => encodedTitle + ' ' + encodedUrl + ' by ' + by

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
      <Section className="sm:px-6 mt-12">
        <Text className="text-foreground mb-4 mt-0 text-center text-lg font-medium">
          Help me by sharing this newsletter
        </Text>

        <Container className="w-full flex flex-col items-center sm:w-2/3">
          <Row>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://x.com/intent/tweet?text=${shareUrl('@cesalberca')}`}
                className="m-0 p-0 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline text-center"
              >
                <span>
                  <Img
                    alt="X"
                    src={emailImageBaseUrl('x.png')}
                    width="16"
                    height="16"
                    className="inline-block mr-1"
                  ></Img>
                  X/Twitter
                </span>
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`}
                className="m-0 p-0 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline text-center"
              >
                <span>
                  <Img
                    alt="LinkedIn"
                    src={emailImageBaseUrl('linkedin.png')}
                    width="16"
                    height="16"
                    className="inline-block mr-1"
                  ></Img>
                  LinkedIn
                </span>
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`https://bsky.app/intent/compose?text=${shareUrl('@cesalberca.com')}`}
                className="m-0 p-0 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline text-center"
              >
                <span>
                  <Img
                    alt="Bluesky"
                    src={emailImageBaseUrl('bluesky.png')}
                    width="16"
                    height="16"
                    className="inline-block mr-1"
                  ></Img>
                  Bluesky
                </span>
              </Link>
            </Column>
            <Column className="w-1/4 text-center">
              <Link
                href={`mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`}
                className="m-0 p-0 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline text-center"
              >
                <span>
                  <Img
                    alt="Email"
                    src={emailImageBaseUrl('email.png')}
                    width="16"
                    height="16"
                    className="inline-block mr-1"
                  ></Img>
                  Email
                </span>
              </Link>
            </Column>
          </Row>
        </Container>
      </Section>
    </EmailTemplate>
  )
}
