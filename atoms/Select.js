import React, { forwardRef } from "react";
import { selectOptions } from "./SelectOptions";
import Arrow from "./arrow.svg";

const Select = (props, ref) => {
  return (
    <label htmlFor="select">
      <select
        className="w-full md:w-64 bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md"
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
          background-repeat: no-repeat;
          background-position-x: 98%;
          background-position-y: 50%;
          appearance: none;
          height: 38px;
          padding: 6px 10px;
          box-shadow: none;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: normal;
        }
      `}</style>
    </label>
  );
};

export default forwardRef(Select);
