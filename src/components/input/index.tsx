import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  label?: string
  error?: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
  label,
  error,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
