import React, { useEffect } from "react";
import "../src/css/style.css";

const Layout = ({ children }) => {
  useEffect(() => {
    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // the "I am a keyboard user" key
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }

    window.addEventListener("keydown", handleFirstTab);
    return () => {
      window.removeEventListener("keydown", handleFirstTab);
    };
  }, []);
  return <div className="bg-white">{children}</div>;
};

export default Layout;
