import styles from './Modal.module.scss'
import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: ReactNode
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          {title}
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  )
}
