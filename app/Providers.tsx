'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [hydration, setHydration] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      {hydration ? <>{children}</> : <></>}
    </ThemeProvider>
  )
}
