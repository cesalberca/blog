import type { FC, PropsWithChildren } from 'react'
import { type AlertType, getAlertImage } from './alert-config'
import { Alert } from '@/core/components/alert/alert'
import { Img } from '@react-email/components'

export const ImageAlert: FC<
  PropsWithChildren<{
    type: AlertType
  }>
> = ({ type, children }) => {
  const alertImage = getAlertImage(type, 'png')

  return (
    <Alert type={type} icon={<Img src={alertImage} alt="" width="20" height="20" />}>
      {children}
    </Alert>
  )
}
