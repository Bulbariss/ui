import React from "react";
import { Button, Spinner, ThemeToggle, CloseButton } from "../../../";
import Wrapper from "../components/Wrapper";
import CenteredWrapper from "../components/CenteredWrapper";
export default { title: "Atoms" };

export const Buttons = () => (
  <div className="max-w-2xl mx-auto px-8">
    <Wrapper heading="Classic">
      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
        className="text-sm"
        size="sm"
      >
        Button
      </Button>
      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
      >
        Button
      </Button>
      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
        className="text-xl"
        size="lg"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Pill">
      <Button
        color="bg-green-600"
        textColor="text-white"
        hoverColor="hover:bg-green-700"
        className="text-sm"
        size="sm"
        type="pill"
      >
        Button
      </Button>
      <Button
        color="bg-green-600"
        textColor="text-white"
        hoverColor="hover:bg-green-700"
        type="pill"
      >
        Button
      </Button>
      <Button
        color="bg-green-600"
        textColor="text-white"
        hoverColor="hover:bg-green-700"
        className="text-xl"
        size="lg"
        type="pill"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Halfmoon">
      <Button
        color="bg-blue-600"
        textColor="text-white"
        hoverColor="hover:bg-blue-700"
        className="text-sm"
        size="sm"
        type="halfmoon"
      >
        Button
      </Button>
      <Button
        color="bg-blue-600"
        textColor="text-white"
        hoverColor="hover:bg-blue-700"
        type="halfmoon"
      >
        Button
      </Button>
      <Button
        color="bg-blue-600"
        textColor="text-white"
        hoverColor="hover:bg-blue-700"
        className="text-xl"
        size="lg"
        type="halfmoon"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Custom">
      <Button custom="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-3 rounded-md">
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="States">
      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
        isLoading
      >
        Button
      </Button>

      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
        isLoading
        loadingText={false}
      >
        Button
      </Button>
      <Button
        color="bg-indigo-600"
        textColor="text-white"
        hoverColor="hover:bg-indigo-700"
        isDisabled
      >
        Button
      </Button>
    </Wrapper>
  </div>
);

export const ThemeButton = () => {
  return (
    <CenteredWrapper
      heading="Theme Button"
      className="transition-colors duration-300"
    >
      <ThemeToggle iconSize="12" buttonSize="24" className="rounded-lg" />
      <style>{`
        body[data-theme="dark"] div {
          background-color: #333;
        }
        body[data-theme="light"] div {
          background-color: #fff;
        }
        body[data-theme="dark"] h1 {
          color: #fff;
        }
        body[data-theme="light"] h1 {
          color: #333;
        }
      `}</style>
    </CenteredWrapper>
  );
};

export const Close_Button = () => {
  return (
    <CenteredWrapper heading="Close Button">
      <CloseButton
        iconSize="12"
        buttonSize="24"
        className="rounded-lg"
        IconStrokeWidth="0.2rem"
      />
    </CenteredWrapper>
  );
};

export const Spinnerr = () => {
  return (
    <CenteredWrapper heading="Spinner">
      <Spinner size="lg" />
    </CenteredWrapper>
  );
};
