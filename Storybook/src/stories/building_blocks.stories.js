import React from "react";
import MobileMenu from "../components/blocks/MobileMenu";
import MobileMenuMini from "../components/blocks/MobileMenuMini";
import MobileMenuToggle from "../components/blocks/MobileMenuToggle";
export default { title: "Building Blocks" };

export const Menu = () => {
  let list = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Info", "/info"],
    ["Contact", "/contact"],
  ];
  return (
    <div className="h-screen bg-coolGray-100">
      <nav
        role="navigation"
        style={{
          height: "56px",
          backgroundColor: "#181d1f",
        }}
        className="flex"
      >
        <MobileMenuToggle>
          <MobileMenu items={list} />
        </MobileMenuToggle>
      </nav>
    </div>
  );
};
export const MenuMini = () => {
  let list = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Info", "/info"],
    ["Contact", "/contact"],
  ];
  return (
    <div className="h-screen bg-coolGray-100">
      <nav
        role="navigation"
        style={{
          height: "56px",
          backgroundColor: "#181d1f",
        }}
        className="flex"
      >
        <div
          className="w-full h-full z-10 flex"
          style={{ backgroundColor: "#181d1f" }}
        >
          <MobileMenuToggle />
        </div>
        <MobileMenuMini items={list} />
      </nav>
    </div>
  );
};
