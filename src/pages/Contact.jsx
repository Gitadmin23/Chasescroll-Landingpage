import React from "react";
import Header from "../components/Contact/Header";
import Template1 from "../components/Template1";
import FAQ from "../components/FAQ";

const Contact = () => {
  return (
    <div className=" mt-[180px] lg:mt-[232px] max-w-[1200px] w-full mx-auto flex flex-col gap-8">
      <Header />
      <Template1 containerClassName="footer-card-shadow" />
      <FAQ />
    </div>
  );
};

export default Contact;
