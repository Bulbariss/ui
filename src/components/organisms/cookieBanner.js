import React, { useState, useEffect } from "react";
import {
  handleRejectCookies,
  handleAllowCookies,
  googleAnalytics,
} from "../utils/CookieUtils";
import Button from "../atoms/Button";

function CookieBanner({
  isVisible,
  CookieBannerText = {
    declineButtonText: "Decline",
    acceptButtonText: "Allow cookies",
    privacyPolicyText:
      "This website uses cookies to ensure you get the best experience. ",
    privacyPolicyLinkText: "Read privacy policy",
  },
  buttonStyling = {
    privacyPolicy: {
      href: "/privacy-policy",
      className: "text-gray-600 hover:text-gray-500 underline pl-0 pr-0",
    },
    declineButton: {
      type: "classic",
      className: "border-2 border-gray-600 hover:border-gray-500",
      textColor: "text-gray-600 hover:text-gray-500",
    },
    acceptButton: {
      type: "classic",
      className: "text-white bg-indigo-600 hover:bg-indigo-500 ml-4",
    },
  },
  bannerStyling = {
    banner: "fixed bottom-0 right-0 w-full pb-6 px-2 sm:px-4 z-50 text-black",
    bannerContainer:
      "max-w-80 bg-gray-100 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit",
    privacyPolicyParagraph: "h-fit pb-2 md:pb-0 leading-tight",
    buttonsContainer: "md:ml-16 flex mt-2 sm:mt-0",
  },
}) {
  let [visibility, setVisibility] = useState();

  const {
    declineButtonText,
    acceptButtonText,
    privacyPolicyText,
    privacyPolicyLinkText,
  } = CookieBannerText;
  const { privacyPolicy, declineButton, acceptButton } = buttonStyling;
  const {
    bannerContainer,
    privacyPolicyParagraph,
    banner,
    buttonsContainer,
  } = bannerStyling;

  useEffect(() => {
    setVisibility(isVisible["visible"]);
  }, [isVisible]);

  function accept() {
    handleAllowCookies();
    googleAnalytics();
    setVisibility(false);
  }

  function decline() {
    handleRejectCookies();
    setVisibility(false);
  }

  return (
    <div className={`${banner} ${!visibility && "hidden"}`}>
      <div id="cookie-banner-container" className={bannerContainer}>
        <p className={privacyPolicyParagraph}>
          {privacyPolicyText}
          <Button {...privacyPolicy}>{privacyPolicyLinkText}</Button>
        </p>
        <div className={buttonsContainer}>
          <Button onClick={() => decline()} {...declineButton}>
            {declineButtonText}
          </Button>
          <Button onClick={() => accept()} {...acceptButton}>
            {acceptButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
