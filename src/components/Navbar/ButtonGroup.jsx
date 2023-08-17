import React from "react";

const ButtonGroup = ({ white, blue, ctaText, url }) => {
  const buttonClass = white
    ? "w-[147px] py-[14px] rounded-lg flex justify-center bg-white text-black border-[#D0D4EB] border-2"
    : blue
    ? "w-[147px] py-[14px] rounded-lg flex justify-center bg-chaseBlue text-white border-chaseBlue"
    : "";

  return (
    <div className="flex gap-4">
      <a className={buttonClass} href={url}>
        {ctaText}
      </a>
    </div>
  );
};

export default ButtonGroup;
