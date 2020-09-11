import React from "react";
import {
  FadingText,
  Rotating,
  RotatingText,
  useIntersect,
  MoovingLetters,
} from "../../../";
// import Wrapper from "../components/Wrapper";
import CenteredWrapper from "../components/CenteredWrapper";
export default { title: "Text Effects" };

export const Rotatingtext = () => {
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  return (
    <section className="h-screen" ref={ref}>
      <RotatingText
        numberOfSides={12}
        className="text-2xl sm:text-4xl lg:text-6xl font-bold absolute"
        rotationIn={20}
        entry={entry}
      >
        ЗДОРОВЫЙ ТЕКСТ
      </RotatingText>
    </section>
  );
};

export const RotatingSp = () => {
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  return (
    <section className="h-screen bg-black" ref={ref}>
      <Rotating
        numberOfSides={16}
        className="text-4xl sm:text-4xl lg:text-4xl font-bold absolute leading-snug bg-black text-white"
        rotationIn={20}
        entry={entry}
        perspective="120px"
      >
        ХУЙХУЙХУЙХУЙ
      </Rotating>
    </section>
  );
};

export const Fadingtext = () => {
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  return (
    <section className="h-screen" ref={ref}>
      <FadingText
        containerClassName="w-screen h-screen flex items-center justify-center bg-white"
        className="text-6xl my-4 font-bold absolute"
        duration={3}
        distance={100}
        entry={entry}
      >
        ЗДОРОВЫЙ+ТЕКСТ
      </FadingText>
    </section>
  );
};

export const Glitch = () => (
  <CenteredWrapper heading="Mooving Letters">
    <MoovingLetters
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quis!"
      textColor="#333"
      inView
      delay={3000}
      className="text-3xl font-bold text-center max-w-3xl"
      as="h1"
    ></MoovingLetters>
  </CenteredWrapper>
);
