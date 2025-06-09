import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params

  try {
    const Content = (await import(`./${locale}.mdx`)).default
    return <Content />
  } catch (error) {
    notFound()
  }
}
