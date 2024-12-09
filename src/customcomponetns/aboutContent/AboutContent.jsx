import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="w-full md:h-[450px] bg-orange-600 flex flex-col md:flex-row items-center">
        <div className="w-full h-auto md:w-3/5 md:h-full text-white flex flex-col items-center justify-center py-10">
          <div className="w-4/5">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold pb-10 md:pb-5">
              What is BIZ E
            </h2>
            <p className="text-sm md:text-base">
              BIZ E is your partner in progress, offering a unique blend of
              engagement, enhancement, and empowerment. Whether you’re a startup
              looking to establish your presence or an established business
              aiming to innovate, BIZ E provides the platform and support needed
              to succeed. BIZ E stands apart as more than just another business
              network – its a strategic partner committed to your growth and
              success.
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/5 h-80 md:h-full">
          <img
            className="h-full w-full object-cover"
            src="https://biz-excellence.net/wp-content/uploads/2024/10/biz-e-img-2.jpg"
            alt="building-image"
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
