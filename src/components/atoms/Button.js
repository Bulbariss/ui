import React, { forwardRef } from "react";
import Spinner from "./Spinner";
import css from "styled-jsx/css";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const buttonStyles = css`
  .classic {
    border-radius: 5px;
  }
  .halfmoon-sm {
    height: 1.625rem;
    padding: 0.625rem;
  }
  .loading > .text {
    visibility: hidden;
  }
`;

const Button = forwardRef(
  (
    {
      children,
      btnCss,
      className,
      type = "classic",
      color,
      hoverColor = color,
      textColor = "text-white",
      hoverTextColor,
      variant = "solid",
      size = "md",
      spinnerSize = size,
      isLoading = false,
      isBold = true,
      isDisabled = isLoading,
      loadingText = true,
      href,
      ...props
    },
    ref
  ) => {
    const STYLES = {
      pill: `w-24 h-8 rounded-lg`,
      classic: `classic whitespace-no-wrap`,
      halfmoon: `whitespace-no-wrap rounded-md`,
      link: `${textColor} hover:underline`,
    };

    const VARIANTS = {
      solid: `${color} ${textColor} ${hoverColor}`,
      outline: `border-2 ${color} ${textColor} ${hoverColor} ${
        hoverTextColor || hoverColor
      }`,
      ghost: `${textColor} bg-transparent ${hoverColor}`,
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
    };

    const allButtonsStyle = `transition-colors duration-200 inline-flex items-center justify-center flex-wrap focus:outline-none focus:shadow-outline ${
      loadingText && isLoading && "loading"
    }`;

    const classList = `${VARIANTS[variant]} ${STYLES[type]} ${
      type === "classic" || type === "halfmoon" ? SIZES[type][size] : ""
    } ${className} ${allButtonsStyle} ${isBold && "font-bold"} ${
      isDisabled && "cursor-not-allowed opacity-50"
    }`;

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
          {children}
          <style jsx>{buttonStyles}</style>
          <style jsx>{`
            a {
              ${btnCss}
            }
          `}</style>
        </a>
      );

      const b = (
        <Link
          className={classList}
          to={href}
          {...props}
          style={{ borderRadius: "5px" }}
        >
          {children}
          <style jsx>{`
            a {
              ${btnCss}
            }
          `}</style>
        </Link>
      );

      return isExternal ? a : b;
    }

    return (
      <>
        <button ref={ref} className={classList} {...props}>
          {isLoading && (
            <Spinner
              size={spinnerSize}
              loadingText={loadingText}
              color={textColor}
            />
          )}
          <span className="text">{children}</span>
        </button>
        <style jsx>{buttonStyles}</style>
        <style jsx>{`
          button {
            ${btnCss}
          }
        `}</style>
      </>
    );
  }
);

Button.propTypes = {
  className: PropTypes.string,
  btnCss: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  variant: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  isBold: PropTypes.bool,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  loadingText: PropTypes.bool,
  href: PropTypes.string,
};

Button.displayName = "Button";

export default Button;
