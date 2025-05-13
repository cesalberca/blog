import React, { ReactNode } from 'react'
import { KoFiButton } from './ko-fi-button'

export const WithKoFiButton: React.FC<{ children: ReactNode }> = ({ children }) => {
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
