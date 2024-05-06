import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

export const ButtonIcon: FC<{ icon: StaticImageData | string; onClick: () => void; alt: string }> = ({
  icon,
  onClick,
  alt,
}) => {
  return (
    <button onClick={onClick}>
      <Image  src={icon} alt={alt} />
    </button>
  )
}
