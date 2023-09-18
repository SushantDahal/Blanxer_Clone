import React from "react";
import redEmoji from "../Assets/emoji.svg";
import greenEmoji from "../Assets/emoji2.svg";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function WhyBlanxer() {
  return (
    <div className="py-10 bg-[#fff] text-black mx-auto max-w-[1240px]">
      <h1 className="text-center text-3xl font-bold lg:text-5xl md:text-4xl py-20 ">
        Why should you use Blanxer for your <br /> e-commerce business?
      </h1>
      <div className="grid md:grid-cols-2 font-sans gap-6 md:gap-0">
        <div className="bg-[#FFF6F6] mx-4 rounded-[15px] px-2">
          <img src={redEmoji} alt="/" className="mb-3 py-2" />
          <h2 className="font-bold">Without Blanxer.com,</h2>
          <ul className="text-[19px]">
            <li className="flex items-center pt-6 pb-2">
              <AiOutlineClose className="mr-2 text-red-800" />
              Your business doesn’t have a website
            </li>
            <li className="flex items-center py-2">
              <AiOutlineClose className="mr-2 text-red-800" />
              You use excel or google sheet for order management
            </li>
            <li className="flex items-center py-2">
              <AiOutlineClose className="mr-2 text-red-800" />
              You’ll have to ask for payment to every customer manually
            </li>
            <li className="flex items-center py-2">
              <AiOutlineClose className="mr-2 text-red-800" />
              You don’t have Real time sales and revenue insights
            </li>
            <li className="flex items-center py-2">
              <AiOutlineClose className="mr-2 text-red-800" />
              Your customer won’t be able to track their orders
            </li>
          </ul>
        </div>
        <div className="bg-[#F4FFF4] mx-4 px-2  rounded-[15px]">
          <img src={greenEmoji} alt="/" className="mb-3 py-2" />
          <h2 className="font-bold">With Blanxer.com,</h2>
          <ul className="text-[19px]">
            <li className="flex items-center pt-6 pb-2">
              <AiOutlineCheck className="mr-2 text-green-600" />
              You can Build a Fully Functional e-commerce Website
            </li>
            <li className="flex items-center py-2">
              <AiOutlineCheck className="mr-2 text-green-600" />
              Proper Order Management with SMS Order Confirmation & Tracking
            </li>
            <li className="flex items-center py-2">
              <AiOutlineCheck className="mr-2 text-green-600" />
              You can receive Online Payments from your Website
            </li>
            <li className="flex items-center py-2">
              <AiOutlineCheck className="mr-2 text-green-600" />
              You can track Real time sales and revenue insights
            </li>
            <li className="flex items-center py-2">
              <AiOutlineCheck className="mr-2 text-green-600" />
              Your customer will be able to track their orders
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default WhyBlanxer;
