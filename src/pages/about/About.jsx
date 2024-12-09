import React from "react";
import {
  AboutContent,
  AboutTitleCard,
  DetaileCard,
  AboutCoreValue,
} from "@/customcomponetns";

const About = () => {
  return (
    <>
      <AboutContent />
      <AboutTitleCard />
      <DetaileCard className="md:flex-row-reverse" />
      <AboutCoreValue />
      <DetaileCard className="md:flex-row-reverse" />
    </>
  );
};

export default About;
