import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";
import FAQ from "../components/FAQ";
import { HOME_HEADER } from "../constants";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-[180px] lg:mt-[132px] max-w-[1200px] w-full mx-auto flex flex-col gap-8">
      <Header data={HOME_HEADER} />
      <Main />
      <Footer />
      <FAQ />
    </div>
  );
};

export default Home;
