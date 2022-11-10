import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import Slide from './Slide';
import { SliderContext } from '../Slider';

import classes from '../Slider.module.scss';

export default function SlidesList({ subdivided }) {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className={classNames(
        classes['slide-list'],
        subdivided ? classes['slide-list_subdivided'] : '',
      )}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide subdivided={subdivided} key={index} data={slide} />
      ))}
    </div>
  );
}
