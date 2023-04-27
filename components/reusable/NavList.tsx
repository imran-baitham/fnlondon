import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/libs/Types'
import { classNames } from '@/libs/Utils'

function NavList({ title, href }: NavItem) {
  const router = usePathname()

  return (
    <Link href={href}>
      <h1
        className={classNames(
          router == href ? 'bg-[#4d6172] text-white' : '',
          'capitalize text-lg px-5 py-3.5 hover:bg-[#4d6172] hover:text-white transition-all',
        )}
      >
        {title}
      </h1>
    </Link>
  )
}

export default NavList
