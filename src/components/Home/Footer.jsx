import React, { useEffect } from "react";
import img1 from "../../assets/home-footer-img2.png";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Template1 from "../Template1";

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
        <Template1 containerClassName="footer-card-shadow" />
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
