import React from "react";
import { Button } from "@/components/ui/button";

const RegistrationForm = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-16 my-28">
        <div>
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-2">
            Register
          </h2>
          <span className="inline-block text-center text-base p-4">
            Register and discover a great amount of new opportunities!
          </span>
        </div>
        <form
          action=""
          className="w-full flex flex-col items-center justify-start gap-5"
        >
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="username"
              className="text-base text-gray-700 font-semibold"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="User Name"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="firstname"
              className="text-base text-gray-700 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="lastname"
              className="text-base text-gray-700 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="email"
              className="text-base text-gray-700 font-semibold"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="password"
              className="text-base text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%]">
            <label
              htmlFor="confirm-password"
              className="text-base text-gray-700 font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="w-full outline-none border-[1px] border-gray-300 rounded-sm p-2"
            />
          </div>
          <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-[30%] flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button className="w-full sm:w-1/2 bg-orange-500 text-center font-light text-base text-white shadow-lg hover:bg-orange-400 transition-all cursor-pointer">
              Register
            </Button>
            <Button className="w-full sm:w-1/2 bg-gray-300 text-center font-light text-base text-gray-700 shadow-lg hover:bg-gray-200 transition-all cursor-pointer">
              Login
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegistrationForm;
