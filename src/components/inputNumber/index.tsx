import { FC } from 'react'
import styles from './InputNumber.module.scss'

interface InputNumberProps {
  label?: string
  value: number
  onChange: (value: number) => void
  error?: string
  min?: number
  max?: number
}

export const InputNumber: FC<InputNumberProps> = ({
  label,
  value,
  onChange,
  error,
  min = 0,
  max,
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrease = () => {
    if (max === undefined || value < max) {
      onChange(value + 1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    if (
      !isNaN(newValue) &&
      newValue >= min &&
      (max === undefined || newValue <= max)
    ) {
      onChange(newValue)
    }
  }

  return (
    <div className={styles.inputNumberWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputContainer} ${error ? styles.error : ''}`}>
        <button
          className={styles.button}
          onClick={handleDecrease}
          disabled={value <= min}
          type={'button'}
        >
          -
        </button>
        <input
          className={styles.input}
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
        />
        <button
          className={styles.button}
          onClick={handleIncrease}
          disabled={max !== undefined && value >= max}
          type={'button'}
        >
          +
        </button>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
