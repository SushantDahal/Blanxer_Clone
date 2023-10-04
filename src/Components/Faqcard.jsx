import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

function Faqcard(props) {
  const [drop, setDrop] = useState(false);
  function handleDrop() {
    setDrop(!drop);
  }
  return (
    <div
      className="bg-white mx-4 py-3 px-4 rounded-md my-4 "
      onClick={handleDrop}
      id="Faq"
    >
      <h2 className="flex justify-between items-center mx-2">
        {props.topic}
        <AiOutlineArrowDown className="ml-4 min-w-[40px]" />
      </h2>
      <p
        className={
          !drop ? "h-1 overflow-hidden " : " h-18 duration-200 font-sans   pt-2"
        }
      >
        {props.description}
      </p>
    </div>
  );
}
export default Faqcard;
