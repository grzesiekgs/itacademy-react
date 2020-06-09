import React from 'react';
import { LazyImage } from '../LazyImage/LazyImage';
import './GalleryItem.css';

const Styles = {
  item: 'gallery__item',
};

export const GalleryItem = ({ src, onClick }) => (
  <li className={Styles.item} onClick={onClick}>
    <LazyImage src={src} />
  </li>
);
