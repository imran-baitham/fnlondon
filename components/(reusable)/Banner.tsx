'use client'

import { useState } from 'react'

export default function Banner() {
  const [show, setShow] = useState<boolean>(true)

  return (
    <>
      {show && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-banneryellow px-6 sm:rounded-xl py-2.5 sm:pl-4 sm:pr-3.5 shadow-xl">
            <p className="text-sm leading-6 text-black">
              <a href="#">
                <strong className="font-semibold">FN TOP STORIES 2023</strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span className="hidden md:inline-flex text-sm md:mr-3 text-gray-700">
                  Discover the future and important headlines in Denver.
                </span>
              </a>
              <button className="rounded-sm bg-darkprimary px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                SIGN UP NOW
              </button>
            </p>
            <button type="button" className="-m-1.5 flex-none p-1.5">
              <span
                onClick={() => setShow(false)}
                className="h-5 w-5 text-black"
              >
                ❌
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
