import type { FC, PropsWithChildren } from 'react'
import Image from 'next/image'

export const Hero: FC<PropsWithChildren<{ image?: string; className?: string }>> = ({ image, className, children }) => {
  return (
    <div className={className}>
      {image && <Image fill sizes={'100vw'} src={image} alt={''} />}
      <div>{children}</div>
    </div>
  )
}
