import React from 'react';
import { LazyImage } from '../LazyImage/LazyImage';
import './GalleryNavItem.css';
import { joinClasses, conditionClass } from '../../utils/classNames';

const Styles = {
  item: 'gallery__nav-item',
  active: 'gallery__nav-item--active',
};

export const GalleryNavItem = ({ src, active, index, onClick }) => (
  <li
    className={joinClasses(
      Styles.item,
      conditionClass(active, Styles.active)
    )}
    onClick={onClick}
    data-index={index}
  >
    <LazyImage src={src} />
  </li>
);
