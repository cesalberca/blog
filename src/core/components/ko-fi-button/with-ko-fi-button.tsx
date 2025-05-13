import { FC, PropsWithChildren } from 'react'
import { KoFiButton } from './ko-fi-button'

export const WithKoFiButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="mb-10">
        <KoFiButton />
      </div>
      {children}
      <div className="mt-10">
        <KoFiButton />
      </div>
    </>
  )
}
