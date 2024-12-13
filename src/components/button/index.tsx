import styles from './Button.module.scss'
import { FC, ReactNode } from 'react'

export enum ButtonTypes {
  primary = 'primary',
  default = 'default',
}
export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  big = 'big',
}
interface ButtonProps {
  onClick?: () => void
  customTypes?: ButtonTypes
  size?: ButtonSizes
  className?: string
  type?: 'submit' | 'reset'
  title?: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({
  className,
  customTypes = ButtonTypes.default,
  size = ButtonSizes.medium,
  children,
  type,
  onClick,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={`${styles.button} ${styles[customTypes]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  )
}
