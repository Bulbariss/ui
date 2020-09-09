import React from "react";

const CenteredWrapper = ({ children, heading, className }) => {
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center ${className}`}
    >
      <h1 className="font-extrabold text-6xl pb-4 leading-none text-center">
        {heading}
      </h1>
      {children}
    </div>
  );
};

export default CenteredWrapper;
