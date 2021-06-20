import React from 'react'

import styles from './modal.module.scss'

const Modal = ({ open, children }) => {
  const modalClass = `${styles.modal} ${open ? styles.modal__open : ''}`.trim();

  return (
    <div className={modalClass}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
};

export default Modal
