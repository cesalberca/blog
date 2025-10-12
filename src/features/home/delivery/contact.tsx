'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { Link } from '@/core/components/link/link'
import { sendGAEvent } from '@next/third-parties/google'
import { useRouter } from 'next/navigation'
import { httpClient } from '@/lib/http-client'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormData = z.infer<typeof formSchema>

export const ContactForm: FC = () => {
  const t = useTranslations()
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      await httpClient.post('/api/contact', data)

      sendGAEvent('event', 'conversion', { email: data.email, name: data.name })
      router.push('/thank-you')
    } catch (error: any) {
      const errorMessage = error.data?.error || error.message || 'Something went wrong'

      form.setError('root.server', {
        type: 'server',
        message: errorMessage,
      })
    }
  }

  return (
    <div>
      <p
        className="
      mb-5"
      >
        {t('home.contact.appointmentDescription')}{' '}
        <Link href="https://cesalberca.com/chat">{t('home.contact.appointmentLink')}</Link>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-base">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('home.contact.name')}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('home.contact.email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('home.contact.emailPlaceholder')} {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('home.contact.message')}</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} />
                </FormControl>
                <FormDescription>{t('home.contact.messageDescription')}</FormDescription>
                <FormMessage>{form.formState.errors.message?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? t('home.contact.submitting') : t('home.contact.submit')}
          </Button>
        </form>
      </Form>
    </div>
  )
}
