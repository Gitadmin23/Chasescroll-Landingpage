import React, { useEffect } from "react";
import googlePlay from "../../assets/icons/google-play.svg";
import appleStore from "../../assets/icons/app-store.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({data}) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: true, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {data.map((item, index) => {
        const words = item.title.split(" ");

        return (
          <div className=" flex flex-col lg:flex-row justify-between gap-y-4 items-center lg:items-start w-full">
            <div className="w-full max-w-[648px] flex flex-col gap-9 text-center lg:text-left items-center lg:items-start ">
              <h1 className=" text-[54px] font-bold leading-[126.7%] ">
                {words.map((word, wordIndex) => (
                  <span key={wordIndex}>
                    {wordIndex === words.length - item.position ? (
                      <span className="text-chaseBlue">{word}</span>
                    ) : (
                      <>{word} </>
                    )}{" "}
                  </span>
                ))}
              </h1>
              <p className=" max-w-[478px] w-full text-lg leading-[145.7%] ">
                {item.text}
              </p>
              <div className=" flex gap-[29px] ">
                {/* <Button1 img={googlePlay} text1="GET IT ON" text2="Google Play" />
          <Button1 img={appleStore} text1="Download on the" text2="App Store" /> */}
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.chasescroll_android_app&hl=en&gl=US">
                  <img src={googlePlay} alt="googlePlay" />
                </a>
                <a target="_blank" href="https://apps.apple.com/us/app/chasescroll/id1619999225">
                  <img src={appleStore} alt="appleStore" />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" className="w-full max-w-[500px] flex ">
              <img src={item.img} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Header;
