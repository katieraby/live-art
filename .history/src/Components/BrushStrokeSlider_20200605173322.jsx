import React, { useState } from 'react';
import Slider from 'react-input-slider';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState(2);
  return (
    <Slider
      axis="x"
      xmin={2}
      xmax={20}
      x={value}
      onChange={(x) => setValue(x)}
    />
  );
};

export default BrushStrokeSlider;
