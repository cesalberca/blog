import 'dotenv/config'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
  type TailwindConfig,
  Text,
} from '@react-email/components'
import type { FC, PropsWithChildren, ReactElement } from 'react'
import { emailImageBaseUrl } from '@/lib/email-image-base-url'

interface EmailTemplateProps {
  title: string
  description: string
  browserUrl?: string
  footer?: ReactElement
}

const config: TailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        primary: '#171717',
        background: '#ffffff',
        foreground: '#0a0a0a',
        secondary: '#f5f5f5',
        muted: '#f5f5f5',
        'muted-foreground': '#737373',
        border: '#e5e5e5',
      },
    },
  },
}

export const EmailTemplate: FC<PropsWithChildren<EmailTemplateProps>> = ({
  description,
  title,
  children,
  browserUrl,
  footer,
}) => {
  return (
    <Html className="dark">
      <Tailwind config={config}>
        <Head />
        <Preview>{description}</Preview>
        <Body className="font-sans m-0 p-0">
          <Container className="max-w-2xl mx-auto">
            {browserUrl && (
              <Section className="py-2 px-6 text-center border-b border-border">
                <Text className="text-muted-foreground text-xs m-0">
                  <Link
                    href={browserUrl}
                    className="text-muted-foreground underline hover:text-foreground transition-colors"
                  >
                    View this email in your browser
                  </Link>
                </Text>
              </Section>
            )}

            {/* Header */}
            <Section className="py-8 px-6 pb-0 pt-4 text-center border-b border-border">
              <Link href="https://cesalberca.com">
                <Img
                  src={emailImageBaseUrl('logo.png')}
                  width="45"
                  height="30"
                  alt="Logo"
                  className="w-[45px] h-auto mx-auto"
                />
                <Text className="text-foreground text-sm m-0 font-medium tracking-wide">César Alberca</Text>
                <Text className="text-muted-foreground text-xs mt-2 m-0 italic">
                  Helping You Build Scalable, AI-Ready Frontend Architecture
                </Text>
              </Link>
            </Section>

            {/* Main Content */}
            <Section className="max-w-md p-2">
              <Heading className="text-[54px] font-bold text-foreground text-left leading-tight w-full sm:w-4/5 my-2">
                {title}
              </Heading>

              <Section className="text-muted-foreground text-xl leading-relaxed mx-auto max-w-md">{children}</Section>

              <Section className="mt-4">
                <Img
                  src={emailImageBaseUrl('signature.png')}
                  width="501"
                  height="161"
                  alt="Handwritten César Alberca"
                  className="mx-auto max-w-full h-auto w-[400px] sm:w-[501px]"
                />
                <Text className="text-muted-foreground text-xs text-center m-0 leading-relaxed">
                  <em>Freelance Frontend Architect</em>
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-muted py-8 px-6 border-t border-border text-xs">
              {footer}

              <Text className="text-muted-foreground mb-4 text-center">
                <Link
                  href="{{{RESEND_UNSUBSCRIBE_URL}}}"
                  className="text-muted-foreground underline hover:text-foreground transition-colors"
                >
                  Unsubscribe
                </Link>
                {' / '}
                <Link
                  href={'https://cesalberca.com/'}
                  className="text-muted-foreground underline hover:text-foreground transition-colors"
                >
                  Visit Website
                </Link>
              </Text>

              <Text className="text-muted-foreground text-xs text-center m-0 italic">
                Copyright © 2025 all rights reserved.
              </Text>
              <Text className="text-muted-foreground text-xs text-center">
                <Link
                  href={'https://cesalberca.com/assets/email/César Alberca.vcf'}
                  className="text-muted-foreground underline hover:text-foreground transition-colors"
                >
                  Add me as a contact
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
