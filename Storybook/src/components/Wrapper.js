import React from "react";

const Wrapper = ({ children, heading }) => {
  return (
    <section className="pt-8 pb-12">
      <p className="text-5xl font-extrabold pb-2">{heading}</p>
      <div className="flex flex-wrap justify-start items-center space-x-8">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
