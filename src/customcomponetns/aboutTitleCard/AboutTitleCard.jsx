import React from "react";

const aboutTitleData = [
  {
    title: `Innovative Engagement`,
    colour: "text-orange-500",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus excepturi omnis maxime iusto temporibus blanditiis totam voluptates cupiditate odit ut explicabo eaque qui, quidem fugit et, deserunt iure vitae odio laborum quas sapiente. Harum illo expedita necessitatibus quidem animi fugiat iste, incidunt cumque sit qui, debitis nemo eos. Iste.",
  },
  {
    title: `Comprehensive Enhancement`,
    colour: "text-teal-500",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus excepturi omnis maxime iusto temporibus blanditiis totam voluptates cupiditate odit ut explicabo eaque qui, quidem fugit et, deserunt iure vitae odio laborum quas sapiente. Harum illo expedita necessitatibus quidem animi fugiat iste, incidunt cumque sit qui, debitis nemo eos. Iste.",
  },
  {
    title: `Empowerment for Success`,
    colour: "text-blue-900",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus excepturi omnis maxime iusto temporibus blanditiis totam voluptates cupiditate odit ut explicabo eaque qui, quidem fugit et, deserunt iure vitae odio laborum quas sapiente. Harum illo expedita necessitatibus quidem animi fugiat iste, incidunt cumque sit qui, debitis nemo eos. Iste.",
  },
];

const AboutTitleCard = () => {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-center my-20 md:my-24 gap-5 p-5">
        {aboutTitleData.map((ad, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-2/5 lg:w-[30%] md:h-96 bg-gray-100 flex flex-col justify-center items-start overflow-hidden gap-5 px-5 py-5 md:py-10"
            >
              <h5
                className={`w-3/5 text-2xl font-bold capitalize ${ad.colour}`}
              >
                {ad.title}
              </h5>
              <p className="text-sm w-4/5">{ad.content}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AboutTitleCard;
