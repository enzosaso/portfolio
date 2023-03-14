import { useEffect } from 'react'

export const useOpen = open => {
  useEffect(() => {
    const timer = setTimeout(() => {
      open(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [open])
}
