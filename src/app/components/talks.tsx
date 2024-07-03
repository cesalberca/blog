import Link from 'next/link'
import { getTalks } from '../utils-talks'

export function Talks() {
  const allTalks = getTalks()

  return (
    <div>
      {allTalks.map(post => (
        <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums"></p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
