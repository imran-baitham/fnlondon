import { Badge } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TheMoveContext = [
  'Trading Places: Barclays’ new compliance boss, JPMorgan taps Deutsche, Moelis hires again',
  'LME names John Williamson as interim chair',
  'Alantra’s top infrastructure and energy dealmaker César Ciriza to depart',
]

function OnTheMove() {
  return (
    <div className="py-10">
      <div className="relative w-full md:h-full rounded pb-5">
        <Image
          src={'/static/on_the_move_man.svg'}
          alt="fnlondon ads"
          width={100}
          height={100}
          quality={75}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <h1 className="font-extrabold  text-2xl text-darktx">
        On The Move
      </h1>
      <div className="pt-5">
        {TheMoveContext.map((item, index) => (
          <Link href={item} key={index}>
            {index == 0 ? '' : <hr className="border-gray-300 my-3" />}
            <div className="text-xl myfont font-bold leading-[26px] text-[#4d6172] transition-all hover:text-darktx">
              {item}
            </div>
          </Link>
        ))}
      </div>
      <Badge title={'On the move'} link={'/onthemove'} className="mt-5" />
    </div>
  )
}

export default OnTheMove
