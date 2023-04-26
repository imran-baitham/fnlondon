'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { marketingConfig } from '@/config'
import { MockImages } from '@/libs/Mock'
import { classNames } from '@/libs/Utils'
import { Icon } from '@/components'

function Header() {
  const router = usePathname()
  const [manu, setMenu] = useState<boolean>(false)
  const [user, setUser] = useState<boolean>(false)
  const [search, setSearch] = useState<boolean>(false)

  const UserLogin: boolean = false

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      setUser(false)
      setMenu(false)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [manu, user])

  return (
    <header className="w-full z-10 fixed top-0 left-0 right-0">
      <nav className="max-w-[1250px] m-auto bg-darkprimary text-white">
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
            {/* Banner Login & subscribe */}
            {!UserLogin && (
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
            )}
            <div className="pl-3.5 relative">
              {/* Login */}
              {UserLogin && (
                <div className="hidden md:inline-flex overflow-visible relative">
                  <span>
                    {user ? (
                      <Icon
                        icon="BsPersonFill"
                        effect
                        onClick={() => setUser(false)}
                      />
                    ) : (
                      <Icon
                        icon="BsPersonFill"
                        className="z-10"
                        onClick={() => setUser(true)}
                      />
                    )}
                    {user && (
                      <div className="absolute right-0 z-10 sm:mt-0.5 w-[285px] sm:w-[300px] sm:origin-top-right shadow bg-[#2f3f4d] text-[#a7afb3]">
                        {marketingConfig.userNav.map((item, index) => (
                          <Link href={item.href} key={index}>
                            <h1
                              className={classNames(
                                router == item.href
                                  ? 'bg-[#4d6172] text-white'
                                  : '',
                                'capitalize text-lg px-4 py-3 sm:px-5 sm:py-3.5 hover:bg-[#4d6172] hover:text-white transition-all',
                              )}
                            >
                              {item.title}
                            </h1>
                          </Link>
                        ))}
                      </div>
                    )}
                  </span>
                </div>
              )}
              {/* Search */}
              <div className="hidden md:inline-flex">
                {search ? (
                  <Icon
                    effect
                    icon="GrClose"
                    onClick={() => setSearch(false)}
                  />
                ) : (
                  <Icon icon="BiSearch" onClick={() => setSearch(true)} />
                )}
              </div>
              {/* Menu Navagations */}
              <span>
                {manu ? (
                  <Icon icon="GrClose" effect onClick={() => setMenu(false)} />
                ) : (
                  <Icon icon="CgMenu" onClick={() => setMenu(true)} />
                )}
                {manu && (
                  <div className="absolute right-0 z-10 sm:mt-0.5 w-[285px] sm:w-[300px] sm:origin-top-right shadow bg-[#2f3f4d] text-[#a7afb3]">
                    {marketingConfig.mainNav.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <h1
                          className={classNames(
                            router == item.href
                              ? 'bg-[#4d6172] text-white'
                              : '',
                            'capitalize text-lg px-4 py-3 sm:px-5 sm:py-3.5 hover:bg-[#4d6172] hover:text-white transition-all',
                          )}
                        >
                          {item.title}
                        </h1>
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* Subheader Manu */}
      <nav className="lg:flex flex-wrap gap-x-4 hidden max-w-[1250px] m-auto py-6 border-b-[1px] border-[#c8cccd] px-3.5 xl:px-0 bg-bgray">
        {marketingConfig.mainNav.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={classNames(
              router == item.href ? 'text-red-600' : '',
              'text-[17px] capitalize text-gray-700 font-light',
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Search Modal */}
      {search && (
        <div className="h-screen w-full bg-[rgba(32,49,64,.96)] fixed top-0 left-0 z-20">
          <div className="text-white flex items-center justify-center h-full">
            <h1 className="text-xl font-bold">Comming Soon</h1>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
