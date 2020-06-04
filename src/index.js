import React from 'react';
import ReactDOM from 'react-dom';
import { SearchInput } from './components/SearchInput/SearchInput';
import './index.css';
import { Select } from './components/Select/Select';
import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
import { DummyGroup } from './components/DummyGroup/DummyGroup';

const ITEMS = ['Ala', 'Bartek', 'Ela', 'Ewa', 'Marek', 'Zbyszek'];

const handleItemSelect = (selectedItem) =>
  console.log('selected item: ', selectedItem);

ReactDOM.render(
  <div>
    <SearchInput items={ITEMS} onSelect={handleItemSelect} />
    <Select items={ITEMS} onSelect={handleItemSelect} />
    <CheckboxGroup items={ITEMS} onSelect={handleItemSelect} />
    <DummyGroup />
  </div>,
  document.getElementById('root')
);
