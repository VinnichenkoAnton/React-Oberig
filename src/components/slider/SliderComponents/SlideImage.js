import React from 'react';
import classNames from 'classnames/bind';

import classes from '../Slider.module.scss';

export default function SlideImage({ subdivided, src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        classes['slide-image'],
        subdivided ? classes['slide-image_subdivided'] : '',
      )}
    />
  );
}
