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
          alert(e.clientX);
        }}
      />
    </div>
  );
};

export default IndividualLiveArt;
