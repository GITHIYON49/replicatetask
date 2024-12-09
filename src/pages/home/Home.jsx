import React from "react";
import {
  TitleCard,
  DetaileCard,
  BlogCard,
  CarouselIteam,
} from "@/customcomponetns";

const Home = () => {
  return (
    <>
      <CarouselIteam />
      <TitleCard />
      <DetaileCard className="md:flex-row" />
      <DetaileCard className="md:flex-row-reverse" />
      <BlogCard />
    </>
  );
};

export default Home;
