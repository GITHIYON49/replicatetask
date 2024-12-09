import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactDetailes = [
  {
    icon: <Phone />,
    name: "Call us",
    contactInfo: "+90232112111",
  },
  {
    icon: <Mail />,
    name: "Write Us",
    contactInfo: "email.com",
  },
  {
    icon: <MapPin />,
    name: "Write Us",
    contactInfo: "Dubai, UAE",
  },
];

const ContactCard = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 my-24">
        {contactDetailes?.map((cd, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[30%] lg:w-1/4 md:h-52 shadow-lg rounded-lg flex flex-col items-center justify-center p-5 gap-3"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                {cd.icon}
              </span>

              <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                {cd.name}
              </h6>
              <span className="text-base md:text-lg lg:text-xl">
                {cd.contactInfo}
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactCard;
