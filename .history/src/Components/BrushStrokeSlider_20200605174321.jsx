import React, { useState } from 'react';
import Slider from 'react-input-slider';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState({ x: 2 });

  // const handleChange = (x) => {
  //   setValue({ x: x });
  //   changeBrushSize(x);
  // };

  return (
    <Slider
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
