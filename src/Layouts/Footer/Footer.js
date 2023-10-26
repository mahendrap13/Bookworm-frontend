import { InputBase } from "@mui/material";
import React from "react";
import logosvg from "../../Images/svgexport-1.svg";
import card from "../../Images/credit-cards.png";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterest } from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <div className="footer border-t pt-24">
        <div className="footer-up flex justify-center items-cnter px-5">
          <div className="text-center">
            <p className="text-[1.875rem] font-medium mb-2">
              Join Our Newsletter
            </p>
            <p className="mb-6 text-[#7c6e65] text-lg	">
              Signup to be the first to hear about exclusive deals, special
              offers and upcoming collections
            </p>
            <div className="ser-newsletter md:flex md:justify-center md:flex-row md:gap-4 flex flex-col gap-3">
              <div className="flex flex-col  text-start">
                <InputBase
                  sx={{
                    flex: 1,
                    fontSize: "15px",
                    border: "1px solid",
                    height: "3.75rem",
                    padding: "0.844rem 2rem",
                    borderColor: " #161619",
                  }}
                  className="md:w-[470px] w-full"
                  placeholder="Enter email for weekly newsletter."
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </div>
              <button className="bg-[black]  md:w-[200px] text-[white] text-[2xl] md:py-[17px] py-4 px-8 md:px-12 focus:outline-none focus:ring focus:ring-zinc-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-mid md:py-24 py-10 md:px-32 px-5">
          <div className="md:flex justify-between">
            <div className="md:w-1/4 w-full">
              <Link>
                <img className="mb-8" src={logosvg} alt="" />
              </Link>
              <p className="mb-6">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <div className="flex flex-col">
                <Link className="text-[#19110b]  ease-in-out duration-300 hover:text-[#F75454]">
                  sale@bookworm.com
                </Link>
                <Link className="text-[#19110b]   ease-in-out duration-300 hover:text-[#F75454]">
                  +1 246-345-0695
                </Link>
              </div>
              <ul className="flex gap-8 mt-10 ">
                <li>
                  <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                    <AiOutlineInstagram className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                    <BiLogoFacebook className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                    <AiFillYoutube className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                    <AiOutlineTwitter className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                    <BiLogoPinterest className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg	font-medium md:mb-8 md:mt-0 mt-5">Explore</p>
              <ul className="flex flex-col">
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  About us
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Sitemap
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Bookmarks
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Sign in/Join
                </Link>
              </ul>
            </div>
            <div>
              <p className="text-lg	font-medium md:mb-8 md:mt-0 mt-5">
                Customer Service
              </p>
              <ul className="flex flex-col">
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Help Center
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Returns
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Product Recalls
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Accessibility
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Contact Us
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Store Pickup
                </Link>
              </ul>
            </div>
            <div>
              <p className="text-lg	font-medium md:mb-8 md:mt-0 mt-5">Policy</p>
              <ul className="flex flex-col">
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Return Policy
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Terms Of Use
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Security
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Privacy
                </Link>
              </ul>
            </div>
            <div>
              <p className="text-lg	font-medium md:mb-8  md:mt-0 mt-5">
                Categories
              </p>
              <ul className="flex flex-col">
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Action
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Comedy
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Drama{" "}
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Harror
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Kids
                </Link>
                <Link className="text-[#6e6e6e] py-2  ease-in-out duration-300 hover:text-[#F75454] hover:translate-x-4">
                  Romantic Comedy
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-down md:px-32 px-5 py-9 md:flex border-t justify-between items-center">
          <div className="left-f md:m-0 text-center md:text-normal text-sm mb-3">
            <p>©2023 Book Worm. All rights reserved</p>
          </div>
          <div className="right-f">
            <img className="m-auto" src={card} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
