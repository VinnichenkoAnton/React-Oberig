import React, { useContext } from 'react';
import { SliderContext } from '../../Slider';

import classes from '../../Slider.module.scss';

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={classes.arrows}>
      <div className={`${classes.arrow} ${classes.arrow_left}`} onClick={() => changeSlide(-1)} />
      <div className={`${classes.arrow} ${classes.arrow_right}`} onClick={() => changeSlide(1)} />
    </div>
  );
}
