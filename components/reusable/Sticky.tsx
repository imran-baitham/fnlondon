interface StickyProps {
  children: React.ReactNode
}

function Sticky({ children }: StickyProps) {
  return <div className="lg:sticky lg:top-40">{children}</div>
}

export default Sticky
