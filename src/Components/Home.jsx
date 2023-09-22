import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Btn from "../Assets/BtnImg.svg";

function Home() {
  return (
    <div className="text-black h-full max-w-[1240px] mx-auto my-2 cursor-wait ">
      <div className="text-center mx-6  py-5">
        <div className="mb-6">
          <h1 className="text-[36px] md:text-5xl font-semibold lg:text-6xl  ">
            The Platform To
          </h1>
          {/* <div className=" overflow-hidden h-[62px]">
            <span className="text-[#4DAF00]">Start🔥</span>
            <br />
            <span className="text-[#0091BF]">Manage⚡️</span>
            <br />
            <span className="text-[#FF8515]">Scale🚀</span>
            <br />
            <span className="text-[#C03AFF]">Automate🤩</span>
          </div> */}
          <h1 className=" text-center text-[#0091BF] md:my-4 my-0 text-[36px] md:text-5xl font-bold lg:text-6xl  ">
            <Typewriter
              words={["Start🔥", "Manage⚡️", "Scale🚀", "Automate🤩"]}
              loop={""}
              cursor
              cursorStyle=">"
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h1>
          <h1 className="text-[36px] md:text-5xl font-bold lg:text-6xl  ">
            {" "}
            your Online Business
          </h1>
          <p className="text-[15px] md:text-xl mt-2 md:mt-5">
            Blanxer is the platform to run a successful online business in
            Nepal.
          </p>
        </div>
        <div className="md:flex flex-1 justify-center font-extrabold  text-[18px] gap-6  mx-5 p-2">
          <button className="md:w-[180px] w-full md:py-4 py-3 rounded-full my-4 md:m-0 bg-[#FFA4F2] ">
            Start For Free
          </button>
          <button className="md:w-[230px] w-full md:py-4 py-3 text-gray-700 bg-white border border-[#8830f7] rounded-full flex justify-center items-center">
            <img src={Btn} alt="/" className="mx-4" /> Watch a video
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
