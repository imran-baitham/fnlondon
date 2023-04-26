'use client'

import { useEffect, useState } from 'react'
import { Button, Modal, ReactIcon } from '@/components'
import Image from 'next/image'

function AlertModal() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 5000)
  }, [])

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="sm:w-full sm:max-w-[450px] m-auto shadow-3xl bg-white relative">
        <div>
          <div className="py-1 bg-darktx flex justify-center">
            <Image
              src={'/static/logo-preview.png'}
              alt="fnlondon logo"
              width={50}
              height={50}
            />
          </div>

          <ReactIcon
            icon="VscClose"
            className="absolute right-3 top-[20px] cursor-pointer h-6 w-6 text-white"
            onClick={() => setOpen(false)}
          />
          <div className="p-5 sm:p-8 text-center">
            <h1 className="text-md md:text-xl font-[Jost]">
              You may be eligible to join a <br />
              corporate subscription
            </h1>
            <p className="text-[11px] sm:text-[13px] pt-3 pb-4">
              Click below and find out immediately if you are <br /> eligible to
              join a subscription through your employer
            </p>
            <Button effect xl full>
              CHECK ELIGIBILITY
            </Button>
          </div>
          <div className="border-t-[2px] border-gray-200 text-[11px] sm:text-[12px] flex justify-between items-center p-3">
            <a href="">Learn More</a>
            <a href="">Already a Subscriber? Sign in</a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AlertModal
