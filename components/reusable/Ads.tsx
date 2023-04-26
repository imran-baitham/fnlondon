'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ImageProps {
  url: string
  link: string
}

function Ads() {
  const [imageUrl, setImageUrl] = useState('/static/Ads/godaddy.png')
  const [linkUrl, setLinkUrl] = useState('/')

  useEffect(() => {
    const images: ImageProps[] = [
      { url: '/static/Ads/godaddy.png', link: '/godaddy' },
      { url: '/static/Ads/fnads.png', link: '/fnads' },
      { url: '/static/Ads/adsgif.gif', link: '/adsgif' },
      { url: '/static/Ads/newads.gif', link: '/adsgif' },
    ]

    function fetchImage() {
      const randomIndex = Math.floor(Math.random() * images.length)
      const randomImage = images[randomIndex]
      setImageUrl(randomImage.url)
      setLinkUrl(randomImage.link)
    }

    const interval = setInterval(() => {
      fetchImage()
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative w-full h-[200px] md:w-[970px] md:h-[250px]">
      <Link href={linkUrl}>
        <Image
          src={imageUrl}
          alt="fnlondon ads"
          width={100}
          height={100}
          layout="responsive"
        />
      </Link>
    </div>
  )
}

export default Ads
