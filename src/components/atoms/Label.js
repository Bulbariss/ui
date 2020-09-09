import React from "react";
import PropTypes from "prop-types";

const defaultStyle = `block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;

const Label = ({
  className,
  style = "classic",
  htmlFor,
  label,
  custom,
  ...props
}) => {
  return (
    <label
      className={`${custom || defaultStyle} ${className}`}
      htmlFor={htmlFor}
      {...props}
    >
      {label}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  htmlFor: PropTypes.string,
  custom: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Label;
