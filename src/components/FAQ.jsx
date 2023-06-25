import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { FAQDATA } from "../constants";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-8 my-32 text-black w-full max-w-[783px] mx-auto">
          <h3 className="font-bold  text-2xl md:text-4xl text-center tracking-[0.25px]">
            Frequently Asked <span className="text-chaseBlue">Questions</span>{" "}
          </h3>
          <div className="flex flex-col gap-10">
            {FAQDATA.map((data, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div
                    className={`  ${open && "pb-2"} ${index === 0 && ""} ${
                      index === FAQDATA.length - 1 && ""
                    }`}
                  >
                    <Disclosure.Button className="flex items-center justify-between w-full px-2 text-base sm:text-lg font-medium text-left  ">
                      <span className="flex-1 font-medium text-2xl ">
                        {data.title}
                      </span>
                      <span className="bg-bienSecondary   flex justify-center items-center">
                        {open ? (
                          <Icon icon="formkit:arrowup" className="w-6 h-6" color="#3c41f0" />
                        ) : (
                          <Icon icon="formkit:arrowdown" className="w-6 h-6" color="#3c41f0" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pl-6 sm:pl-10 pr-14 sm:pr-16 py-6 text-[12px] md:text-sm">
                      {data.desc}
                    </Disclosure.Panel>
                    <hr className="w-full my-1 border-b-1  border-black" />
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
