import type { FC, PropsWithChildren } from 'react'
import { Navbar } from '../navbar/navbar'
import { Footer } from '../footer/footer'
import { cn } from '@/lib/utils'

export const Page: FC<PropsWithChildren<{ top?: boolean }>> = ({ children, top = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="w-full" />
      <main className={cn('flex-grow', { 'mt-[100px]': !top })}>{children}</main>
      <Footer />
    </div>
  )
}
