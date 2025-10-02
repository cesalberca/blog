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
  Text,
} from '@react-email/components'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { baseUrl } from '@/lib/base-url'

interface EmailTemplateProps {
  title: ReactNode
  description: string
}

export const EmailTemplate: FC<PropsWithChildren<EmailTemplateProps>> = ({ description, title, children }) => {
  return (
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: 'oklch(0.205 0 0)',
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>{description}</Preview>
        <Body className="font-sans dark">
          <Container>
            <Section>
              <Img src={baseUrl('assets/logo.svg')} width="40" height="40" alt="Logo" />
            </Section>

            <Section>
              <Heading>{title}</Heading>
              {children}
            </Section>

            <Section>
              <Text>Hi {'{{{FIRST_NAME|there}}}'},</Text>
              <Text>Thanks for reading</Text>
              <Text>
                You can <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}">unsubscribe here</Link>.
              </Text>
              <Text>
                Best regards,
                <br />
                César Alberca
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
