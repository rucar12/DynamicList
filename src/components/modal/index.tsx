import styles from './Modal.module.scss'
import { FC } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modal_close} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  )
}
