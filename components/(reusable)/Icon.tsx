import React from 'react'
import { ReactIcon } from '../index'
import { TAppIcons } from '../(common)/ReactIcon/ReactIcon'

interface IconProps {
  icon?: TAppIcons
}

function Icon({ icon }: IconProps) {
  return (
    <button className="group border border-transparent focus:border-iconclr p-5 focus:bg-iconclr transition-all">
      <ReactIcon
        icon={icon ? icon : 'BiSearchAlt2'}
        className="w-8 h-8 group-focus:text-darkprimary"
      />
    </button>
  )
}

export default Icon
