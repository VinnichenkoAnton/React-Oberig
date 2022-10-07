import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { SliderContext } from '../../Slider';

import classes from '../../Slider.module.scss';

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={classNames(classes.dot, slideNumber === number ? classes.selected : '')}
      onClick={() => goToSlide(number)}
    />
  );
}
