import React from "react";
import response from "../Assets/Response.webp";
import responseTime from "../Assets/ResponseTimeIcon.svg";
import Plug from "../Assets/plug.svg";
import webCustomization from "../Assets/WebsiteCustomization.webp";
import Payment from "../Assets/Payment.webp";
import Sales from "../Assets/Sales.webp";

function Response() {
  return (
    <div className=" h-full max-w-[1240px] mx-auto py-20 ">
      <h1 className="text-center text-3xl font-bold lg:text-5xl md:text-4xl px-6 pb-20 pt-6">
        We have Everything you need!
      </h1>
      <div className="grid md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={responseTime} className="pr-3" alt="/" />
            Super Fast Response Time
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Blanxer is all about speed and performance.
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Seeing your website performance will make your jaw drop and your
            eyes pop! 🚀
          </h3>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={response} alt="/" className="" />
        </div>
      </div>

      {/* Website Costomization */}

      <div className="md:grid md:grid-cols-2 md:mx-4 hidden p-2 m-0 text-center md:text-start py-20  gap-4">
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={webCustomization} alt="/" className="" />
        </div>
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Website Customization
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Customize your website how ever you want.
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Impress us with your web design skills and make us shine brighter
            than a brand new pair of shoes! 🥹
          </h3>
        </div>
      </div>

      <div className="grid md:hidden md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start pb-20  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Website Customization
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Customize your website how ever you want.
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Impress us with your web design skills and make us shine brighter
            than a brand new pair of shoes! 🥹
          </h3>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={webCustomization} alt="/" className="" />
        </div>
      </div>

      {/* Online Payment */}
      <div className="grid md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start py-10  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Online Payment
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Online Payment Gateway Integration
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Integrate your own payment gateways and receive payment directly
            through your website.
          </h3>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={Payment} alt="/" className="" />
        </div>
      </div>
      {/* Sales And Anaalytics */}
      <div className="md:grid md:grid-cols-2 md:mx-4 hidden p-2 m-0 text-center md:text-start py-20  gap-4">
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={Sales} alt="/" className="" />
        </div>
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Sales & Analytics
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Receive Orders directly from your website!
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Promote your website, Educate your customers. Trust me! Your
            Customers are smarter than you think!
          </h3>
        </div>
      </div>

      <div className="grid md:hidden md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start pb-20  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-xl text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Sales & Analytics
          </p>
          <h1 className="md:text-[22px] mt-4 md:pr-10 p-0">
            Receive Orders directly from your website!
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-3 text-gray-700  mr-7">
            Promote your website, Educate your customers. Trust me! Your
            Customers are smarter than you think!
          </h3>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={Sales} alt="/" className="" />
        </div>
      </div>
      {/* Domain Name */}
      <div className="grid md:grid-cols-2 md:mx-4 p-2 m-0 text-center md:text-start py-10  gap-4">
        <div className=" rounded-[15px] px-4 mr-10 ">
          <p className="flex md:mt-20 mt-6 md:text-[20px] text-[15px] text-[#913FFF] md:justify-normal justify-center">
            <img src={Plug} className="pr-3" alt="/" />
            Domain Name
          </p>
          <h1 className="md:text-[22px] mt-3 md:pr-10 p-0">
            Connect your Own Domain!
          </h1>
          <h3 className=" text-[12px] md:text-[16px] w-[100%]  md:pr-[65px] p-0 my-2 text-gray-700  mr-7">
            Your website is like a house, and your domain is the address. If you
            didn’t get it.
          </h3>
          <p className="font-bold text-[16px] py-2">
            Go do Some <span className="text-[#913FFF] mx-4">Research</span>
          </p>
        </div>
        <div className="bg-[#f8f3f3] rounded-[50px] ">
          <img src={Payment} alt="/" className="" />
        </div>
      </div>
    </div>
  );
}
export default Response;
