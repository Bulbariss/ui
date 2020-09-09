import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ThemeToggle({
  iconSize = 4,
  buttonSize = 8,
  className,
  bgColor = "hover:bg-gray-400",
  sunColor = "text-gray-100",
  moonColor = "text-gray-800",
  ariaLabel = "Switch color theme",
  bodyClassList = "transition-colors duration-200",
}) {
  const darkModeMediaQuery =
    typeof window !== `undefined` &&
    window.matchMedia("(prefers-color-scheme: dark)");
  const [isMoon, setIsMoon] = useState();

  if (typeof window !== `undefined`) {
    darkModeMediaQuery.addListener((e) => {
      const darkModeOn = e.matches;
      setIsMoon(darkModeOn);
    });
  }

  useEffect(() => {
    document.body.classList.add(...bodyClassList.split(" "));

    if (document.body.getAttribute("data-theme") === "light") {
      setIsMoon(false);
    } else if (document.body.getAttribute("data-theme") === "dark") {
      setIsMoon(true);
    } else {
      setIsMoon(darkModeMediaQuery.matches);
    }
  }, []);

  useEffect(() => {
    if (isMoon) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [isMoon]);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`w-${buttonSize} h-${buttonSize} ${bgColor} flex justify-center items-center transition-colors duration-200 ${className}`}
      onClick={() => setIsMoon(!isMoon)}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className={`h-${iconSize} w-${iconSize}`}
      >
        {isMoon ? (
          <path
            viewBox="0 0 30 30"
            className={`${sunColor} fill-current`}
            d="M14.984.986A1 1 0 0014 2v3a1 1 0 102 0V2A1 1 0 0014.984.986zM5.797 4.8a1 1 0 00-.695 1.717l2.12 2.12a1 1 0 101.415-1.413L6.516 5.102a1 1 0 00-.72-.303zm18.375 0a1 1 0 00-.688.303l-2.12 2.12a1 1 0 101.413 1.415l2.121-2.121a1 1 0 00-.726-1.717zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1 1 0 100 2h3a1 1 0 100-2H2zm23 0a1 1 0 100 2h3a1 1 0 100-2h-3zM7.91 21.06a1 1 0 00-.687.303l-2.121 2.121a1 1 0 101.414 1.414l2.12-2.12a1 1 0 00-.726-1.717zm14.15 0a1 1 0 00-.697 1.717l2.121 2.121a1 1 0 101.414-1.414l-2.12-2.12a1 1 0 00-.717-.303zm-7.076 2.926A1 1 0 0014 25v3a1 1 0 102 0v-3a1 1 0 00-1.016-1.014z"
            transform="scale(0.8)"
          />
        ) : (
          <path
            className={`${moonColor} fill-current`}
            viewBox="0 0 24 24"
            d="M5 6c0 6.627 5.373 12 12 12 2.027 0 3.937-.503 5.611-1.39A12 12 0 0112 23C5.373 23 0 17.627 0 11 0 6.399 2.59 2.403 6.39.39A11.94 11.94 0 005 6z"
          />
        )}
      </svg>
    </button>
  );
}

ThemeToggle.propTypes = {
  iconSize: PropTypes.string,
  buttonSize: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  bodyClassList: PropTypes.string,
  moonColor: PropTypes.string,
  sunColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ThemeToggle;
