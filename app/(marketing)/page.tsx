import { Ads } from '@/components'

export default function Home() {
  return (
    <section className="container_main">
      <div className="flex justify-center">
        <Ads />
      </div>
      <div className="py-2 border-t-[1px] border-[#c8cccd] mt-2 h-screen">
        <h1 className="text-4xl font-bold">FnLondon</h1>
      </div>
    </section>
  )
}
