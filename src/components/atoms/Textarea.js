import React, { forwardRef } from "react";

const Textarea = (
  {
    className,
    maxLength = "180",
    rows = "6",
    wrap = "hard",
    custom,
    placeholder,
    ...props
  },
  ref
) => {
  const defaultStyle =
    "w-full text-base outline-none focus:outline-none align-middle shadow-none box-border appearance-none transition-colors duration-200";

  return (
    <>
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={`${custom || defaultStyle} ${className}`}
        {...props}
      ></textarea>
      <style jsx>{`
        textarea {
          line-height: normal;
          padding: 0.375rem 0.625rem;
          min-height: 6.25rem;
        }

        textarea::placeholder {
          line-height: normal !important;
        }

        textarea::-moz-placeholder {
          line-height: normal !important;
        }

        textarea::-webkit-input-placeholder {
          line-height: normal !important;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
