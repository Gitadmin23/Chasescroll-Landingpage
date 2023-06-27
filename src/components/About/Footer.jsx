import React, { useEffect } from "react";
import { ABOUT_FOOTER } from "../../constants";
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
    <div className=" mt-24 mb-20 flex flex-col gap-14 ">
      <div className=" flex flex-col gap-10 items-center max-w-[811px] justify-center w-full self-center text-center  ">
        <h2 className=" text-4xl font-bold ">Our Team</h2>
        <p className=" text-[22px]  ">
          The <strong> ChaseScroll </strong> team is a passionate group of
          professionals committed to revolutionising event and group management.
        </p>
      </div>
      <div className=" flex flex-row flex-wrap gap-8 max-w-[1200px] justify-center ">
        {ABOUT_FOOTER.map((item, index) => (
          <div className="rounded-xl max-w-[348px] w-full relative">
            <img
              data-aos="fade-up"
              src={item.img}
              alt="Image"
              className="w-full h-auto"
            />
            <div
              data-aos="fade-up"
              className="about-card  absolute w-[249px] h-[79px] rounded-2xl flex flex-col items-center justify-center mx-auto bottom-6 right-0 left-0 bg-white p-2"
            >
              <p className=" text-lg font-bold ">{item.text} </p>
              <p className="text-base font-bold text-[#F60B0B] ">
                {item.text1}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
