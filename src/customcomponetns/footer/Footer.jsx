import React from "react";
import { Instagram, Facebook, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      <div className="h-auto md:h-80 w-full bg-blue-950 text-white flex flex-col items-center relative mt-40">
        <div className="w-[90%] h-auto md:h-44 bg-gray-100 absolute -top-36 md:-top-32 text-black flex flex-col lg:flex-row items-center justify-around">
          <p className="w-full md:w-1/2 text-center lg:w-2/5text-xl lg:text-2xl xl:text-3xl font-extralight p-4">
            Get Updates And Stay Connected -Subscribe To Our Newsletter
          </p>
          <form
            action=""
            className="w-4/5 flex flex-col md:flex-row items-center justify-center gap-5"
          >
            <input
              className="w-full md:w-96 p-2 border-2 border-gray-300 bg-gray-100"
              type="text"
              placeholder="Email"
            />
            <Button
              type="button"
              className="w-full md:w-2/5 bg-blue-950 capitalize text-base"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="w-4/5 h-5/6 flex flex-col md:flex-row items-center justify-around mb-5">
          <div className="w-28 h-28 md:w-36 md:h-36">
            <img
              className="w-full h-full object-cover"
              src="https://biz-excellence.net/wp-content/uploads/2024/08/Add-a-subheading-1.png"
              alt="logo"
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-5 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start justify-center gap-6 text-base">
              <h6 className="uppercase text-gray-400 font-semibold">
                Contact Information
              </h6>
              <ul className="flex text-center md:text-start flex-col gap-1">
                <li>Phone: +971 56 406 1611</li>
                <li>Mail: getintouch@biz-excellence.net</li>
                <li>Address: Dubai, UAE</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 text-base">
              <h6 className="uppercase text-gray-400 font-semibold">company</h6>
              <ul className="flex flex-col text-center md:text-start gap-1">
                <li>About</li>
                <li>Register</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center flex-col gap-5 md:gap-0 md:flex-row justify-between px-5">
          <span className="inline-block text-xs text-gray-500">
            &copy; 2024 All rights Reserved. Powered by{" "}
            <span className="text-white">Toshiba</span>
          </span>
          <ul className="flex items-center gap-5 text-gray-500">
            <li className="w-4 h-4">
              <Linkedin className="w-full h-full" />
            </li>
            <li className="w-4 h-4">
              <Facebook className="w-full h-full" />
            </li>
            <li className="w-4 h-4">
              <X className="w-full h-full" />
            </li>
            <li className="w-4 h-4">
              <Instagram className="w-full h-full" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
