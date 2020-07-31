import React from "react";
import { configure } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// this is required, otherwise storybook won't properly load tailwind
// import { addDecorator } from "@storybook/react";
// import { withPerformance } from "storybook-addon-performance";
// import { addParameters } from "@storybook/client-api";
// import { withInfo } from "@storybook/addon-info";
import "../src/css/style.css";
import Layout from "./Layout";

// addParameters({
//   viewport: {
//     viewports: newViewports,
//     defaultViewport: "iphone6",
//   },
// });
// addDecorator(withPerformance);
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
// addDecorator(
//   withInfo({
//     inline: true,
//     styles: (base) => ({
//       ...base,
//       infoBody: {
//         ...base.infoBody,
//         backgroundColor: "#303030",
//         color: "white",
//       },
//       source: {
//         h1: {
//           margin: "20px 0",
//           padding: "0 0 5px 0",
//           fontSize: "25px",
//           borderBottom: "1px solid #EEE",
//         },
//       },
//     }),
//     propTablesExclude: [Layout],
//   })
// );

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\\.stories\\.js$/), module);
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
