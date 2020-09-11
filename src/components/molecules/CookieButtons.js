import React, { useState, useEffect } from "react";
import CookieBanner from "../organisms/CookieBanner";
import Button from "../atoms/Button";
import { getCookie } from "../utils/CookieUtils";

function CookieButtons({
  className,
  firstButtonProps,
  firstButtonText = "Privacy Policy",
  secondButtonText = "Cookie preferences",
  secondButtonProps,
  bannerProps,
  ...props
}) {
  let [isBannerVisible, setIsBannerVisible] = useState({
    visible: false,
  });
  useEffect(() => {
    if (!getCookie("consent")) {
      setIsBannerVisible({ visible: true });
    }
  }, []);

  return (
    <>
      <div className={className}>
        <Button {...props} {...firstButtonProps} className="hover-opacity">
          {firstButtonText}
        </Button>
        <span className="px-1">|</span>
        <Button
          onClick={() => setIsBannerVisible({ visible: true })}
          {...props}
          className="cursor-pointer hover-opacity btn-change-cookie-preferences inline"
        >
          {secondButtonText}
        </Button>
      </div>
      <CookieBanner isVisible={isBannerVisible} />
    </>
  );
}

export default CookieButtons;
