import React from "react";
import { MoovingLetters, ContactForm, CookieBanner } from "../../../";
import CenteredWrapper from "../components/CenteredWrapper";
export default { title: "Organisms" };

export const Cookie_Banner = () => (
  <CenteredWrapper heading="Cookie Banner">
    <CookieBanner isVisible={{ visible: true }} />
  </CenteredWrapper>
);

export const Form = () => {
  const colors = {
    themeBgColor: "bg-indigo-600",
    errorBgColor: "bg-red-500",
    errorBorderColor: "border-red-500",
    successBgColor: "bg-green-500",
    loadingColor: "bg-blue-500",
    btnHover: "bg-indigo-700",
    inputColor: "bg-light",
    inputFocusColor: "focus:border-indigo-600",
    inputBorderColor: "border-light",
  };

  const buttonText = {
    defaultText: "Отправить",
    errorText: "Ошибка",
    successText: "Отправлено",
    loadingtext: "",
  };

  return (
    <CenteredWrapper heading="Contact Form">
      <ContactForm
        className="w-full max-w-md mx-auto"
        buttonText={buttonText}
        colors={colors}
      />
    </CenteredWrapper>
  );
};

export const Glitch = () => (
  <CenteredWrapper heading="Mooving Letters">
    <MoovingLetters
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quis!"
      textColor="#333"
      inView
      delay={5000}
      className="text-3xl font-bold text-center"
      as="h1"
    ></MoovingLetters>
  </CenteredWrapper>
);
