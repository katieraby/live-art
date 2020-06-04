import React, { useEffect, useRef, useState } from "react";
import ColorSelector from "./ColorSelector";
import MetaTags from "react-meta-tags";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://192.168.1.145:8080");

const IndividualLiveArt = ({ artistInfo, isArtist }) => {
  /*need to use ref as canvas behaves differently in the dom. most dom elements have a value property that you can update directly whereas canvas has a context, which allows us to draw things.  */

  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("hotpink");
  const [cleared, setCleared] = useState(false);
  const [currentAxis, setCurrentAxis] = useState({ currentX: 0, currentY: 0 });

  socket.on("messageFromServer", (dataFromServer) => {
    console.log(dataFromServer);
    socket.emit("join", { data: "we have joined!!!" });
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousedown", onMouseDown);
    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
    };
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousemove", onMouseMove);
    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mouseup", onMouseUp);
    return () => {
      canvas.removeEventListener("mouseup", onMouseUp);
    };
  });

  socket.on("drawingFromServer", (data) => {
    let w = window.innerWidth;
    let h = window.innerHeight;

    if (!isNaN(data.x0 / w) && !isNaN(data.y0)) {
      draw(
        Math.floor(data.x0 * w),
        Math.floor(data.y0 * h),
        Math.floor(data.x1 * w),
        Math.floor(data.y1 * h),
        data.color
      );
    }
  });

  const onMouseDown = (e) => {
    if (isArtist) {
      setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
      setDrawing(true);
    }
  };

  const onMouseUp = (e) => {
    if (isArtist) {
      setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
      setDrawing(false);
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
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }

    if (!emit) {
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;
    if (!isNaN(x0 / w)) {
      socket.emit("drawing", {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color: color,
      });
    }
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
      {isArtist || document.monetization.state === "started" ? (
        <div>
          <ColorSelector selectColor={selectColor} />
          <canvas
            className="canvas"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
      ) : (
        <div>
          <h2>Live Art is a web monetized project.</h2>
          <h2>
            This means that you will need to set up a virtual wallet to send
            micro-payments over the internet, in this case, to the artist you
            are supporting.
          </h2>

          <h2>
            Find out more and sign up with{" "}
            {<a href="https://coil.com/">Coil</a>}, and download the{" "}
            {
              <a href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca?hl=en">
                Google Chrome browser extension
              </a>
            }{" "}
            to support your local artist.
          </h2>
          <h2>
            Once you have installed the extension, please return to this site to
            view Live Art!
          </h2>
        </div>
      )}
    </div>
  );
};

export default IndividualLiveArt;
