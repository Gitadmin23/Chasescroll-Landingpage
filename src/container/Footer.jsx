import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleToggleEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavLinkClassName = (path, transparent, isScrolled) => {
    let className = "";

    if (isActive(path)) {
      className += "w-auto text-chase-blue";
      if (transparent && !isScrolled) {
        className += " text-white";
      }
    } else {
      className += "text-white hover:text-chase-blue";
      if (transparent && !isScrolled) {
        className += " text-white";
      }
    }

    return className;
  };

  const CustomLink = ({ path, transparent, isScrolled, children }) => {
    const className = getNavLinkClassName(path, transparent, isScrolled);

    return (
      <NavLink to={path} className={className} activeClassName="text-red-500">
        {children}
      </NavLink>
    );
  };

  return (
    <div className="bg-black pt-20 pb-6 text-white flex flex-col items-center w-full justify-center">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-4 gap-y-14 items-center lg:justify-between">
        <div className="flex flex-col lg:justify-evenly gap-8 w-full max-w-[534px]">
          <div className="flex flex-row gap-1 self-center lg:self-start w-fit items-center">
            <img className="max-w-[60px] w-full" src={logo} alt="logo" />
            <p className="text-5xl font-bold w-full">Chasescroll</p>
          </div>

          <div className="flex justify-between w-full">
            <CustomLink path="/" transparent={false} isScrolled={false}>
              Home
            </CustomLink>
            <div
              className="relative lg:inline-block lg:mt-0"
              onMouseEnter={handleToggleEnter}
            >
              <button
                className="flex items-center gap-1 hover:text-chase-blue lg:mr-4"
                onClick={handleMenuToggle}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Features <Icon icon="mdi:chevron-down" />
              </button>
              {isDropdownOpen && (
                <div
                  className="w-full absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg py-2 lg:block"
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to="#"
                    className="block px-0 py-2 hover:bg-chase-blue hover:text-chaseBlue"
                  >
                    Feature 1
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 hover:bg-chase-blue hover:text-chaseBlue"
                  >
                    Feature 2
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 hover:bg-chase-blue hover:text-chaseBlue"
                  >
                    Feature 3
                  </Link>
                  <Link
                    to="#"
                    className="block px-0 py-2 hover:bg-chase-blue hover:text-chaseBlue"
                  >
                    Feature 4
                  </Link>
                </div>
              )}
            </div>
            <CustomLink path="/about" transparent={false} isScrolled={false}>
              About us
            </CustomLink>
            <CustomLink path="#" transparent={false} isScrolled={false}>
              Policy
            </CustomLink>
            <CustomLink path="/contact" transparent={false} isScrolled={false}>
              Contact us
            </CustomLink>
          </div>
        </div>
        <div className="text-center lg:text-left max-w-[557px] w-full flex flex-col gap-[18px]">
          <h3 className="text-[32px] font-medium">
            Subscribe to Chasescroll Newsletter
          </h3>
          <p className="text-base font-medium">
            Subscribe to stay lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
          <form
            className="flex flex-row gap-2 justify-center lg:justify-start"
            action=""
          >
            <input
              className="py-[10px] px-[14px] rounded-lg max-w-[352px] w-full"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
            />
            <button
              className="w-[115px] rounded-lg flex justify-center items-center bg-chase-blue"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="w-full mt-14 mb-8 border-b-1 border-white" />
      <div className="max-w-[1200px] w-full">
        <div className="flex gap-[35px] justify-center lg:justify-end">
          <a target="_blank" href="https://twitter.com/chasescroll">
            <Icon className="text-[35px]" icon="mdi:twitter" color="white" />
          </a>
          <a target="_blank" href=" https://www.facebook.com/chase.scroll/ ">
            <Icon
              className="text-[35px]"
              icon="ic:baseline-facebook"
              color="white"
            />
          </a>
          <Icon className="text-[35px]" icon="mdi:linkedin" color="white" />
          <a target="_blank" href="  https://www.instagram.com/chasescroll_/  ">
            <Icon
              className="text-[35px]"
              icon="ri:instagram-fill"
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
