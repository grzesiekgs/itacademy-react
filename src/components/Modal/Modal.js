import React from 'react';
import './Modal.css';

const Styles = {
  modal: 'modal',
  content: 'modal__content',
};

export const Modal = ({ children }) => (
  <div className={Styles.modal}>
    <div className={Styles.content}>{children}</div>
  </div>
);
