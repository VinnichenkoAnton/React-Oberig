import React from 'react';
import SlideImage from './components/SlideImage';

import './styles.scss';

export default function Slide({ data: { img, alt }, animation }) {
  return (
    <div className={`slide ${animation && 'fadeInAnimation'}`}>
      <SlideImage src={img} alt={alt} />
    </div>
  );
}
