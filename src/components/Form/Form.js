import React from 'react';
import './Form.css';

const Styles = {
  modal: 'form',
  content: 'form__content',
  button: 'form__submit-button',
};

export const Form = ({ onSubmit, children }) => (
  <form className={Styles.modal} onSubmit={onSubmit}>
    <div className={Styles.content}>{children}</div>
    <button type='submit' className={Styles.button}>
      {'Submit'}
    </button>
  </form>
);
