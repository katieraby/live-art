import React, { useState } from 'react';

const ColorSelector = ({ selectColor }) => {
  const [toggle, setToggle] = useState(false);

  return !toggle ? <div></div> : <div></div>;
};

export default ColorSelector;
