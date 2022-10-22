import React from 'react';

import classes from '../Slider.module.scss';

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className={classes['slide-image']} />;
}
