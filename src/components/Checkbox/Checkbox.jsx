import React from 'react';
import './Checkbox.css';

const Styles = {
  checkbox: 'checkbox',
};

export const Checkbox = ({ label, checked, onChange }) => (
  <label>
    <input
      className={Styles.checkbox}
      type={'checkbox'}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);
