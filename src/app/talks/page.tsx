import { Talks } from '../components/talks'
import { Page } from '@/core/components/page/page'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

export default function TalksPage() {
  return (
    <Page>
      <Talks />
    </Page>
  )
}
