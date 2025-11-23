import { EmailTemplate } from './email-template'
import { Column, Container, Link, Row, Section, Text, Img } from '@react-email/components'
import type { FC, PropsWithChildren } from 'react'
import { emailImageBaseUrl } from '@/lib/email-image-base-url'
import { env } from '@/env'

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
  const urlToShare = `${env.NEXT_PUBLIC_URL}/newsletter/${browserUrl}`
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(urlToShare)

  const shareUrl = (by: string) => `${encodedTitle} ${encodedUrl} by ${by}`

  const socialMedia: { href: string; icon: string; name: string }[] = [
    {
      href: `https://x.com/intent/tweet?text=${shareUrl('@cesalberca')}`,
      name: 'X/Twitter',
      icon: 'x.png',
    },

    {
      href: `https://x.com/intent/tweet?text=${shareUrl('@cesalberca')}`,
      name: 'LinkedIn',
      icon: 'linkedin.png',
    },

    {
      href: `https://bsky.app/intent/compose?text=${shareUrl('@cesalberca.com')}`,
      name: 'Bluesky',
      icon: 'bluesky.png',
    },

    {
      href: `mailto:?subject=${encodedTitle}&body=Check out this newsletter: ${encodedUrl}`,
      name: 'Email',
      icon: 'email.png',
    },
  ]

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

        <Container className="w-full sm:w-2/3">
          <Row>
            {socialMedia.map((x) => {
              return (
                <Column key={x.name} className="w-1/4 text-center">
                  <Link
                    href={x.href}
                    className="m-0 p-0 text-muted-foreground text-xs rounded hover:bg-muted hover:text-foreground transition-colors no-underline"
                  >
                    <Column className="text-center">
                      <span className="text-xs">
                        <Img
                          alt={x.name}
                          src={emailImageBaseUrl(x.icon)}
                          width="16"
                          height="16"
                          className="inline-block"
                        ></Img>
                        {x.name}
                      </span>
                    </Column>
                  </Link>
                </Column>
              )
            })}
          </Row>
        </Container>
        <Container className="mt-8">
          <Text className="text-xs text-center">
            Found a <em>typo</em>? The email doesn&#39;t render <em>correctly</em> in your email client? Have{' '}
            <em>any</em>
            feedback? Please, <strong>feel free to reply to this email</strong> and I&#39;ll get back to you{' '}
            <strong>as soon as I can</strong>. <span className="underline">Thank you!</span>
          </Text>
        </Container>
      </Section>
    </EmailTemplate>
  )
}
