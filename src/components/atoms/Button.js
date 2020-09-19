import React, { forwardRef } from "react";
import Spinner from "./Spinner";
import css from "styled-jsx/css";
import { Link } from "gatsby";

const buttonStyles = css`
  .classic {
    border-radius: 0.3125rem;
  }
  .halfmoon-sm {
    height: 1.625rem;
    padding: 0 0.625rem;
  }
  .loading > .text {
    visibility: hidden;
  }
`;

const Button = forwardRef(
  (
    {
      children,
      className,
      type = "classic",
      spinnerColor = "text-white",
      size = "md",
      spinnerSize = size,
      isLoading = false,
      isDisabled = isLoading,
      loadingText = false,
      href,
      ...props
    },
    ref
  ) => {
    const STYLES = {
      pill: `rounded-lg`,
      classic: `classic`,
      halfmoon: `rounded-md`,
      custom: ``,
      link: `hover:underline`,
    };

    const SIZES = {
      classic: {
        sm: "px-4 h-8",
        md: "px-6 h-10",
        lg: "px-8 h-12",
      },
      halfmoon: {
        sm: "halfmoon-sm",
        md: "px-4 h-8",
        lg: "px-5 h-10",
      },
      pill: {
        sm: "w-20 h-6",
        md: "w-24 h-8",
        lg: "w-32 h-10",
      },
      custom: {
        sm: "",
        md: "",
        lg: "",
      },
      link: {
        sm: "",
        md: "",
        lg: "",
      },
    };

    const allButtonsStyle = `whitespace-no-wrap transition-colors duration-200 inline-flex items-center justify-center flex-wrap focus:outline-none focus:shadow-outline ${
      !loadingText && isLoading && "loading"
    }`;

    const spinner = (
      <Spinner
        size={spinnerSize}
        loadingText={loadingText}
        color={spinnerColor}
      />
    );

    const classList = `${STYLES[type] || ""} ${SIZES[type][size] || ""} ${
      className || ""
    } ${allButtonsStyle} ${isDisabled && "cursor-not-allowed opacity-50"}`;

    if (href) {
      const isExternal = href && href.startsWith("http");
      const a = (
        <a
          className={classList}
          href={href}
          {...props}
          target="_blank"
          rel="noreferrer"
        >
          {isLoading && spinner}
          {children}
          <style jsx>{buttonStyles}</style>
        </a>
      );

      const b = (
        <Link
          className={classList}
          to={href}
          {...props}
          style={{ borderRadius: "5px" }}
        >
          {isLoading && spinner}
          {children}
        </Link>
      );

      return isExternal ? a : b;
    }

    return (
      <>
        <button ref={ref} className={classList} {...props}>
          {isLoading && spinner}
          <span className="text">{children}</span>
        </button>
        <style jsx>{buttonStyles}</style>
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
