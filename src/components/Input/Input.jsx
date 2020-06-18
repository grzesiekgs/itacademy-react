import React from 'react';
import { joinClasses } from '../../utils/classNames';
import './Input.css';

const Styles = {
  input: 'input',
};

export const Input = ({
  value,
  name,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className,
}) => {
  console.log('Input render');
  return (
    <input
      type={'text'}
      className={joinClasses(Styles.input, className)}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
