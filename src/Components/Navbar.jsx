import React, { useState } from "react";
import Logo from "../Assets/BlanxerLogo.svg";
import { Link } from "react-scroll";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineGateway,
} from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);

  const Handle_Nav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px]  mx-auto  text-white px-6 cursor-pointer  pt-2">
      <div className=" bg-[#303030] rounded-full max-w-[1100px] mx-auto h-[90px] flex items-center justify-between ">
        <div id="navbar" className="flex">
          <img className="w-[110px]   mx-6  " src={Logo} alt="/" />
          <ul className="flex mx-4 items-center  ">
            <li className="px-4">
              <Link
                to="Response"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Why Blanxer?
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="Response"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="Faq"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                FAQ's
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="Pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mr-8 hidden md:block">
          <button className=" bg-transparent my-2 rounded-full border border-white w-[80px] py-3 mx-4">
            <a href="https://app.blanxer.com/login"> Login</a>
          </button>
          <button className="rounded-full border border-blue-200 py-3 text-black w-[160px] bg-[#FFA4F2]">
            <a href="https://www.blanxer.com/register"> Get Started</a>
          </button>
        </div>
        <div onClick={Handle_Nav} className="block md:hidden mr-8  ">
          {nav ? <AiOutlineClose size={"30"} /> : <AiOutlineMenu size={"30"} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "bg-white absolute right-0 text-black mt-3 w-[180px] float-right mr-12 ease-in duration-300  items-center h-[250px]"
            : "fixed top-[100%] "
        }
      >
        <ul className=" mx-4  ">
          <li className="py-2 flex items-center">
            <AiOutlineLogin className="mr-4" />
            <a href="https://app.blanxer.com/login"> Login</a>
          </li>
          <li className="py-2  flex items-center">
            <AiOutlineGateway className="mr-4" />
            <a href="https://www.blanxer.com/register"> Get Started</a>
          </li>
          <li className="py-2">
            <Link
              to="Response"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Why Blanxer?
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="Response"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Features
            </Link>
          </li>
          <li className="py-2">
            <Link to="Faq" spy={true} smooth={true} offset={50} duration={500}>
              FAQ's
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="Pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
