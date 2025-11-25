import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

export const env = createEnv({
  server: {
    CI: z.string(),
    NODE_ENV: z.string(),
    BLOB_READ_WRITE_TOKEN: z.string(),
    NPMRC_GITHUB_TOKEN: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_EMAIL_FROM: z.string(),
    RESEND_TEST_EMAIL: z.string(),
    RESEND_AUDIENCE_ID: z.string(),
    JWT_SECRET: z.string(),
    NEWSLETTER_BROADCAST_TOKEN: z.string(),
    NEXT_PRODUCTION_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_URL: process.env['NEXT_PUBLIC_URL'],
  },
})
