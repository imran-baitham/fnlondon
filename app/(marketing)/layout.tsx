
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <header className="w-full bg-gray-100 p-7">
        <nav>
          <h1>Header</h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="w-full bg-gray-100 p-7">
        <h1>footer</h1>
      </footer>
    </>
  )
}
