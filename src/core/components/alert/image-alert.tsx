import type { FC, ReactNode } from 'react'
import { type AlertType, getAlertImage } from './alert-config'
import Image from 'next/image'
import { Alert } from '@/core/components/alert/alert'

export const ImageAlert: FC<{
  type: AlertType
  children: ReactNode
  className?: string
}> = ({ type }) => {
  const alertImage = getAlertImage(type, 'png')

  return <Alert type={type} icon={<Image src={alertImage} alt="" width="20" height="20" />} />
}
