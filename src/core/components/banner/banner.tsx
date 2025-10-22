import type { FC, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BannerProps extends PropsWithChildren {
  variant?: 'info' | 'warning' | 'success' | 'announcement'
  position?: 'top' | 'bottom'
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

export const Banner: FC<BannerProps> = ({
  children,
  variant = 'info',
  position = 'top',
  dismissible = false,
  onDismiss,
  className,
}) => {
  const baseStyles = 'fixed left-0 w-full z-40 shadow-lg'

  const positionStyles = {
    top: 'top-0',
    bottom: 'bottom-0',
  }

  const variantStyles = {
    info: 'bg-blue-600 text-white',
    warning: 'bg-yellow-600 text-white',
    success: 'bg-green-600 text-white',
    announcement: 'bg-muted text-accent-foreground',
  }

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss()
    }
  }

  return (
    <div className={cn(baseStyles, positionStyles[position], variantStyles[variant], className)}>
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1">{children}</div>
        {dismissible && (
          <Button onClick={handleDismiss} variant="ghost" aria-label="Close banner">
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
