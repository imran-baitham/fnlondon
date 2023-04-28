import React from 'react'
import ReactIcon from '../common/ReactIcon/ReactIcon'
import Link from 'next/link'
import { classNames } from '@/libs/Utils'

interface BadgeProps {
  icon?: any
  title: string
  link: string
  className?: string
}

function Badge({ icon, title, link, className = '' }: BadgeProps) {
  return (
    <Link href={link}>
      <span
        className={classNames(
          icon ? 'px-2.5' : 'px-3',
          'inline-flex items-center rounded-full border border-gray-300 bg-[#e7e1da] text-[#4d6172] py-1 font-medium hover:bg-darktx hover:border-darktx hover:text-white',
          className,
        )}
      >
        {icon && <ReactIcon icon={icon} className="w-4 h-4 -ml-0.5" />}
        <h1 className={classNames(icon ? 'ml-1.5' : '', 'text-sm')}>{title}</h1>
      </span>
    </Link>
  )
}

export default Badge
