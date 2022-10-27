import React from 'react';

import classes from '../Slider.module.scss';

export default function SlideText({ title, description }) {
  return (
    <div className={classes['slide-text']}>
      <div className={classes['slide-title']}>{title}</div>
      <div className={classes['slide-description']}>{description}</div>
    </div>
  );
}
