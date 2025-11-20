import type { FC, ReactNode } from 'react'
import { type AlertType, getAlertImage } from './alert-config'
import { Alert } from '@/core/components/alert/alert'

export const IconAlert: FC<{
  type: AlertType
  children: ReactNode
}> = ({ type, children }) => {
  const AlertImage = getAlertImage(type, 'svg')
  const iconColor = {
    note: 'text-blue-500',
    tip: 'text-emerald-500',
    important: 'text-purple-500',
    warning: 'text-amber-500',
    caution: 'text-red-500',
  }

  return (
    <Alert icon={<AlertImage />} className={iconColor[type]}>
      {children}
    </Alert>
  )
}
