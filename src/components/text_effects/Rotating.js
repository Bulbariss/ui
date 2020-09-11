import React, { useState, useEffect, useRef } from "react";
import useEventListener from "../utils/useEventListener";
import PropTypes from "prop-types";

function Rotating({
  numberOfSides = 12,
  rotationIn = 20,
  perspective = "140px",
  className,
  children,
  entry = false,
}) {
  let [transZ, setTransZ] = useState(0);
  let [sideHeight, setSideHeight] = useState(0);
  let [sideWidth, setSideWidth] = useState(0);
  const numbers = getArray(numberOfSides);
  const refSide = useRef(null);
  const [isActive, setIsActive] = useState(0);
  useEventListener(window, "resize", onSampleResize);

  function getDistance() {
    return sideHeight / 2 / Math.tan(Math.PI / numberOfSides);
  }

  function getDimentions() {
    setSideHeight((sideHeight = refSide.current.offsetHeight));
    setSideWidth((sideWidth = refSide.current.offsetWidth));
  }

  function getArray(num) {
    let numbers = [];
    for (let i = 0; i < num; i++) {
      numbers[i] = i + 1;
    }
    return numbers;
  }

  function onSampleResize() {
    if (
      sideHeight !== refSide.current.offsetHeight ||
      sideWidth !== refSide.current.offsetWidth
    ) {
      getDimentions();
      setTransZ(getDistance());
    }
  }

  const sides = numbers.map((num) => {
    // console.log(sideWidth, sideHeight, transZ, num);
    return (
      <div
        className={`cell ${className}`}
        key={num}
        style={{
          transform: `rotate3d(0, -1, 0, -90deg) rotateX(${
            (num - 1) * (360 / numberOfSides)
          }deg)  translateZ(-${transZ}px)`,
        }}
      >
        {children}
      </div>
    );
  });

  useEffect(() => {
    // setTimeout(() => {
    getDimentions();
    setTransZ(getDistance());
    // }, 200);
  }, []);

  useEffect(() => {
    if (entry.isIntersecting) {
      setIsActive("rotating");
    }
    if (!entry.isIntersecting) {
      setIsActive("static");
    }
  }, [entry.isIntersecting]);

  return (
    <div>
      <div className="scene w-screen h-screen flex items-center justify-center">
        <div
          className={`carousel ${isActive}`}
          style={{
            transform: "scale(1.7)",
            height: sideHeight,
            width: sideWidth,
          }}
        >
          {sides}
        </div>
      </div>
      <div
        className={`cell absolute invisible top-0 ${className}`}
        ref={refSide}
        style={{
          transform: `rotateX(0deg) translateZ(${transZ}px)`,
        }}
      >
        {children}
      </div>
      <style jsx global>
        {`
          .scene {
            position: relative;
            perspective: ${perspective};
            text-rendering: geometricPrecision;
          }

          .cell {
             {
              /* -webkit-backface-visibility: hidden; */
            }
             {
              /* backface-visibility: hidden; */
            }
          }

          .carousel {
            perspective: 900px;

            width: 100%;
            height: 100%;
            position: absolute;
            transform-style: preserve-3d;
            text-rendering: geometricPrecision;
          }

          .carousel.rotating {
            animation-duration: ${rotationIn}s;
            animation-iteration-count: infinite;
            animation-name: rotate;
            animation-timing-function: linear;
          }

          @keyframes rotate {
            from {
              transform: translateZ(-${transZ}px) rotate(360deg);
            }

            to {
              transform: translateZ(-${transZ}px) rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
}

Rotating.propTypes = {
  className: PropTypes.string,
  perspective: PropTypes.string,
  numberOfSides: PropTypes.number,
  rotationIn: PropTypes.number,
  entry: PropTypes.bool,
};

export default Rotating;
