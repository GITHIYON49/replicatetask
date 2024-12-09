import React from "react";

const ContactTitleCard = () => {
  return (
    <>
      <div className="w-full h-80 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-3/5 h-full bg-orange-600 flex items-center justify-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold capitalize">
            contact us
          </h2>
        </div>
        <div className="w-full md:w-2/5 h-full object-cover overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://biz-excellence.net/wp-content/uploads/2024/09/pexels-photo.jpg"
            alt="Telephone-image"
          />
        </div>
      </div>
    </>
  );
};

export default ContactTitleCard;
