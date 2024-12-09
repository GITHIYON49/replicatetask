import { Button } from "@/components/ui/button";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-10 my-24">
        <h2 className="text-3xl font-semibold">Send Us a Message</h2>
        <div className="w-full flex items-center justify-center p-2">
          <form
            action=""
            className="w-11/12 md:w-4/5 lg:w-3/5 shadow-2xl rounded-lg flex flex-col gap-8 items-center justify-center py-20"
          >
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 flex flex-col items-start justify-center">
              <label htmlFor="name">
                Full Names <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full outline-none border-[1px] border-black p-3 rounded-sm"
              />
            </div>
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 flex flex-col items-start justify-center">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full outline-none border-[1px] border-black p-3 rounded-sm"
              />
            </div>
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 flex flex-col items-start justify-center">
              <label htmlFor="">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name=""
                id=""
                className="w-full h-32 outline-none border-[1px] border-black p-3 rounded-sm resize-none"
              ></textarea>
            </div>
            <div className="w-4/5 sm:w-3/5 lg:w-1/2">
              <Button
                type="Submit"
                className="w-full sm:w-auto text-lg bg-orange-500 hover:bg-orange-400 transition-all font-normal"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
