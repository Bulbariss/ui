import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const defaultStyle =
  "inline-flex justify-center items-center rounded-md duration-100 transition-colors";

const CloseButton = (
  {
    className,
    iconSize = 4,
    buttonSize = 8,
    IconStrokeWidth = "0.25rem",
    ariaLabel = "Close",
    iconColor = "text-red-600",
    hoverBgColor = "hover:bg-gray-100",
    custom,
    ...props
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={`${
        custom || defaultStyle
      } ${className} w-${buttonSize} h-${buttonSize} ${hoverBgColor}`}
      aria-label={ariaLabel}
      type="button"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className={`w-${iconSize} h-${iconSize} ${iconColor} stroke-current`}
        strokeWidth={IconStrokeWidth}
      >
        <line x1="2" y1="2" x2="22" y2="22" />
        <line x1="2" y1="22" x2="22" y2="2" />
      </svg>
    </button>
  );
};

CloseButton.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.number,
  buttonSize: PropTypes.number,
  ariaLabel: PropTypes.string,
  iconColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  custom: PropTypes.string,
  IconStrokeWidth: PropTypes.string,
};

export default forwardRef(CloseButton);
