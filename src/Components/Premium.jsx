import React from "react";

function Premium() {
  return (
    <div className="bg-red-500 pb-10 py-4 max-w-[1240px] mx-auto">
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
        className="flex justify-center gap-4 items-center py-2 pb-6 bg-gray-600 mx-2 col-span-3 "
      >
        <div className="bg-white ">
          <h1 className="md:text-2xl text-xl font-bold pb-1">Quaterly</h1>
          <p className="text-[12px] md:text-xl">(3 months)</p>
        </div>
        <div className="bg-[#868e96] p-2 rounded-full w-[80px]">
          <div className="bg-white w-6 h-6 rounded-[100%]"></div>
        </div>
        <div className="md:flex grid  items-center">
          <div className="bg-white md:mr-2 m-0  ">
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
      <div className="grid md:grid-cols-3 gap-2 mx-4 p-2"></div>
    </div>
  );
}
export default Premium;
