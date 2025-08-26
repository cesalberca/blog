import type { FC } from 'react'
import { Newsletter } from '@/core/components/newsletter/newsletter'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Background } from '@/core/components/background/background'
import { Link } from '@/core/components/link/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar, Code, Layers } from 'lucide-react'

export const NewsletterPage: FC = () => {
  const recentEmails = [
    {
      id: '1',
      title: 'Building Scalable React Architecture with Domain-Driven Design',
      date: '2024-08-20',
      url: '#',
      excerpt:
        'Learn how to structure your React applications using DDD principles for better maintainability and scalability.',
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns for Frontend Architecture',
      date: '2024-08-13',
      url: '#',
      excerpt: 'Discover advanced TypeScript techniques to build more robust and type-safe frontend architectures.',
    },
    {
      id: '3',
      title: 'Micro-frontends: Architecture Patterns and Implementation',
      date: '2024-08-06',
      url: '#',
      excerpt: 'Explore different micro-frontend patterns and when to use each approach in your architecture.',
    },
    {
      id: '4',
      title: 'State Management Architectures: Redux vs Zustand vs Context',
      date: '2024-07-30',
      url: '#',
      excerpt: 'Compare different state management solutions and their architectural implications.',
    },
    {
      id: '5',
      title: 'Component Design Systems: Architecture Best Practices',
      date: '2024-07-23',
      url: '#',
      excerpt: 'Build maintainable and scalable design systems with proper architectural foundations.',
    },
  ]

  return (
    <Page top={true}>
      <div className="min-h-[60vh] flex items-center justify-center">
        <Background>
          <div className="max-w-4xl mx-auto px-8 py-12 mt-10">
            <div className="text-center">
              <h1 className="mb-8">
                <AccentText>Frontend Architecture Newsletter</AccentText>
              </h1>
              <p className="text-xl mb-4 text-muted-foreground max-w-2xl mx-auto">
                Weekly insights on building Scalable, Maintainable Frontend Architectures.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Newsletter />
            </div>
          </div>
        </Background>
      </div>

      {/* Recent Newsletters Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <AccentText>Recent Newsletters</AccentText>
            </h2>
            <p className="text-muted-foreground">
              Deep dives into frontend architecture patterns, best practices, and real-world implementations.
            </p>
          </div>

          <div className="grid gap-6">
            {recentEmails.map(email => (
              <div key={email.id} className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(email.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 flex items-start gap-2">{email.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{email.excerpt}</p>
                    <Link to={email.url}>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Read Newsletter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
