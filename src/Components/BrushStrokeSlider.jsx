import React, { useState } from "react";
import Slider from "react-input-slider";
import styles from "./BrushStrokeSlider.module.css";
import { Plus, Minus } from "react-feather";

const BrushStrokeSlider = ({ changeBrushSize }) => {
  const [value, setValue] = useState({ x: 2 });

  return (
    <div className={styles.sliderContainer}>
      <Minus />
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
      <Plus />
    </div>
  );
};

export default BrushStrokeSlider;
