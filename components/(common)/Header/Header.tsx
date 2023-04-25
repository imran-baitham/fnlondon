'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { marketingConfig } from '@/config'
import { MockImages } from '@/libs/Mock'
import { classNames } from '@/libs/Utils'
import { Icon } from '@/components'

function Header() {
  const router = usePathname()
  return (
    <header className="w-full z-10 fixed top-0 left-0 right-0">
      <nav className="max-w-[1200px] m-auto bg-darkprimary text-white">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
            <div className="flex items-center">
              <Image
                src={MockImages.logo}
                alt="fnlondon"
                width={75}
                height={75}
              />
              <h1 className="text-lg pl-4">Financial News</h1>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="lg:flex items-center hidden">
              <div className="pr-8 leading-2">
                <h1 className="text-md font-normal">
                  Reliability in times of volatility
                </h1>
                <h2 className="text-md text-darktx font-medium">
                  Try 30 days for £40
                </h2>
              </div>
              <div className="font-medium">
                <button className="px-8 py-2.5 border border-white mr-3">
                  SIGN IN
                </button>
                <button className="px-6 py-2.5 bg-[#fef9f3] text-yellowtx">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="pl-3.5">
              <Icon />
            </div>
          </div>
        </div>
      </nav>
      <nav className="max-w-[1200px] m-auto py-6 border-b-[1px] border-[#c8cccd]">
        <div className="flex flex-wrap gap-x-4">
          {marketingConfig.mainNav.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={classNames(
                router == item.href ? 'text-darktx' : '',
                'text-[17px] capitalize text-gray-700 font-light',
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
