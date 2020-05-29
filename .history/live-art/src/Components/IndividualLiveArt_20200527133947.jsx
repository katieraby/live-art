import React from 'react';

const IndividualLiveArt = () => {
  const canvasRef = React.useRef(null);
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
};

export default IndividualLiveArt;
