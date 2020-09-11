import React, { useState, useEffect, useRef } from "react";
import useEventListener from "../utils/useEventListener";
import PropTypes from "prop-types";

function RotatingText({
  numberOfSides,
  className,
  children,
  rotationIn,
  entry,
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
    setSideHeight((sideHeight = refSide.current.offsetHeight + 1));
    setSideWidth((sideWidth = refSide.current.offsetWidth + 1));
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
    // console.log(sideWidth, sideHeight, transZ);
    return (
      <div
        className={`cell ${className}`}
        key={num}
        style={{
          transform: `rotateX(${
            (num - 1) * (360 / numberOfSides)
          }deg) translateZ(${transZ}px) `,
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
          transform: `rotateX(0deg) translateZ(${transZ}px) `,
        }}
      >
        {children}
      </div>
      <style jsx global>
        {`
          .scene {
            position: relative;
            perspective: 10000px;
          }

          .cell {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .carousel {
            width: 100%;
            height: 100%;
            position: absolute;
            transform-style: preserve-3d;
          }

          .carousel.rotating {
            animation-duration: ${rotationIn}s;
            animation-iteration-count: infinite;
            animation-name: rotate;
            animation-timing-function: linear;
          }

          @keyframes rotate {
            from {
              transform: translateZ(-${transZ}px) rotateX(360deg);
            }

            to {
              transform: translateZ(-${transZ}px) rotateX(0deg);
            }
          }
        `}
      </style>
    </div>
  );
}

RotatingText.propTypes = {
  className: PropTypes.string,
  numberOfSides: PropTypes.number,
  rotationIn: PropTypes.number,
  entry: PropTypes.bool,
};

export default RotatingText;
