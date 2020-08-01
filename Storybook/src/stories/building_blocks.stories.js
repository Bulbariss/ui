import React from "react";
import { Button } from "../../../";
// import { Button } from "@bulbariss/ui";
export default { title: "Building Blocks" };

export const Buttons = () => (
  <div className="h-screen flex flex-wrap justify-center items-center">
    <Button
      color="bg-indigo-600"
      textColor="text-white"
      hoverColor="hover:bg-indigo-700"
    >
      Testing
    </Button>
    <Button
      type="none"
      variant="none"
      color="bg-indigo-600"
      textColor="text-white"
      hoverColor="hover:bg-indigo-700"
      size="lg"
      btnCss="background-color: #333; color: #fff; font-size: 12px; padding: 10px 20px;"
      className="ml-8"
    >
      Testing
    </Button>
    <Button
      color="bg-indigo-600"
      size="lg"
      textColor="text-white"
      hoverColor="hover:bg-indigo-700"
      className="ml-8 text-lg"
      isLoading
      loadingText={false}
    >
      Testing
    </Button>
    <Button
      color="bg-indigo-600"
      size="sm"
      textColor="text-white"
      hoverColor="hover:bg-indigo-700"
      className="ml-8 text-sm"
      isLoading
    >
      Testing
    </Button>
    <Button
      variant="outline"
      color=""
      textColor="text-black"
      hoverColor="hover:bg-indigo-300"
      className="ml-8"
      btnCss="background-color: #333;"
      href="https://nextjs.org/docs/api-reference/next/link"
    >
      Test
    </Button>
    <Button
      variant="ghost"
      color="bg-indigo-600"
      textColor="text-indigo-800"
      hoverColor="hover:bg-indigo-300"
      className="ml-8"
    >
      Testing
    </Button>
    <Button
      type="link"
      textColor="text-indigo-800"
      className="ml-8"
      isBold={false}
    >
      Testing
    </Button>
  </div>
);
