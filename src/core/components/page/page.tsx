import type { FC, PropsWithChildren } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'
import { cn } from '@/lib/utils'
import { BookAnnouncementBanner } from '@/core/components/banner/book-announcement-banner'

export const Page: FC<PropsWithChildren<{ top?: boolean }>> = ({ children, top = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <BookAnnouncementBanner />
      <Navbar className="w-full top-12" />
      <main className={cn('flex-grow', { 'mt-[148px]': !top })}>{children}</main>
      <Footer />
    </div>
  )
}
