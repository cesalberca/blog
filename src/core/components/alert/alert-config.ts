import { AlertCircle, Info, Lightbulb, type LucideIcon, OctagonAlert, TriangleAlert } from 'lucide-react'

export type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution'
export type AlertAssetKind = 'png' | 'svg'

const alertIcons: Record<AlertType, LucideIcon> = {
  note: Info,
  tip: Lightbulb,
  important: AlertCircle,
  warning: TriangleAlert,
  caution: OctagonAlert,
}

export function getAlertImage(type: AlertType, assetKind: 'png'): string
export function getAlertImage(type: AlertType, assetKind: 'svg'): LucideIcon

export function getAlertImage(type: AlertType, assetKind: AlertAssetKind) {
  if (assetKind === 'png') {
    return `/assets/emails/${type}.png`
  }

  return alertIcons[type]
}
