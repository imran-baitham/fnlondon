import React from 'react'
import { ReactIcon } from '../index'
import { TAppIcons } from '../common/ReactIcon/ReactIcon'
import { classNames } from '@/libs/Utils'

interface IconProps {
  icon?: TAppIcons
  effect?: boolean
  onClick?: () => void
}

function Icon({ icon, onClick, effect = false }: IconProps) {
  return (
    <button
      className={classNames(
        effect ? 'border border-iconclr bg-iconclr' : '',
        'group border border-transparent focus:border-iconclr p-5 focus:bg-iconclr transition-all',
        "z-30"
      )}
      onClick={() => onClick && onClick()} // fix: properly invoke the onClick function
    >
      <ReactIcon icon={icon} className="w-8 h-8 group-focus:text-darkprimary" />
    </button>
  )
}

export default Icon
