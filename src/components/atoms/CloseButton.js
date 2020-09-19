import React, { forwardRef } from "react";

const CloseButton = (
  {
    className,
    IconClassName = "text-red-600",
    iconSize = 4,
    buttonSize = 8,
    IconStrokeWidth = "0.25rem",
    ariaLabel = "Close",
    style = "inline-flex justify-center items-center rounded-md duration-100 transition-colors",
    ...props
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={`${style} ${className} w-${buttonSize} h-${buttonSize}`}
      aria-label={ariaLabel}
      type="button"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className={`w-${iconSize} h-${iconSize} ${IconClassName} stroke-current`}
        strokeWidth={IconStrokeWidth}
      >
        <line x1="2" y1="2" x2="22" y2="22" />
        <line x1="2" y1="22" x2="22" y2="2" />
      </svg>
    </button>
  );
};

export default forwardRef(CloseButton);
