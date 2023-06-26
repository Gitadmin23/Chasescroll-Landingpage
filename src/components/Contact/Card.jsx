import React from "react";
import { CONTACT_CARDS } from "../../constants";

const Card = () => {
  return (
    <div className=" flex flex-wrap gap-28 justify-center ">
      {CONTACT_CARDS.map((item, index) => (
        <div className="flex flex-col items-center gap-5 text-center max-w-[284px] w-full ">
          <img src={item.icon} alt={item.text} />
          <p className=" text-xl font-semibold " >{item.title}</p>
          <h4 className="inter text-[#667085] " >{item.text}</h4>
          <p className=" max-w-[200px] inter text-base text-[#101828B2] " >{item.link}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
