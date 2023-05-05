'use client'

import { useEffect, useState } from 'react'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [hydration, setHydration] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])

  return <>{hydration ? <>{children}</> : <></>}</>
}
