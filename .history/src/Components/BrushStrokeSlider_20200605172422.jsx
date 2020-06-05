import React, { useState } from 'react';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState(2);
  return (
    <div class="slidecontainer">
      <input
        type="range"
        min="2"
        max="20"
        value={value}
        class="slider"
        id="myRange"
      />
    </div>
  );
};

export default BrushStrokeSlider;
