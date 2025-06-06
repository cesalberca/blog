import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
}

export const CTA: FC<CTAProps> = ({ title, description, buttonText, buttonLink, className = '' }) => {
  return (
    <div className={`bg-accent p-6 rounded-lg my-8 ${className}`}>
      <h3 className="text-xl font-bold mb-2 mt-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Button asChild>
        <Link type="invisible" to={buttonLink}>
          {buttonText} →
        </Link>
      </Button>
    </div>
  )
}
