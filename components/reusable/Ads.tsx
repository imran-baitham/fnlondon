'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ImageProps {
  url: string
  link: string
}

function Ads() {
  const [imageUrl, setImageUrl] = useState('/static/Ads/adsgif.gif')
  const [linkUrl, setLinkUrl] = useState('/')

  useEffect(() => {
    const images: ImageProps[] = [
      { url: '/static/Ads/godaddy.png', link: '/godaddy' },
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
    <div className="relative w-full md:w-[970px] md:h-[250px]">
      <Link href={linkUrl}>
        <Image
          src={imageUrl}
          alt="fnlondon ads"
          width={100}
          height={100}
          layout="responsive"
          quality={75}
          loading="lazy"
          blurDataURL="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201000%20600'%20fill%3D'%23ccc'%3E%3Crect%20width%3D'1000'%20height%3D'600'%20%2F%3E%3C%2Fsvg%3E"
        />
      </Link>
    </div>
  )
}

export default Ads
