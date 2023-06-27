import React, { useEffect } from "react";
import Header from "../components/Contact/Header";
import Template1 from "../components/Template1";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-[180px] lg:mt-[232px] mb-40 max-w-[1200px] w-full mx-auto flex flex-col gap-8">
      <Header />
      <Template1 containerClassName="footer-card-shadow" />
    </div>
  );
};

export default Contact;
