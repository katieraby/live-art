import React from 'react';
import { CirclePicker } from 'react-color';

const ColorSelector = ({ selectColor }) => {
  return (
    <CirclePicker
      onChange={(e) => {
        selectColor(e.hex);
      }}
    />
  );
};
export default ColorSelector;
