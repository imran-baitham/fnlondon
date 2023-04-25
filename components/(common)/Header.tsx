import { MockImages } from '@/libs/Mock'
import PUBLIC from '@/public'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="w-full z-10 fixed top-0 left-0 right-0">
      <nav className="max-w-[1200px] m-auto bg-darkprimary text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={MockImages.logo}
              alt="fnlondon"
              width={76}
              height={76}
            />
            <h1 className="text-lg pl-4">Financial News</h1>
          </div>
          <div>
            <h1 className="text-lg pr-4">Icon</h1>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
