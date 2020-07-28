/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function MobileMenu(items) {
  const sides = items.items.map((value, key) => {
    return (
      <li className="py-2 px-0" key={key}>
        <a className="hover:opacity-50" href={value[1]}>
          {value[0]}
        </a>
      </li>
    );
  });

  return (
    <ul
      id="menuScreen"
      className="w-full bg-white  flex flex-col items-center md:hidden text-2xl font-thin py-4 absolute"
    >
      {sides}
      <style jsx global>{`
        #menu-items a {
          color: #1e1e23;
          transition: 200ms;
        }

        #menuScreen {
          margin-top: 3.5rem;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
          transition: transform cubic-bezier(0.4, 0.01, 0.165, 0.99) 0.3s;
        }

        body.mobile-menu-active {
          overflow: hidden;
        }

        body.mobile-menu-active #menuScreen {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          overflow: hidden;
        }

        #menuScreen li {
          opacity: 0;
          -webkit-transform: translate3d(0, 2rem, 0);
          transform: translate3d(0, 2rem, 0);
          transition: opacity 0.2s ease, transform 0.3s ease;
        }

        body.mobile-menu-active #menuScreen li {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          transition: opacity 0.2s ease,
            transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), color 0.2s ease;
        }

        body.mobile-menu-active #menuScreen li:nth-child(1) {
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.4s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(2) {
          -webkit-transition-delay: 0.6s;
          transition-delay: 0.5s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(3) {
          -webkit-transition-delay: 0.7s;
          transition-delay: 0.6s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(4) {
          -webkit-transition-delay: 0.8s;
          transition-delay: 0.7s;
        }
      `}</style>
    </ul>
  );
}

export default MobileMenu;
