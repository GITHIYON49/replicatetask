import { Button } from "@/components/ui/button";
import React from "react";

const DetaileCard = ({ className }) => {
  return (
    <>
      <section className="my-24">
        <div
          className={`${className} flex flex-col  items-center justify-center gap-5 mb-0 md:mb-12`}
        >
          <div className="h-96 w-full md:w-2/5 p-3 md:p-5">
            <img
              src="https://biz-excellence.net/wp-content/uploads/2024/10/bize.jpg"
              className="w-full h-full object-cover"
              alt="business-meeting"
            />
          </div>
          <div className="w-11/12 md:w-2/5 flex flex-col gap-10">
            <h3 className="text-2xl md:text-3xl font-bold">Overview</h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              at ratione quas ipsam id voluptatum minima pariatur unde. Quam
              debitis tempore iusto ipsam optio itaque. Veniam minus nisi
              necessitatibus cupiditate voluptates ex similique doloribus, alias
              qui, nesciunt, perspiciatis hic distinctio.
            </p>
            <Button className="bg-orange-600 cursor-pointer w-28">
              Read More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetaileCard;
