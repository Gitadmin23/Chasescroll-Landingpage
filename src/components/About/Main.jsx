import React, { useEffect } from "react";
import { ABOUT_MAIN } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: true, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <div className="mt-32 flex flex-col gap-y-[100px] lg:gap-y-[180px]">
      {ABOUT_MAIN.map((item, index) => (
        <div
          className={`justify-between text-center lg:text-left flex gap-6 items-center h-full first-letter
        ${
          index % 2 === 1
            ? "flex-col lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        } `}
          key={index}
        >
          <div className="flex flex-col gap-4 justify-center max-w-[506px] w-full  ">
            <h5 className=" text-2xl  ">{item.tag}</h5>
            <h3 className="text-4xl text-chaseBlue font-bold">{item.title}</h3>
            <p className="text-22px">{item.text}</p>
          </div>
          <div className="flex max-w-[613px] h-full  ">
            <img
              data-aos="fade-up"
              className=" w-full object-contain "
              src={item.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
