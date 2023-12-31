import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import ButtonGroup from "../components/Navbar/ButtonGroup";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <div className=" sticky z-50 top-0 w-full mx-auto max-w-[1440px] bg-white border-b-2">
      <div className="px-4 xl:px-0 max-w-[1200px] w-full mx-auto py-5 flex gap-8 justify-between items-center">
        <div role="button" onClick={() => navigate("/")} className="flex flex-row gap-1 max-w-[197px] w-full items-center">
          <img className="max-w-[60px] w-full" src={logo} alt="logo" />
          <p className="text-2xl font-normal w-full">Chasescroll</p>
        </div>

        <div className="hidden lg:flex justify-between max-w-[534px] w-full">
          <CustomLink path="/" transparent={false} isScrolled={false}>
            Home
          </CustomLink>
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
          <ButtonGroup white ctaText="Login" url={"https://app.chasescroll.com/auth"} />
          <ButtonGroup blue ctaText="Get Started" url={"https://app.chasescroll.com/auth/signup"} />
        </div>
        {/* Hamburger Menu */}
        <div className="flex lg:hidden">
          <div className="lg:hidden flex items-center">
            <button
              onClick={onOpen}
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
          <Drawer
            isOpen={isOpen}
            placement='right'
            size={"sm"}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent bg={"white"} >
              <DrawerCloseButton />

              <DrawerBody >
                <ul className="mt-20 flex flex-col items-center justify-start w-full gap-8 text-lg">

                  <div role="button"
                    onClick={onClose}>

                    <CustomLink path="/" transparent={false} isScrolled={false}>
                      Home
                    </CustomLink>
                  </div>
                  <div role="button"
                    onClick={onClose}>

                    <CustomLink
                      path="/about"
                      transparent={false}
                      isScrolled={false}
                    >
                      About us
                    </CustomLink>
                  </div>
                  <div role="button"
                    onClick={onClose}> 
                  <CustomLink path="/privacy-poilcy"
                    onClick={onClose} transparent={false} isScrolled={false}>
                    Policy
                  </CustomLink>
                  </div>
                  <div role="button"
                    onClick={onClose}>
                  <CustomLink path="/terms"
                    onClick={onClose} transparent={false} isScrolled={false}>
                    Terms & Condition
                  </CustomLink>
                  </div>
                  <div role="button"
                    onClick={onClose}>
                  <CustomLink
                    path="/contact"
                    onClick={onClose}
                    transparent={false}
                    isScrolled={false}
                  >
                    Contact us
                  </CustomLink>
                  </div>
                </ul>
              </DrawerBody>

              <DrawerFooter gap={"5"} >
                <ButtonGroup white
                  onClick={onClose} ctaText="Login" url={"https://app.chasescroll.com/auth"} />
                <ButtonGroup blue
                  onClick={onClose} ctaText="Get Started" url={"https://app.chasescroll.com/auth/signup"} />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
