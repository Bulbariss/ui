import React, { useEffect, useRef } from "react";
import useIntersect from "./useIntersect";
import { motion, useAnimation } from "framer-motion";
const MotionComponent = ({
  animation,
  children,
  threshold = 0,
  triggerOnce = true,
  className,
  id,
}) => {
  let wasTriggered = useRef(false);
  const [ref, entry] = useIntersect({
    threshold: threshold,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (
      entry.isIntersecting &&
      animation.animOnscreen &&
      !(wasTriggered.current && triggerOnce)
    ) {
      controls.start(animation.animOnscreen);
      wasTriggered.current = true;
    }
    if (
      !entry.isIntersecting &&
      animation.animOffscreen &&
      !(wasTriggered.current && triggerOnce)
    ) {
      controls.start(animation.animOffscreen);
      wasTriggered.current = true;
    }
  }, [entry.isIntersecting, controls, animation, triggerOnce]);

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={controls}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
