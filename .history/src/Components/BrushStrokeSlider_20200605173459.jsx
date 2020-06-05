import React, { useState } from 'react';
import Slider from 'react-input-slider';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState(2);

  const handleChange = (e) => {
    setValue(e);
    changeBrushSize(e);
  };

  return (
    <Slider axis="x" xmin={2} xmax={20} x={value} onChange={handleChange} />
  );
};

export default BrushStrokeSlider;
