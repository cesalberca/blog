import type { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Hero: FC<PropsWithChildren<{ image?: string; className?: string; imageClassName?: string }>> = ({
  image,
  className,
  imageClassName,
  children,
}) => {
  return (
    <div className={cn('h-[60vh] overflow-hidden relative', className)}>
      {image && (
        <Image
          className={cn('w-full h-auto object-cover overflow-hidden', imageClassName)}
          width={720}
          height={405}
          src={image}
          alt={''}
          loading="eager"
        />
      )}
      <div className="inset-0 absolute flex items-center justify-center">{children}</div>
    </div>
  )
}
