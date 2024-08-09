import type { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Hero: FC<PropsWithChildren<{ image?: string; className?: string }>> = ({ image, className, children }) => {
  return (
    <div className={cn('full-width-section h-[60vh]', className)}>
      {image && (
        <Image
          className="w-full h-full object-cover overflow-hidden object-top md:object-contain pt-16"
          width={1024}
          height={720}
          src={image}
          alt={''}
          layout="responsive"
        />
      )}
      <div className="mx-auto max-w-xl inset-0 absolute flex items-center justify-center">{children}</div>
    </div>
  )
}
