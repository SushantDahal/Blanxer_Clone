import React from "react";
import response from "../Assets/Response.webp";
import responseTime from "../Assets/ResponseTimeIcon.svg";

function Response() {
  return (
    <div className=" h-full max-w-[1240px] mx-auto py-20 ">
      <h1 className="text-center text-3xl font-bold lg:text-5xl md:text-4xl px-6 pb-20 pt-6">
        We have Everything you need!
      </h1>
      <div className="grid md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={responseTime} className="pr-5" alt="/" />
            Super Fast Response Time
          </p>
          <h1 className="md:text-2xl mt-4 md:pr-6 p-0">
            Blanxer is all about speed and performance.
          </h1>
          <p className=" text-[13px] md:text-[18px] w-[100%]  md:pr-6 p-0 my-3 text-gray-700 font-mono mr-7">
            Seeing your website performance will make your jaw drop and your
            eyes pop! 🚀
          </p>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={response} alt="/" className="" />
        </div>
      </div>
    </div>
  );
}
export default Response;
