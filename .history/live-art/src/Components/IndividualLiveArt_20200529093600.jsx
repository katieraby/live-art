import React, { useRef } from 'react';

const IndividualLiveArt = () => {
  const canvasRef = useRef(null);
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={(e) => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
        }}
      />
    </div>
  );
};

export default IndividualLiveArt;
