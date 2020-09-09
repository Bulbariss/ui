import React, { useEffect, useState } from "react";

function FadingText({
  children,
  className,
  duration,
  distance,
  containerClassName,
  entry,
}) {
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    if (entry.isIntersecting) {
      setIsActive("moving");
    }
    if (!entry.isIntersecting) {
      setIsActive("static");
    }
  }, [entry.isIntersecting]);
  return (
    <>
      <div className={`relative ${containerClassName}`}>
        <div className={`${className} text-outline move ${isActive}`}>
          {children}
        </div>
        <div className={`${className} text-outline move delay ${isActive}`}>
          {children}
        </div>
        <div
          className={`${className}`}
          style={{
            transform: "rotateY(50deg) rotateZ(10deg) rotateX(-75deg)",
          }}
        >
          {children}
        </div>

        <style jsx>
          {`
            .text-outline {
              -webkit-text-stroke: 2px black;
              -webkit-text-fill-color: transparent;
            }

            .move.moving {
              animation-duration: ${duration}s;
              animation-iteration-count: infinite;
              animation-name: move;
              animation-timing-function: linear;
            }

            .delay {
              transform: rotateY(50deg) rotateZ(10deg) rotateX(-75deg);
              animation-delay: ${duration / 2}s;
            }

            @keyframes move {
              from {
                opacity: 1;
                transform: translateY(0px) rotateY(50deg) rotateZ(10deg)
                  rotateX(-75deg);
              }

              to {
                opacity: 0;
                transform: translateY(${distance}px) rotateY(50deg)
                  rotateZ(10deg) rotateX(-75deg);
              }
            }
          `}
        </style>
      </div>
    </>
  );
}

export default FadingText;
