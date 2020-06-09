import React from 'react';
import { joinClasses } from '../../utils/classNames';
import './LazyImage.css';

const Styles = {
  image: 'image',
};

export const LazyImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={joinClasses(Styles.image, className)}
  />
);
