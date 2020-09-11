import React from "react";
import {
  Button,
  Spinner as Spinnerr,
  Textarea as Textareaa,
  // Select as Selectt,
  Input as Inputt,
  MobileMenuToggle as MobileMenuTogglee,
  Label as Labell,
  ThemeToggle,
  CloseButton,
} from "../../../";
import Wrapper from "../components/Wrapper";
import CenteredWrapper from "../components/CenteredWrapper";
export default { title: "Atoms" };

export const Buttons = () => (
  <div className="max-w-2xl mx-auto px-8">
    <Wrapper heading="Classic">
      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
        className="text-sm"
        size="sm"
      >
        Button
      </Button>
      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
      >
        Button
      </Button>
      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
        className="text-xl"
        size="lg"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Pill">
      <Button
        color="bg-green-500"
        textColor="text-white"
        hoverColor="hover:bg-green-600"
        className="text-sm"
        size="sm"
        type="pill"
      >
        Button
      </Button>
      <Button
        color="bg-green-500"
        textColor="text-white"
        hoverColor="hover:bg-green-600"
        type="pill"
      >
        Button
      </Button>
      <Button
        color="bg-green-500"
        textColor="text-white"
        hoverColor="hover:bg-green-600"
        className="text-xl"
        size="lg"
        type="pill"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Halfmoon">
      <Button
        color="bg-blue-500"
        textColor="text-white"
        hoverColor="hover:bg-blue-600"
        className="text-sm"
        size="sm"
        type="halfmoon"
      >
        Button
      </Button>
      <Button
        color="bg-blue-500"
        textColor="text-white"
        hoverColor="hover:bg-blue-600"
        type="halfmoon"
      >
        Button
      </Button>
      <Button
        color="bg-blue-500"
        textColor="text-white"
        hoverColor="hover:bg-blue-600"
        className="text-xl"
        size="lg"
        type="halfmoon"
      >
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="Custom">
      <Button custom="bg-red-500 hover:bg-red-600 text-white text-xl font-bold px-12 py-3 rounded-md">
        Button
      </Button>
    </Wrapper>
    <Wrapper heading="States">
      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
        isLoading
      >
        Button
      </Button>

      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
        isLoading
        loadingText={false}
      >
        Button
      </Button>
      <Button
        color="bg-indigo-500"
        textColor="text-white"
        hoverColor="hover:bg-indigo-600"
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

export const Spinner = () => {
  return (
    <CenteredWrapper heading="Spinner">
      <Spinnerr size="lg" color="border-gray-600" />
    </CenteredWrapper>
  );
};

export const Textarea = () => {
  return (
    <CenteredWrapper heading="Textarea" className="px-4">
      <Textareaa className="max-w-2xl border-2 border-gray-400 focus:border-gray-600 rounded-md h-40" />
    </CenteredWrapper>
  );
};

// export const Select = () => {
//   return (
//     <CenteredWrapper heading="Select" className="px-4">
//       <Selectt />
//     </CenteredWrapper>
//   );
// };

export const Input = () => {
  return (
    <CenteredWrapper heading="Input" className="px-4">
      <Inputt className="max-w-2xl border-2 border-gray-400 focus:border-gray-600 rounded-md" />
    </CenteredWrapper>
  );
};

export const MobileMenuToggle = () => {
  return (
    <CenteredWrapper heading="Mobile Menu Toggle" className="px-4">
      <MobileMenuTogglee />
    </CenteredWrapper>
  );
};

export const Label = () => {
  return (
    <CenteredWrapper heading="Label" className="px-4">
      <Labell label="test label" />
    </CenteredWrapper>
  );
};
