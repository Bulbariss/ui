import React, { forwardRef } from "react";
import { selectOptions } from "./SelectOptions";
import Arrow from "./Arrow.js";

const Select = (props, ref) => {
  return (
    <label htmlFor="select">
      <select
        className="w-full md:w-64 bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md appearance-none shadow-none box-border align-middle bg-no-repeat"
        {...props}
        ref={ref}
        id="select"
        style={{ backgroundImage: `url(${Arrow})` }}
      >
        {selectOptions.map((k, i) => (
          <option value={k.id} key={i}>
            {k.value}
          </option>
        ))}
      </select>
      <style jsx>{`
        label select {
          background-position-x: 98%;
          background-position-y: 50%;
          height: 2.375rem;
          padding: 0.375rem 0.625rem;
          line-height: normal;
        }
      `}</style>
    </label>
  );
};

export default forwardRef(Select);
