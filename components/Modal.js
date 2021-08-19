// Modal component with Next.js
// Sources:
// -- https://devrecipes.net/modal-component-with-next-js/
// -- https://nextjs.org/docs/advanced-features/custom-document

// React Dependencies
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

// Styles
import styles from '@/styles/Modal.module.css'

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}
