import React from "react";

import Faqcard from "./Faqcard";
import faq from "../faq";

function Faq() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="text-center">
        <h1 className="text-xl font-bold py-2">FAQs</h1>
        <p className="text-[14px] mx-10">
          Hi, if you have any questions not answered in the FAQ, please email us
          at
        </p>
        <h3 className="text-[#237BFF] text-[12px] py-1">contact@blanxer.com</h3>
      </div>
      <div className=" max-w-[900px] mx-auto py-10 rounded-md ">
        {faq.map((faqCard) => {
          return (
            <Faqcard
              key={faqCard.id}
              topic={faqCard.topic}
              description={faqCard.description}
            />
          );
        })}

        {/* <div
          className="bg-white mx-4 py-3 px-4 rounded-md"
          onClick={handleDrop}
        >
          <h2 className="flex justify-between items-center">
            Can I upgrade my plan later on?
            <AiOutlineArrowDown className="ml-4" size={20} />
          </h2>
          <p
            className={
              !drop
                ? "h-1 overflow-hidden "
                : " h-18 duration-200 font-sans  pt-2"
            }
          >
            Yes, you can choose to upgrade your Blanxer plan by going to the
            Account details section in Blanxer. You can upgrade your existing
            plan to the Premium or Platinum for the desired duration. You can
            also reach out to us on support@blanxer.com if you need any help
            with this.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Faq;
