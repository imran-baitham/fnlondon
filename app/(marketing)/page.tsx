import { Ads, Sticky } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="container_main">
      <div className="md:flex justify-center hidden">
        <Ads />
      </div>
      <div className="py-2 border-t-[1px] border-[#c8cccd] mt-2">
        <div className="flex justify-between">
          {/* 3 column wrapper */}
          <div className="mx-auto w-full grow lg:flex gap-x-2">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 xl:flex gap-x-2">
              {/* Left column area */}
              <div className="xl:w-1/3">
                <Sticky>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6 text-xl">Side Cards</div>
                  </div>
                </Sticky>
              </div>

              {/* Main area */}
              <div className="bg-darkprimary xl:flex-1 p-2 text-white cursor-pointer">
                <div className="pt-4">
                  <span className="text-sm text-darktx font-semibold">
                    INVESTMENT BANKING
                  </span>
                  <h1 className="text-xl md:text-5xl font-[Jost] py-7 font-bold hover:text-darktx">
                    White & Case partners vie for position in landmark chair
                    race: ‘Campaigning has already started’
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
                    pariatur tempore praesentium autem voluptates corporis
                    laborum saepe magni illo unde ipsum impedit placeat. Magnam
                    tenetur blanditiis modi, fugit rerum quaerat soluta illum
                    aliquam?
                  </p>
                </div>
              </div>
            </div>

            {/* Right column area */}
            <div className="shrink-0 lg:w-80">
              <Sticky>
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
              </Sticky>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-20">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            rerum eveniet totam illo culpa, officiis facere, atque doloremque
            reiciendis odio molestiae minima similique ab quos commodi
            distinctio iure modi suscipit quae officia impedit ad ipsum. Est
            ipsam neque dolores natus ullam aspernatur, nisi pariatur veritatis
            consectetur id, atque quam minima assumenda corrupti asperiores?
            Dolor quasi, error eaque amet aperiam a rerum beatae? Sint corporis
            reprehenderit tempore optio fuga, ullam temporibus porro accusantium
            et neque quasi eius iste quae deserunt similique nihil saepe.
            Eligendi ipsa, dicta error, perferendis autem illum vel veritatis
            consequatur dolorum, esse tempora adipisci molestias iure. Accusamus
            perspiciatis asperiores, nobis provident omnis quia facilis quaerat
            alias recusandae nihil, dignissimos velit, maiores officia nemo
            autem hic est veniam. Beatae iure, corrupti quasi non assumenda
            consequatur omnis, soluta ea molestias, et atque minima vel
            excepturi est fugit voluptate rerum consequuntur accusantium vitae
            reiciendis fugiat officia ab. Natus eum laudantium fugiat, magnam
            eos, obcaecati a perspiciatis quia laboriosam debitis iste! Illum
            reprehenderit odio, doloremque culpa illo repellat, nihil soluta
            ullam pariatur tempore iste quod harum laborum amet mollitia modi,
            impedit quo. Ratione pariatur rem quibusdam consectetur quam
            repellat odio! Iure magni expedita, architecto veniam, tenetur unde
            ut repellendus repudiandae numquam blanditiis quidem quaerat est
            recusandae vitae placeat qui! Quas veniam itaque explicabo eius
            ducimus doloribus. Quia tempore quae inventore quod culpa ratione
            repellat iusto consectetur veritatis earum maxime rerum, doloribus
            voluptatem eveniet nulla laborum praesentium corrupti, ipsa quis
            voluptatibus vitae neque veniam! Accusamus dicta reiciendis atque
            animi a veritatis aperiam quis labore aliquid voluptatum accusantium
            quas eius asperiores eos minima impedit consequuntur, sint sequi
            odit sed ut harum totam. Quia quo odio et corrupti maiores nobis
            animi repudiandae veritatis debitis reprehenderit, ratione accusamus
            assumenda, blanditiis, at vero enim perspiciatis laboriosam autem
            consectetur consequuntur iusto ducimus. Explicabo atque quam
            possimus excepturi? Quisquam pariatur exercitationem officia,
            consequatur quibusdam, culpa minus quidem voluptas eveniet aperiam,
            amet quaerat nesciunt nostrum doloribus id. Itaque minus odio ipsam
            dicta, modi rerum quae quod animi? Culpa debitis inventore mollitia
            iusto velit. Ipsam officia cupiditate ab non! Odit doloremque
            delectus sapiente eos non error quisquam officiis natus, hic
            consequatur excepturi debitis provident laudantium, rem, suscipit
            minus quam. Et, quas praesentium debitis maxime dolores culpa
            doloremque labore explicabo tempore eveniet deleniti provident nulla
            obcaecati voluptates hic autem. Ipsam quaerat voluptatem alias
            facilis cupiditate ipsum facere, provident quas odio officiis soluta
            dolorum perferendis et voluptatibus, porro necessitatibus sapiente
            rerum veniam praesentium saepe neque suscipit! Voluptates provident
            tempore recusandae accusantium quam sapiente officia, nemo ducimus
            suscipit sint, non reprehenderit dolorem. Excepturi labore ullam
            quibusdam. Ratione nulla corporis cum alias dolores? Iusto tempore
            provident, ut ex aliquam eaque ducimus quaerat sed. Eius libero
            ratione sit repellat! Veniam facere, quod porro quis error maxime
            ullam, fugit id, debitis quasi optio obcaecati sit. Maiores fuga
            unde numquam illum! Ad hic ipsa necessitatibus vel cupiditate
            explicabo harum, possimus iste suscipit id, doloremque atque
            provident obcaecati amet voluptate impedit, ab sit doloribus!
            Tempore explicabo quam enim soluta! Repellat laudantium, minus
            magnam enim facilis eius nesciunt fuga voluptas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            rerum eveniet totam illo culpa, officiis facere, atque doloremque
            reiciendis odio molestiae minima similique ab quos commodi
            distinctio iure modi suscipit quae officia impedit ad ipsum. Est
            ipsam neque dolores natus ullam aspernatur, nisi pariatur veritatis
            consectetur id, atque quam minima assumenda corrupti asperiores?
            Dolor quasi, error eaque amet aperiam a rerum beatae? Sint corporis
            reprehenderit tempore optio fuga, ullam temporibus porro accusantium
            et neque quasi eius iste quae deserunt similique nihil saepe.
            Eligendi ipsa, dicta error, perferendis autem illum vel veritatis
            consequatur dolorum, esse tempora adipisci molestias iure. Accusamus
            perspiciatis asperiores, nobis provident omnis quia facilis quaerat
            alias recusandae nihil, dignissimos velit, maiores officia nemo
            autem hic est veniam. Beatae iure, corrupti quasi non assumenda
            consequatur omnis, soluta ea molestias, et atque minima vel
            excepturi est fugit voluptate rerum consequuntur accusantium vitae
            reiciendis fugiat officia ab. Natus eum laudantium fugiat, magnam
            eos, obcaecati a perspiciatis quia laboriosam debitis iste! Illum
            reprehenderit odio, doloremque culpa illo repellat, nihil soluta
            ullam pariatur tempore iste quod harum laborum amet mollitia modi,
            impedit quo. Ratione pariatur rem quibusdam consectetur quam
            repellat odio! Iure magni expedita, architecto veniam, tenetur unde
            ut repellendus repudiandae numquam blanditiis quidem quaerat est
            recusandae vitae placeat qui! Quas veniam itaque explicabo eius
            ducimus doloribus. Quia tempore quae inventore quod culpa ratione
            repellat iusto consectetur veritatis earum maxime rerum, doloribus
            voluptatem eveniet nulla laborum praesentium corrupti, ipsa quis
            voluptatibus vitae neque veniam! Accusamus dicta reiciendis atque
            animi a veritatis aperiam quis labore aliquid voluptatum accusantium
            quas eius asperiores eos minima impedit consequuntur, sint sequi
            odit sed ut harum totam. Quia quo odio et corrupti maiores nobis
            animi repudiandae veritatis debitis reprehenderit, ratione accusamus
            assumenda, blanditiis, at vero enim perspiciatis laboriosam autem
            consectetur consequuntur iusto ducimus. Explicabo atque quam
            possimus excepturi? Quisquam pariatur exercitationem officia,
            consequatur quibusdam, culpa minus quidem voluptas eveniet aperiam,
            amet quaerat nesciunt nostrum doloribus id. Itaque minus odio ipsam
            dicta, modi rerum quae quod animi? Culpa debitis inventore mollitia
            iusto velit. Ipsam officia cupiditate ab non! Odit doloremque
            delectus sapiente eos non error quisquam officiis natus, hic
            consequatur excepturi debitis provident laudantium, rem, suscipit
            minus quam. Et, quas praesentium debitis maxime dolores culpa
            doloremque labore explicabo tempore eveniet deleniti provident nulla
            obcaecati voluptates hic autem. Ipsam quaerat voluptatem alias
            facilis cupiditate ipsum facere, provident quas odio officiis soluta
            dolorum perferendis et voluptatibus, porro necessitatibus sapiente
            rerum veniam praesentium saepe neque suscipit! Voluptates provident
            tempore recusandae accusantium quam sapiente officia, nemo ducimus
            suscipit sint, non reprehenderit dolorem. Excepturi labore ullam
            quibusdam. Ratione nulla corporis cum alias dolores? Iusto tempore
            provident, ut ex aliquam eaque ducimus quaerat sed. Eius libero
            ratione sit repellat! Veniam facere, quod porro quis error maxime
            ullam, fugit id, debitis quasi optio obcaecati sit. Maiores fuga
            unde numquam illum! Ad hic ipsa necessitatibus vel cupiditate
            explicabo harum, possimus iste suscipit id, doloremque atque
            provident obcaecati amet voluptate impedit, ab sit doloribus!
            Tempore explicabo quam enim soluta! Repellat laudantium, minus
            magnam enim facilis eius nesciunt fuga voluptas.
          </p>
        </div>
      </section>
    </section>
  )
}

{
  /*   <div className="w-full">
  
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
        
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">asdfasdf 1</div>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6"> asdfasdf 2</div>
                  </div>
                </section>
              </div>
            </div>
          </div> (*/
}
