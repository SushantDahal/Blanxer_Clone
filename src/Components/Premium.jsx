import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Premium = () => {
  const [on, setOn] = useState(false);
  const [month, setMonth] = useState("1167");
  const [yearly, setYearly] = useState("3267");
  const [Quarterly, setPremiumQuarterly] = useState("3499 Quarterly Billing");
  const [platium, setPlatinumQuarterly] = useState("9800 Quarterly Billing");

  const handleSwitch = () => {
    setOn(!on);
    if (on) {
      setMonth("1167");
      setYearly("3267");
      setPremiumQuarterly("3499 Quarterly Billing");
      setPlatinumQuarterly("9800 Quarterly Billing");
    } else {
      setMonth("875");
      setYearly("2450");
      setPremiumQuarterly("10500 Yearly Billing");
      setPlatinumQuarterly("29400 Yearly Billing");
    }
  };
  return (
    <div className=" pb-10 py-4 max-w-[1240px] mx-auto" id="Pricing">
      <h1 className="text-center md:text-4xl text-[33px] px-4   font-bold">
        Premium plan for your business <br />
        starting as low as <span className="text-[#913FFF]">NPR 29/day</span>.
      </h1>
      <p className="text-center p-6 ">
        Save 25% on our yearly subscription as an early adopter with our
        discount offer
      </p>
      <div
        id="premium"
        className="flex justify-center gap-4 items-center py-2 pb-6  mx-2 col-span-3 "
      >
        <div className=" ">
          <h1 className="md:text-2xl text-xl font-bold pb-1">Quaterly</h1>
          <p className="text-[12px] md:text-xl">(3 months)</p>
        </div>
        <div
          onClick={handleSwitch}
          className={
            !on
              ? "bg-[#868e96] p-2 rounded-full w-[80px]"
              : "bg-[#913FFF] p-2 rounded-full w-[80px] "
          }
        >
          <div
            className={
              !on
                ? "bg-white w-6 h-6  rounded-[100%] duration-200"
                : "bg-white w-6 h-6 rounded-[100%] ml-10 duration-200 "
            }
          ></div>
        </div>
        <div className="md:flex grid  items-center">
          <div className=" md:mr-2 m-0  ">
            <h1 className="md:text-2xl text-xl font-bold pb-1"> Yearly</h1>
            <p className="text-[12px] md:text-xl">(12 months)</p>
          </div>
          <div className=" my-2">
            <button className="w-[110px] border text-center text-[#913FFF]  border-[#913FFF] px-4 py-2 rounded-full">
              25% OFF
            </button>
          </div>
        </div>
      </div>
      {/* Free */}
      <div className="grid md:grid-cols-3 gap-2 mx-4 p-2 my-5">
        <div className="bg-white rounded-[15px] mt-10  ">
          <div className="text-center">
            <h2 className="text-xl py-3 font-bold">Free</h2>
            <p className="text-[20px] pb-4  font-serif">For Learners</p>

            <h1 className="text-2xl md:text-3xl font-bold pb-8 ">NPR 0 /mo</h1>
            <button className=" mx-auto py-3 w-[140px] rounded-full mt-8 text-white bg-[#913FFF] ">
              Start for free
            </button>
          </div>
          <div>
            <ul className="mx-4 font-sans  text-[14px]">
              <li className="flex items-center pt-6 pb-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />
                Upto 15 products
              </li>
              <li className="flex items-center py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />
                Basic Analytics
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Plugins
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Order
                Management
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Inventory Management
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Basic
                Website Customization
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Default Blanxer Website Theme
              </li>
            </ul>
          </div>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-[15px]  border-[3px] border-[#913FFF] mt-10 md:m-0 ">
          <div className="text-center">
            <div className="h-10 bg-[#913FFF]  rounded-t-[10px]">
              <h1 className="text-center pt-2 text-white font-bold">
                Most Popular🔥
              </h1>
            </div>
            <h2 className="text-xl py-3 font-bold">Premium</h2>
            <p className="text-[20px] pb-4  font-serif">
              For Small Businesses and Influencers
            </p>
            <p className={!on ? "hidden" : "pb-4 line-through  text-gray-500"}>
              NPR 1167
            </p>

            <h1 className="text-2xl md:text-3xl font-bold  ">
              NPR {month} /mo
            </h1>
            <p className="mb-4 py-2  font-sans">Rs {Quarterly}</p>
            <button className=" mx-auto py-3 w-[140px] rounded-full  text-white bg-[#913FFF] ">
              Get Started
            </button>
          </div>
          <div>
            <ul className="mx-4 font-sans  text-[14px]">
              <li className="flex items-center pt-6 pb-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />
                Unlimited products
              </li>
              <li className="flex items-center py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Straff
                Store
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                custome Domain Integration
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Order
                SMS Plugin
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Online Payment Integration
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Basic
                Blanxer Pay
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Website SEO
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Customers Data Management
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Order
                Bulk Upload & Media Manager
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic All
                available Plugin Integrations{" "}
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Basic
                Custom Favicon Icon
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Customer Support
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Discounts Codes (Releasing soon)
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Advanced Analytics (Releasing soon)
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Custom Checkout Fields (Releasing soon)
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic
                Product Reviews and Ratings (Releasing soon)
              </li>
            </ul>
          </div>
        </div>
        {/* Platinum */}
        <div className="bg-white rounded-[15px] mt-10  border  ">
          <div className="text-center">
            <h2 className="text-xl py-3 font-bold">Platinum</h2>
            <p className="text-[20px] pb-4  font-serif">
              Big D2C Brands, and growing businesses
            </p>
            <p className={!on ? "hidden" : "pb-4 line-through text-gray-500"}>
              NPR 3267
            </p>

            <h1 className="text-2xl md:text-3xl font-bold ">
              NPR {yearly} /mo
            </h1>
            <p className="mb-3 py-2 font-sans">Rs {platium}</p>
            <button className=" mx-auto py-3 w-[140px] rounded-full text-white bg-[#913FFF] ">
              Get Started
            </button>
          </div>
          <div>
            <ul className="mx-4 font-sans text-[14px]">
              <li className="flex items-center pt-6 pb-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />
                Everything in Premium
              </li>
              <li className="flex items-center py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />
                10 Staff Store account
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic 1
                Dedicated Expert for Store Management
              </li>
              <li className="flex items-center  py-2">
                <AiOutlineCheck className="mr-2 text-[#913FFF] " />5 Basic Order
                99% website uptime guaranteed Customer Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Premium;
