import React from "react";

import Faqcard from "./Faqcard";
import faq from "../faq";

function Faq() {
  return (
    <div className="max-w-[1240px] mx-auto" id="Faq">
      <div className="text-center">
        <h1 className="text-2xl font-bold py-2">FAQs</h1>
        <p className="text-[14px] mx-10">
          Hi, if you have any questions not answered in the FAQ, please email us
          at
        </p>
        <h3 className="text-[#237BFF] text-[12px] py-1">contact@blanxer.com</h3>
      </div>
      <div className=" max-w-[900px] mx-auto py-10 rounded-md cursor-pointer ">
        {faq.map((faqCard) => {
          return (
            <Faqcard
              key={faqCard.id}
              topic={faqCard.topic}
              description={faqCard.description}
            />
          );
        })}
        <div className="text-center">
          <button className="w-[140px] text-white font-bold bg-[#8830F7] py-4 rounded-full my-4 ">
            Show More
          </button>
        </div>
        <div className="py-10 text-center">
          <h1 className="md:text-4xl text-xl md:px-20 px-8 font-extralight py-10">
            We’re not just a e-commerce platform, we are your growth partner.
          </h1>
          <button className="bg-[#FFA4F2] w-[140px] py-4 font-bold rounded-full">
            Start For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
