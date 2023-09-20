import React from "react";
import Equiper from "../Assets/Equiper.png";
import Ineco from "../Assets/Ineco.png";
import Noura from "../Assets/Noura.png";

function Examples() {
  return (
    <div className=" max-w-[1240px] mx-auto ">
      <h1 id="ex" className="md:text-4xl text-[25px] text-center py-2 px-2">
        Some of the Coolest Websites
        <br /> built with Blanxer
      </h1>
      <p className="text-[#913FFF] text-center px-4 md:text-[16px] text-[14px] py-2 ">
        Design a cool website and tag us on socials to get featured here!
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4  md:py-8">
        <div className="p-4">
          <img src={Equiper} alt="/" />
        </div>
        <div className="p-4">
          <img src={Ineco} alt="/" />
        </div>
        <div className="p-4">
          <img src={Noura} alt="/" />
        </div>
      </div>
    </div>
  );
}
export default Examples;
