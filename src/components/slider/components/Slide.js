import React from 'react';
import SlideImage from './SlideImage';

import classes from '../Slider.module.scss';

export default function Slide({ data: { img, alt } }) {
  return (
    <div className={classes.slide}>
      <SlideImage src={img} alt={alt} />
    </div>
  );
}
