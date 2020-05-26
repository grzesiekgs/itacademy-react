import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { List } from './components/List/List';

const LIST_ITEMS = [
  {
    label: 'first',
    value: 1,
    checked: true,
  },
  {
    label: 'second',
    value: 2,
    checked: false,
  },
  {
    label: 'third',
    value: 3,
    checked: true,
  },
  {
    label: 'fourth',
    value: 4,
    checked: false,
  },
];

/* <List items={LIST_ITEMS} key={1} />, */

ReactDOM.render(
  [<List items={LIST_ITEMS} key={2} />],
  document.getElementById('root')
);
