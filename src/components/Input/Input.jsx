import React from 'react';
import { joinClasses } from '../../utils/classNames';
import './Input.css';

const Styles = {
  input: 'input',
};

export const Input = ({
  value,
  onChange,
  onFocus,
  onBlur,
  className,
}) => (
  <input
    type={'text'}
    className={joinClasses(Styles.input, className)}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);
