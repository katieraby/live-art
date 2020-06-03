import React, { createRef, useRef, useState } from 'react';
import ColorSelector from './ColorSelector';
import MetaTags from 'react-meta-tags';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://192.168.1.65:8080');

const IndividualLiveArt = ({ artistInfo, isArtist }) => {
  /*need to use ref as canvas behaves differently in the dom. most dom elements have a value property that you can update directly whereas canvas has a context, which allows us to draw things.  */
  const canvasRef = useRef(null);

  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('hotpink');
  const [cleared, setCleared] = useState(false);
  const [currentAxis, setCurrentAxis] = useState({ currentX: 0, currentY: 0 });

  socket.on('messageFromServer', (dataFromServer) => {
    console.log(dataFromServer);
    socket.emit('join', { data: 'we have joined!!!' });
  });

  socket.on('drawingFromServer', (data) => {
    console.log(data);
    let w = window.innerWidth;
    let h = window.innerHeight;

    draw(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    //if (!isNaN(data.x0 / w) && !isNaN(data.y0)) {}
  });

  const onMouseDown = (e) => {
    if (isArtist) {
      setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
      setDrawing(true);
    }
  };

  const onMouseUp = (e) => {
    if (isArtist) {
      setDrawing(false);
      setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
    }
  };

  const onMouseMove = (e) => {
    if (isArtist) {
      if (!drawing) {
        return;
      }

      setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
      draw(
        currentAxis.currentX,
        currentAxis.currentY,
        e.clientX,
        e.clientY,
        color,
        true
      );
    }
  };

  function draw(x0, y0, x1, y1, color, emit) {
    // const canvas = canvasRef.current;
    const ctx = canvasRef.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    if (!emit) {
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;
    socket.emit('drawing', {
      x0: x0 / w,
      y0: y0 / h,
      x1: x1 / w,
      y1: y1 / h,
      color: color,
    });
    setCleared(false);
  }

  const selectColor = (color) => {
    if (isArtist) {
      setColor(color);
    }
  };

  return (
    <div className="wrapper">
      <MetaTags>
        <meta name="monetization" content={artistInfo.paymentPointer}></meta>
      </MetaTags>
      <div>
        <ColorSelector selectColor={selectColor} />
        {/* {document.monetization
          ? console.log('page is monetized')
          : console.log('no money', document.monetization)} */}
        {/* {console.log(document.monetization.state)} */}
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
