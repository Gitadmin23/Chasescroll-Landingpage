import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import ButtonGroup from "../components/Navbar/ButtonGroup";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible);
  };

  const handleToggleEnter = () => {
    setIsMenuOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavLinkClassName = (path, transparent, isScrolled) => {
    let className = "";

    if (isActive(path)) {
      className += "w-auto text-chaseBlue";
      if (transparent && !isScrolled) {
        className += " text-white";
      }
    } else {
      className += "text-black hover:text-bienPrimary";
      if (transparent && !isScrolled) {
        className += " text-white";
      }
    }

    return className;
  };

  const CustomLink = ({ path, transparent, isScrolled, children }) => {
    const className = getNavLinkClassName(path, transparent, isScrolled);
    const handleClick = () => {
      setIsMenuVisible(false);
    };

    return (
      <NavLink
        to={path}
        className={className}
        activeClassName="text-red-500"
        onClick={handleClick}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <div className="fixed z-50 top-0 w-full mx-auto max-w-[1440px] bg-white border-b-2">
      <div className="px-4 xl:px-0 max-w-[1200px] w-full mx-auto py-5 flex gap-8 justify-between items-center">
        <div className="flex flex-row gap-1 max-w-[197px] w-full items-center">
          <img className="max-w-[60px] w-full" src={logo} alt="logo" />
          <p className="text-2xl font-normal w-full">Chasescroll</p>
        </div>

        <div className="hidden lg:flex justify-between max-w-[534px] w-full">
          <CustomLink path="/" transparent={false} isScrolled={false}>
            Home
          </CustomLink>
          {/* <CustomLink path="#" transparent={false} isScrolled={false}>
            <div
              className="relative lg:inline-block lg:mt-0"
              onMouseEnter={handleToggleEnter}
            >
              <button
                className="text-black flex items-center gap-1 hover:text-chaseBlue lg:mr-4"
                onClick={handleMenuToggle}
              >
                Features <Icon icon="mdi:chevron-down" />
              </button>
              {isMenuOpen && (
                <div
                  className="w-full absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 lg:block"
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to="#"
                    className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                  >
                    Feature 1
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                  >
                    Feature 2
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                  >
                    Feature 3
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                  >
                    Feature 4
                  </Link>
                </div>
              )}
            </div>
          </CustomLink> */}
          <CustomLink path="/about" transparent={false} isScrolled={false}>
            About us
          </CustomLink>
          <CustomLink path="/privacy-poilcy" transparent={false} isScrolled={false}>
            Policy
          </CustomLink>
          <CustomLink path="/terms" transparent={false} isScrolled={false}>
            Terms & Condition
          </CustomLink>
          <CustomLink path="/contact" transparent={false} isScrolled={false}>
            Contact us
          </CustomLink>
        </div>
        <div className="hidden lg:flex gap-4">
          <ButtonGroup white ctaText="Login" />
          <ButtonGroup blue ctaText="Get Started" />
        </div>
        {/* Hamburger Menu */}
        <div className="flex lg:hidden">
          <div className="lg:hidden flex items-center">
            <button
              onClick={handleMenuClick}
              className="p-3 z-50 focus:outline-none"
            >
              {isMenuVisible ? (
                <Icon
                  className="text-2xl text-chaseBlue"
                  icon="line-md:menu-to-close-transition"
                />
              ) : (
                <Icon className="text-2xl" icon="mdi:hamburger-menu" />
              )}
            </button>
          </div>
          {isMenuVisible && (
            <div className="fixed z-10 top-0 right-0 w-[80%] h-full bg-white lg:hidden   ">
              <div className="flex flex-col items-start justify-start w-full h-full p-10">
                <ul className="mt-20 flex flex-col items-center justify-start w-full gap-8 text-lg">
                  <CustomLink path="/" transparent={false} isScrolled={false}>
                    Home
                  </CustomLink>
                  {/* <CustomLink path="#" transparent={false} isScrolled={false}>
                    <div
                      className="relative lg:inline-block lg:mt-0"
                      onMouseEnter={handleToggleEnter}
                    >
                      <button
                        className="text-black flex items-center gap-1 hover:text-chaseBlue lg:mr-4"
                        onClick={handleMenuToggle}
                      >
                        Features <Icon icon="mdi:chevron-down" />
                      </button>
                      {isMenuOpen && (
                        <div
                          className="w-full absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 lg:block"
                          onMouseLeave={handleDropdownLeave}
                        >
                          <Link
                            to="#"
                            className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                          >
                            Feature 1
                          </Link>
                          <Link
                            to="#"
                            className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                          >
                            Feature 2
                          </Link>
                          <Link
                            to="#"
                            className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                          >
                            Feature 3
                          </Link>
                          <Link
                            to="#"
                            className="block px-0 py-2 text-gray-800 hover:bg-chaseBlue hover:text-white"
                          >
                            Feature 4
                          </Link>
                        </div>
                      )}
                    </div>
                  </CustomLink> */}
                  <CustomLink
                    path="/about"
                    transparent={false}
                    isScrolled={false}
                  >
                    About us
                  </CustomLink>
                  <CustomLink path="/privacy-poilcy" transparent={false} isScrolled={false}>
                    Policy
                  </CustomLink>
                  <CustomLink path="/terms" transparent={false} isScrolled={false}>
                    Terms & Condition
                  </CustomLink>
                  <CustomLink
                    path="/contact"
                    transparent={false}
                    isScrolled={false}
                  >
                    Contact us
                  </CustomLink>
                </ul>
                <div className="mt-auto flex gap-4">
                  <ButtonGroup white ctaText="Login" />
                  <ButtonGroup blue ctaText="Get Started" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
