import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      console.log('tick')
      savedCallback.current?.()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => {
        console.log('clearing interval')
        return clearInterval(id)
      }
    }
  }, [delay])
}
