import React from 'react';
import './ListItem.css';

export const ListItem = ({ label, value, checked, onClick }) => {
  let itemClassName = 'list-item';

  if (checked) {
    itemClassName += ' list-item--checked';
  }

  return (
    <li
      data-value={value}
      className={itemClassName}
      onClick={onClick}
    >
      {label}
    </li>
  );
};
