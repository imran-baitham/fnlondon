interface StickyProps {
  children: React.ReactNode
  className?: string
}

function Sticky({ children, className }: StickyProps) {
  return <div className={`lg:sticky lg:top-40 ${className}`}>{children}</div>
}

export default Sticky
