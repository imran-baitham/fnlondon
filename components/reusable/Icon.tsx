import React from 'react'
import { ReactIcon } from '../index'
import { TAppIcons } from '../common/ReactIcon/ReactIcon'
import { classNames } from '@/libs/Utils'
import { overrideTailwindClasses } from 'tailwind-override'

interface IconProps {
  icon?: TAppIcons
  effect?: boolean
  onClick?: () => void
  className?: string
}

function Icon({
  icon,
  onClick,
  className = '',
  effect = false,
  ...props
}: IconProps) {
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          effect ? 'border border-iconclr bg-iconclr' : '',
          'group border border-transparent focus:border-iconclr p-5 focus:bg-iconclr transition-all z-30',
          className,
        ),
      )}
      onClick={() => onClick && onClick()} // fix: properly invoke the onClick function
      {...props}
    >
      <ReactIcon icon={icon} className="w-8 h-8 group-focus:text-darkprimary" />
    </button>
  )
}

export default Icon
