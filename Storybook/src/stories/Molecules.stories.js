import React from "react";
import { CookieButtons } from "../../../";
import CenteredWrapper from "../components/CenteredWrapper";
export default { title: "Molecules" };

export const Cookie_Buttons = () => (
  <CenteredWrapper heading="Cookie Buttons">
    <CookieButtons
      custom="text-black hover:underline"
      bannerProps={{ declineButton: { text: "Decline" } }}
      firstButtonProps={{ href: "/privacy-policy" }}
    />
  </CenteredWrapper>
);
