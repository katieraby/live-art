import React, { useState } from 'react';
import Slider from 'react-input-slider';
import styles from './BrushStrokeSlider.module.css';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState({ x: 2 });

  return (
    <Slider
      className={styles.slider}
      axis="x"
      xstep={1}
      xmin={2}
      xmax={20}
      x={value.x}
      onChange={({ x }) => {
        setValue({ x: x });
        changeBrushSize(x);
      }}
    />
  );
};

export default BrushStrokeSlider;
