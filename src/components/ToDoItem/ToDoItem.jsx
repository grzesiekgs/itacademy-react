import React from 'react';

export const ToDoItem = ({ value, onRemove }) => (
  <li className={'todo-list__item'}>
    {value}
    <button onClick={onRemove}>{'remove'}</button>
  </li>
);
