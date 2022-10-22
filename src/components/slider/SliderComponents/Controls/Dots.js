import React, { useContext } from 'react';
import { SliderContext } from '../../Slider';
import Dot from './Dot';

import classes from '../../Slider.module.scss';

export default function Dots() {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={classes.dots}>{renderDots()}</div>;
}
