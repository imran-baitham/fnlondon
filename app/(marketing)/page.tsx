'use client'

import { Banner, Modal } from '@/components'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <Modal open={open} setOpen={setOpen}>
        <div className="p-10 sm:w-full sm:max-w-[450px] m-auto shadow-3xl bg-white relative">
          <div>
            <button type="button" className="absolute right-2 top-2">
              <span
                onClick={() => setOpen(false)}
                className="h-5 w-5 text-black"
              >
                ❌
              </span>
            </button>
            <div>
              <h1>Comming Soon</h1>
            </div>
          </div>
        </div>
      </Modal>
      <Banner />
      <h1 className="text-4xl font-bold">FnLondon</h1>
    </main>
  )
}
