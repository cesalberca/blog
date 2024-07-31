'use client'

import React, { type FC } from 'react'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'

interface Props {
  texts: string[]
}

export const ScrambleList: FC<Props> = ({ texts }) => {
  return (
    <div className="flex flex-col">
      <ScrambleText repeat text="Hello world" />
      <ScrambleText text="Bye world" />
      {/*<ScrambleText repeat text="Baz world" />*/}
    </div>
  )
}
