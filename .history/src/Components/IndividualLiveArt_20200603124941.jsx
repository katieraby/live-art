import React, { useRef, useState } from 'react';
import ColorSelector from './ColorSelector';
import MetaTags from 'react-meta-tags';

const IndividualLiveArt = ({ artistInfo }) => {
  /*need to use ref as canvas behaves differently in the dom. most dom elements have a value property that you can update directly whereas canvas has a context, which allows us to draw things.  */
  const canvasRef = useRef(null);

  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('hotpink');
  //const [cleared, setCleared] = useState(false);
  const [currentAxis, setCurrentAxis] = useState({ currentX: 0, currentY: 0 });

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   //ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
  //   // canvas.addEventListener("onMouseDown", onMouseDown);
  //   // canvas.addEventListener("onMouseMove", onMouseMove);
  //   // canvas.addEventListener("onMouseUp")
  // });

  const onMouseDown = (e) => {
    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
    setDrawing(true);
  };

  const onMouseUp = (e) => {
    setDrawing(false);
    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
  };

  const onMouseMove = (e) => {
    if (!drawing) {
      return;
    }

    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
    draw(currentAxis.currentX, currentAxis.currentY, e.clientX, e.clientY);
  };

  function draw(x0, y0, x1, y1) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }

  const selectColor = (color) => {
    setColor(color);
  };

  return (
    <div className="wrapper">
      <MetaTags>
        <meta name="monetization" content={artistInfo.paymentPointer}></meta>
      </MetaTags>
      <div>
        <ColorSelector selectColor={selectColor} />
        if (document.monetization) {console.log('page is monetized')} else{' '}
        {console.log('no money')}
        <canvas
          className="canvas"
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        />
      </div>
    </div>
  );
};

export default IndividualLiveArt;
