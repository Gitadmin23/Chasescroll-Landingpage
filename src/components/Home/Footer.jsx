import React, { useEffect } from "react";
import googlePlay from "../../assets/icons/google-play.svg";
import appleStore from "../../assets/icons/app-store.svg";
import img from "../../assets/home-footer-img1.png";
import img1 from "../../assets/home-footer-img2.png";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: true, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" flex flex-col gap-28 mt-28 ">
      <div className=" footer-card-shadow rounded-[32px]   py-8 lg:pb-0 pl-[60px] justify-center flex items-center w-full">
        <div className="w-full max-w-[566px] flex flex-col gap-5 text-center lg:text-left items-center lg:items-start ">
          <h1 className=" text-[36px] font-bold leading-[126.7%] ">
            <span className=" text-chaseBlue ">Chasescroll </span>
            Available for mobile and Desktop
          </h1>
          <p className=" max-w-[400px] font-medium w-full text-lg leading-[145.7%] ">
            Chasescroll Mobile available on all Mobile Stores and Desktop web
          </p>
          <div className=" flex gap-[29px] ">
            <a href="#">
              <img data-aos="fade-up" src={googlePlay} alt="googlePlay" />
            </a>
            <a href="#">
              <img data-aos="fade-up" src={appleStore} alt="appleStore" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex h-full w-full ">
          <img
            data-aos="fade-up"
            className="w-full object-contain"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-center items-center ">
        <div className="max-w-[745px] w-full flex flex-col gap-6 items-center ">
          <h3 className=" text-4xl font-bold ">
            Explore <span className=" text-chaseBlue ">Chasescroll</span>
          </h3>
          <p className=" text-3xl ">
            Meet the teams behind our products and explore our vision for the
            future.
          </p>
          <div className=" flex gap-1 items-center text-chaseBlue ">
            <p className=" text-xl font-medium "> Watch Video</p>
            <Icon icon="solar:play-line-duotone" color="#3c41f0" />
          </div>
        </div>
        <div>
          <video
            data-aos="fade-up"
            className="w-full  h-full  object-cover"
            src={img1}
            autoPlay
            loop
            muted
            playsInline // added attribute
            poster={img1} // added fallback image
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
