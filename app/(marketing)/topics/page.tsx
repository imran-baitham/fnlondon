import { Sticky, Wrapper } from '@/components'
import GenericFilter from '@/components/mixture/GenericFilter'
import Image from 'next/image'

export default function Topics() {
  return (
    <section className="container_main">
      <Wrapper
        className="p-2 xl:p-0 border-t-0"
        Content={
          <div className="lg:pr-2">
            <GenericFilter
              pagination={['All', 'A-D', 'D-M', 'M-S', 'S-Z']}
              data={[]}
              className="pb-32"
            />
          </div>
        }
        RightColumn={
          <Sticky className="">
            <div className="hidden lg:block relative w-full md:h-full">
              <Image
                src={'/static/Ads/7849551106425788419.gif'}
                alt="fnlondon ads"
                width={100}
                height={100}
                quality={75}
                layout="responsive"
                loading="lazy"
              />
            </div>
          </Sticky>
        }
      />
    </section>
  )
}
