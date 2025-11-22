import type { FC, PropsWithChildren } from 'react'
import { Section } from '@react-email/components'
import { getAlertImage } from '@/core/components/alert/alert-config'
import { cn } from '@/lib/utils'

type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution'

const alertConfig: Record<AlertType, { color: string; borderColor: string; bgColor: string; textColor: string }> = {
  note: {
    color: 'text-blue-500',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
  },
  tip: {
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
  },
  important: {
    color: 'text-purple-500',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
  },
  warning: {
    color: 'text-amber-500',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
  },
  caution: {
    color: 'text-red-500',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-400',
  },
}

export const ImageAlert: FC<
  PropsWithChildren<{
    type: AlertType
  }>
> = ({ type, children }) => {
  const config = alertConfig[type]
  const alertImage = getAlertImage(type, 'png')

  return (
    <Section style={{ paddingTop: '20px', paddingBottom: '8px' }}>
      {/*
        Email-safe layout:
        - Use a background image on the container TD.
        - Add top/left padding equal to half the icon size so the icon visually sits
          half outside the content box at the top-left corner.
        - No flexbox, positioning, or negative margins used.
      */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }} role="presentation">
        <tbody>
          <tr>
            {/* Configure the background image on this cell */}
            {(() => {
              const bgStyles = {
                padding: 0,
                backgroundImage: `url(${alertImage})`,
                backgroundRepeat: 'no-repeat' as const,
                backgroundPosition: 'top left' as const,
                backgroundSize: '40px',
              }
              return (
                <td style={bgStyles}>
                  {/* Content box */}
                  <div className={cn('rounded-lg border-l-2 p-6', config.bgColor, config.borderColor)}>
                    <div className="text-base leading-relaxed text-foreground/90 not-prose">{children}</div>
                  </div>
                </td>
              )
            })()}
          </tr>
        </tbody>
      </table>
    </Section>
  )
}
