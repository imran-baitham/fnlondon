import { classNames } from '@/libs/Utils'
import { overrideTailwindClasses } from 'tailwind-override'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sm?: boolean
  lg?: boolean
  xl?: boolean
  transparent?: boolean
  danger?: boolean
  full?: boolean
  effect?: boolean
}

/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
const Button = ({
  children,
  className = '',
  sm = false,
  lg = false,
  xl = false,
  transparent = false,
  danger = false,
  full = false,
  disabled = false,
  effect = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && 'cursor-not-allowed opacity-50'
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          'cursor-pointer px-3 py-2',
          'group relative font-medium',
          'overflow-hidden outline-none',
          'border-2 border-darktx dark:border-orng-normal px-5 py-2 mt-2',
          full ? 'w-full' : '',
          sm ? 'px-3 py-2 leading-4 rounded text-sm' : '',
          lg ? 'px-4 py-2 text-base' : '',
          xl ? 'px-6 py-3 text-base' : '',
          transparent ? 'bg-bg-darktx dark:bg-orng-normal' : '',
          danger ? 'bg-red-500 text-white border-red-500' : '',
          isDisabled ? isDisabled : '',
          className,
        ),
      )}
      {...props}
    >
      <div
        className={classNames(
          effect
            ? 'absolute inset-0 w-0 bg-orng-medium dark:bg-orng-normal transition-all duration-[250ms] ease-out group-hover:w-full'
            : '',
        )}
      />
      <span
        className={classNames(
          isDisabled ? '' : 'relative dark:text-white text-black',
          effect ? 'group-hover:text-white' : '',
          transparent ? 'text-white' : '',
        )}
      >
        {children}
      </span>
    </button>
  )
}

export default Button
