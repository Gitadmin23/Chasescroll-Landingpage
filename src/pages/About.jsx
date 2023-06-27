import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import { ABOUT_HEADER } from "../constants";
import Main from "../components/About/Main";
import Footer from "../components/About/Footer";
import FAQ from "../components/FAQ";
import Template1 from "../components/Template1";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-[180px] lg:mt-[132px] max-w-[1200px] w-full mx-auto flex flex-col gap-8">
      <Header data={ABOUT_HEADER} />
      <Main />
      <Footer />
      <Template1 containerClassName="mb-20" />
    </div>
  );
};

export default About;
