import React from 'react';
import ReactDOM from 'react-dom';
import { SearchInput } from './components/SearchInput/SearchInput';
import './index.css';

const ITEMS = ['Ala', 'Bartek', 'Ela', 'Ewa', 'Marek', 'Zbyszek'];

const handleItemSelect = (selectedItem) =>
  console.log('selected item: ', selectedItem);

ReactDOM.render(
  <SearchInput items={ITEMS} onSelect={handleItemSelect} />,
  document.getElementById('root')
);
