import React from 'react';
import SlideImage from './SlideImage';
import SlideText from './SlideText';

import classes from '../Slider.module.scss';

export default function Slide({ subdivided, data: { img, alt, title, description } }) {
  return (
    <div className={classes.slide}>
      {subdivided ? (
        <div className={classes.slide__wrapper}>
          <SlideImage src={img} alt={alt} subdivided={subdivided} />
          <SlideText title={title} description={description} />
        </div>
      ) : (
        <SlideImage src={img} alt={alt} />
      )}
    </div>
  );
}
