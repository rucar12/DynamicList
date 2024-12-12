import { ChangeEvent, FC } from 'react'
import styles from './Select.module.scss'

interface SelectProps {
  options: { value: string; label: string }[]
  label?: string
  error?: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  classNameWrapper?: string
}

export const Select: FC<SelectProps> = ({
  options,
  label,
  error,
  value,
  classNameWrapper,
  onChange,
}) => {
  return (
    <div className={`${styles.selectWrapper} ${classNameWrapper}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <select
          className={`${styles.select} ${error ? styles.error : ''}`}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.selectArrow}>▼</span>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
