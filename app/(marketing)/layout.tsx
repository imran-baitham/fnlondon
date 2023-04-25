interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <header>
        <nav>
          <h1>Header</h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  )
}
