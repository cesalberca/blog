import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { HelpCircle } from 'lucide-react'

export const KoFiButton: FC = () => {
  const t = useTranslations()

  return (
    <div className="flex items-center mt-10 mr-4">
      <Button asChild variant="default" className="mr-1">
        <a href="https://ko-fi.com/cesalberca" target="_blank" rel="noopener noreferrer" className="no-underline">
          {t('common.kofi')}
        </a>
      </Button>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <HelpCircle className="h-5 w-5 cursor-help text-muted-foreground hover:text-foreground transition-colors" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{t('common.kofiTooltip')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
