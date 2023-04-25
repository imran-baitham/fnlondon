import { Header } from '@/components'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="bg-bgray">
      <Header />
      <main>{children}</main>
      <footer className="w-full bg-gray-100 p-7">
        <h1>footer</h1>
      </footer>
    </div>
  )
}
