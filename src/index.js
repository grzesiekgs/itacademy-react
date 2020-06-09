import React from 'react';
import ReactDOM from 'react-dom';
// import { SearchInput } from './components/SearchInput/SearchInput';
import './index.css';
// import { Select } from './components/Select/Select';
// import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
// import { DummyGroup } from './components/DummyGroup/DummyGroup';
import { Gallery } from './components/Gallery/Gallery';

// const ITEMS = ['Ala', 'Bartek', 'Ela', 'Ewa', 'Marek', 'Zbyszek'];

// const handleItemSelect = (selectedItem) =>
//   console.log('selected item: ', selectedItem);

const IMAGES = [
  'https://www.placecage.com/c/1920/1080',
  'https://www.fillmurray.com/1920/1080',
  'http://placekitten.com/g/1920/1080',
  'http://placehold.it/1920x1080',
  'https://via.placeholder.com/1920x1080/FF0000/FFFFFF?Text=Fifht',
  'https://via.placeholder.com/1920x1080/00FF00/FFFFFF?Text=Sixth',
  'https://via.placeholder.com/1920x1080/0000FF/FFFFFF?Text=Seventh',
];

/* <SearchInput items={ITEMS} onSelect={handleItemSelect} />
<Select items={ITEMS} onSelect={handleItemSelect} />
<CheckboxGroup items={ITEMS} onSelect={handleItemSelect} />
<DummyGroup /> */
ReactDOM.render(
  <Gallery images={IMAGES} />,
  document.getElementById('root')
);
