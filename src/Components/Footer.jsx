import React from "react";
import logo from "../Assets/BlanxerLogo.svg";
import {
  FaTiktok,
  FaFacebookSquare,
  FaInstagram,
  FaYoutubeSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#303030] text-white max-w-[1240px] mx-auto py-10 mb-6 rounded-[20px]">
      <div className="grid md:grid-cols-2 mx-4 md:gap-4 gap-10">
        <div className=" grid grid-cols-2  ">
          <div className="px-12 ">
            <img src={logo} alt="/" className="w-[100px] min-w-[70px]" />
            <p className="text-xs py-4">
              Launch your e-commerce business in minutes
            </p>
            <div className="flex gap-4    py-2 ">
              <FaTiktok size={25} className="min-w-[14px]" />
              <FaFacebookSquare size={25} className="min-w-[14px]" />
              <FaInstagram size={25} className="min-w-[14px]" />
              <FaYoutubeSquare size={25} className="min-w-[14px]" />
            </div>
            <p className="pointer text-xs  py-2 ">hello@blanxer.com</p>
          </div>
          <div className="font-bold ml-16">
            <h3 className="">Blanxer</h3>
            <ul className="text-xs ">
              <li className="py-1 pt-2">Start For Free</li>
              <li className="py-1">Login</li>
              <li className="py-1">Pricings</li>
              <li className="py-1">FAQ's</li>
            </ul>
          </div>
        </div>

        <div className=" grid grid-cols-2 ">
          <div className="font-bold md:ml-16 ml-12">
            <h3 className="">Support</h3>
            <ul className="text-xs ">
              <li className="py-1 pt-2">Customer Service</li>
              <li className="py-1">+977 9802344850</li>
              <li className="py-1">Contact Us</li>
              <li className="py-1 text-red-600">Report a Bug</li>
            </ul>
          </div>
          <div className="font-bold ml-16">
            <h3 className="">Legal</h3>
            <ul className="text-xs ">
              <li className="py-1 pt-2">Terms ofService</li>
              <li className="py-1">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center py-6">© 2023 Blanxer</h1>
    </div>
  );
}
export default Footer;
