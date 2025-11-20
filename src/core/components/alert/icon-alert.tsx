import type { FC, PropsWithChildren } from 'react'
import { type AlertType, getAlertImage } from './alert-config'
import { Alert } from '@/core/components/alert/alert'

export const IconAlert: FC<
  PropsWithChildren<{
    type: AlertType
  }>
> = ({ type, children }) => {
  const AlertImage = getAlertImage(type, 'svg')

  return (
    <Alert type={type} icon={<AlertImage />}>
      {children}
    </Alert>
  )
}
