import React from 'react';
import { CirclePicker } from 'react-color';

const ColorSelector = ({ selectColor }) => {
  return (
    <CirclePicker
      onChange={(e) => {
        console.log(e);
      }}
    />
  );
};
export default ColorSelector;
