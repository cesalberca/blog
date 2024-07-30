import type { FC } from 'react'
import { Card } from '../../../core/components/card/card'
import { Link } from '../../../core/components/link/link'
import { Url } from '../../../core/types/url'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import { Markdown } from '@/core/components/markdown/markdown'
import { Technologies } from '@/features/home/ui/technologies'
import { MaskCard } from '@/core/components/mask-card/mask-card'

export const Services: FC = () => {
  const t = useTranslations()

  return (
    <div>
      <p>Hi</p>
      <MaskCard>Test</MaskCard>
    </div>
  )
}
