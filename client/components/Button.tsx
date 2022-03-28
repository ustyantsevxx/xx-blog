import clsx from 'clsx'
import { FC, MouseEventHandler } from 'react'

type ButtonProps = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const Button: FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={clsx([
        'rounded bg-black  px-4 py-2 text-white transition hover:bg-black/80 active:pt-[9px] active:pb-[7px]  disabled:opacity-50',
        props.className
      ])}
    >
      {props.children}
    </button>
  )
}
