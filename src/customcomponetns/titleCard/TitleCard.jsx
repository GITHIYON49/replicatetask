import React from "react";
import { Handshake, ChevronRight, Lightbulb, HandHeart } from "lucide-react";

const titleCardData = [
  {
    title: "Engagement",
    subTitle: "With Ideas",
    backgroundColor: "bg-orange-500",
    borderColor: "border-b-orange-500",
    icon: <Handshake className="h-full w-full block text-white" />,
    subIcon: <ChevronRight />,
  },
  {
    title: "Enhancement",
    subTitle: "of profiles",
    backgroundColor: "bg-teal-500",
    borderColor: "border-b-teal-500",
    icon: <Lightbulb className="h-full w-full block text-white" />,
    subIcon: <ChevronRight />,
  },
  {
    title: "Empowerment",
    subTitle: "through Resources",
    backgroundColor: "bg-blue-500",
    borderColor: "border-b-blue-500",
    icon: <HandHeart className="h-full w-full block text-white" />,
  },
];
const TitleCard = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-20 md:flex-row justify-around items-center">
        {titleCardData?.map((td, i) => {
          return (
            <div
              key={i}
              className={`w-11/12 md:w-1/4 md:h-56 rounded-sm shadow-lg flex flex-col gap-2 items-center justify-center relative border-b-4 p-6 md:p-0 ${td.borderColor}`}
            >
              <div
                className={`h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 p-4 flex items-center justify-center ${td.backgroundColor} rounded-full absolute -top-12`}
              >
                {td.icon}
              </div>
              <h6 className="text-lg md:text-2xl lg:text-3xl font-bold">
                {td.title}
              </h6>
              <span className="text-xl text-gray-600 inline-block">
                {td.subTitle}
              </span>
              <span></span>
              <ChevronRight
                className={`h-7 w-7 text-center text-white rounded-full ${td.backgroundColor} `}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TitleCard;
