import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Link as LocaleLink } from '@/core/i18n/routing'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  href: string
  type?: 'navigation' | 'invisible'
  className?: string
  onClick?: () => void
}

const linkVariants = cva(
  'text-foreground no-underline inline box-decoration-clone shadow-[inset_0_-1px_0_0_currentColor] transition-shadow duration-300 hover:shadow-[inset_0_0_0_0_currentColor]',
  {
    variants: {
      type: {
        default: 'underline',
        invisible: 'shadow-none',
        navigation: 'shadow-none',
      },
    },
  },
)

export const Link: FC<PropsWithChildren<Props>> = ({ href, children, className, type, onClick }) => {
  const isExternal = href !== undefined && /^http/.test(href.toString())
  const t = useTranslations()

  return (
    <LocaleLink
      href={href as ComponentProps<typeof LocaleLink>['href']}
      passHref
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cn(linkVariants({ type }), className)}
      onClick={onClick}
    >
      {children}
      {isExternal && type !== 'invisible' && type !== 'navigation' ? (
        <span className="ml-1 inline-block">
          <ExternalLink size={12} />
          <span className="sr-only">{t('common.externalLink')}</span>
        </span>
      ) : null}
    </LocaleLink>
  )
}
