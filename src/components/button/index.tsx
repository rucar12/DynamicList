import styles from './Button.module.scss'
import { FC } from 'react'

enum ButtonTypes {
  primary = 'primary',
  default = 'default',
}
interface ButtonProps {
  onClick?: () => void
  customTypes?: ButtonTypes
  className?: string
  type?: 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({
  className,
  customTypes = ButtonTypes.default,
  children,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      {children}
    </button>
  )
}
