interface WrapperProps {
  LeftColumn?: React.ReactNode
  Content: React.ReactNode
  RightColumn?: React.ReactNode
  className?: string
}

function Wrapper({
  LeftColumn,
  Content,
  RightColumn,
  className,
}: WrapperProps) {
  return (
    <div className={`py-2 border-t-[1px] border-[#c8cccd] mt-2.5 ${className}`}>
      {/* 3 column wrapper */}
      <div className="mx-auto w-full grow lg:flex gap-x-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex gap-x-2">
          {/* Left column area */}
          {LeftColumn && <div className="xl:w-1/3">{LeftColumn}</div>}

          {/* Main area */}
          <div className="xl:flex-1">{Content}</div>
        </div>

        {/* Right column area */}
        {RightColumn && <div className="shrink-0 lg:w-80">{RightColumn}</div>}
      </div>
    </div>
  )
}

export default Wrapper
