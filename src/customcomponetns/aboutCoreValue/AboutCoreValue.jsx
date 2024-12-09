import React from "react";
import { Handshake, Lightbulb, HandHeart } from "lucide-react";

const coreValueDate = [
  {
    title: "Engagement",
    content:
      "We believe in actively involving businesses in exploring new trends, ideas, and concepts that can drive growth and innovation.",
    icon: <Handshake className="h-10 w-10 text-orange-500" />,
  },
  {
    title: "Enhancement",
    content:
      "We believe in actively involving businesses in exploring new trends, ideas, and concepts that can drive growth and innovation.",
    icon: <Lightbulb className="h-10 w-10 text-teal-500" />,
  },
  {
    title: "Empowerment",
    content:
      "We believe in actively involving businesses in exploring new trends, ideas, and concepts that can drive growth and innovation.",
    icon: <HandHeart className="h-10 w-10 text-blue-900" />,
  },
];
const AboutCoreValue = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-10 my-24">
        <h2 className="text-3xl lg:text-4xl font-semibold capitalize">
          Our Core Values
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 ">
          {coreValueDate.map((cd, i) => {
            return (
              <div className="w-11/12 lg:w-1/4 h-64 shadow-2xl rounded-md flex flex-col justify-center items-start gap-5 p-5">
                <h5 className="text-xl lg:text-2xl font-bold">{cd.title}</h5>
                <p className="text-sm lg:text-base">{cd.content}</p>
                <span>{cd.icon}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutCoreValue;
