import { Talks } from '../components/talks'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <Talks />
    </section>
  )
}
