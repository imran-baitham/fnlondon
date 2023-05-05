import { Ads, FilterTopic, OnTheMove, Sticky, Wrapper } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="container_main">
      <div className="md:flex justify-center hidden">
        <Ads />
      </div>
      <Wrapper
        LeftColumn={
          <Sticky>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6 text-xl">Side Cards</div>
            </div>
          </Sticky>
        }
        Content={
          <div>
            <div className="bg-darkprimary xl:flex-1 p-2 text-white cursor-pointer">
              <div className="pt-4">
                <span className="text-sm text-darktx font-semibold">
                  INVESTMENT BANKING
                </span>
                <h1 className="text-xl md:text-5xl font-[Jost] py-7 font-bold hover:text-darktx">
                  White & Case partners vie for position in landmark chair race:
                  ‘Campaigning has already started’
                </h1>
                <div className="relative w-full md:h-full rounded pb-6">
                  <Image
                    src={'/static/Ads/fnlondonblog.jpeg'}
                    alt="fnlondon ads"
                    width={100}
                    height={100}
                    quality={75}
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-artmints">2 min read</span>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis lab
                </p>
              </div>
            </div>
          </div>
        }
        RightColumn={
          <div className="h-auto">
            <div className="hidden lg:block relative w-full md:h-full">
              <Image
                src={'/static/Ads/lineads.png'}
                alt="fnlondon ads"
                width={100}
                height={100}
                quality={75}
                layout="responsive"
                loading="lazy"
              />
            </div>
            <div className="h-screen">
              <Sticky className="">
                <FilterTopic className="mt-8" />
              </Sticky>
            </div>
          </div>
        }
      />
      <Wrapper
        LeftColumn={
          <Sticky>
            <div className="hidden lg:block relative w-full md:h-full">
              <Image
                src={'/static/Ads/16941896392190879319.png'}
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
        Content={
          <div>
            <div className="xl:flex-1 p-2 cursor-pointer">
              <div className="pt-4">
                <span className="text-sm text-darktx font-semibold">
                  INVESTMENT BANKING
                </span>
                <h1 className="text-xl md:text-5xl font-[Jost] py-7 font-bold hover:text-darktx">
                  White & Case partners vie for position in landmark chair race:
                  ‘Campaigning has already started’
                </h1>
                <div className="relative w-full md:h-full rounded pb-6">
                  <Image
                    src={'/static/Ads/fnlondonblog.jpeg'}
                    alt="fnlondon ads"
                    width={100}
                    height={100}
                    quality={75}
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-artmints">2 min read</span>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis laborum
                  saepe magni illo unde ipsum impedit placeat. Magnam tenetur
                  blanditiis modi, fugit rerum quaerat soluta illum aliquam?
                </p>
                <p className="py-4 font-serif">
                  earum voluptates quia unde minus quisquam pariatur?
                  Repellendus temporibus soluta necessitatibus sed nulla totam
                  tenetur et? Alias, vitae ipsam expedita harum fugiat iusto
                  pariatur tempore praesentium autem voluptates corporis lab
                </p>
              </div>
            </div>
          </div>
        }
        RightColumn={
          <div className="h-full">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6 text-xl">Just for Practice</div>
            </div>
            <div className="h-[95%]">
              <Sticky>
                <OnTheMove />
              </Sticky>
            </div>
          </div>
        }
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nemo repudiandae tenetur nobis eveniet quis animi temporibus
          aspernatur libero ab sit saepe nihil eaque tempore, dicta laudantium
          sequi iure. Distinctio, praesentium. Dolor praesentium aperiam totam
          velit eius accusamus sapiente iste. Quo natus deleniti sunt voluptatem
          quas ratione iure voluptatum consequuntur veniam laudantium ullam
          dolores debitis eligendi recusandae quam eum architecto, accusantium
          incidunt modi ipsa earum reiciendis? Eum nemo voluptatibus velit
          voluptatum incidunt quo totam numquam impedit vitae esse molestias
          enim quam, deserunt laudantium minima nesciunt facere illum
          repudiandae excepturi est dicta. Quos eius perspiciatis dolore at. Et
          maiores voluptatibus fugiat esse consectetur vel itaque molestiae sunt
          sint dolores asperiores quod vero recusandae labore beatae, iure
          perferendis ex modi, tempore accusamus id est ad. Culpa nihil unde
          iure facere necessitatibus dicta dolorem possimus cupiditate sapiente
          tempore. Nesciunt ducimus minus nihil, sunt non ullam incidunt eos
          repellat, culpa doloremque nostrum libero aliquam nam vero excepturi,
          esse deleniti rerum voluptatibus beatae officia. Fugiat quasi
          quibusdam, maxime alias aliquid itaque assumenda quidem a enim modi
          cupiditate sapiente! Voluptas atque sunt, excepturi sed blanditiis
          libero magni officia labore vitae quibusdam fuga ex ullam quasi
          cupiditate soluta eaque qui tenetur praesentium at officiis iure.
          Blanditiis, repellat.
        </p>
      </div>
    </section>
  )
}
