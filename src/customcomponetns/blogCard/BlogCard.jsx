import React from "react";

const BlogCard = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-8 items-center justify-center my-32 py-24 bg-orange-50">
        <h2 className="text-2xl text-center md:text-3xl font-bold capitalize">
          What makes us different
        </h2>
        <div className="w-11/12 flex flex-col lg:flex-row flex-wrap items-center justify-center h-full">
          <div className="w-full lg:w-1/3 lg:min-h-72 lg:invisible"></div>
          <div className="bg-white w-full h-auto lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
              Exclusive <br /> <span>opportunities</span>
            </h6>
            <p className="text-xs leading-5 w-4/5 text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eaque molestiae, consequuntur aliquid dolorum
              recusandae! Vero quod, sunt tempora dicta alias explicabo officia
              necessitatibus ipsam mollitia, doloribus eum. Quos, culpa?
            </p>
          </div>
          <div className="bg-orange-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold  capitalize">
              {" "}
              Personalized
              <br /> <span>Support</span>
            </h6>
            <p className="text-xs leading-5 w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eaque molestiae, consequuntur aliquid dolorum
              recusandae! Vero quod, sunt tempora dicta alias explicabo officia
              necessitatibus ipsam mollitia, doloribus eum. Quos, culpa?
            </p>
          </div>

          <div className="bg-gray-100 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
              Visibility <br /> <span>and Influence</span>
            </h6>
            <p className="text-xs leading-5 w-4/5 text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eaque molestiae, consequuntur aliquid dolorum
              recusandae! Vero quod, sunt tempora dicta alias explicabo officia
              necessitatibus ipsam mollitia, doloribus eum. Quos, culpa?
            </p>
          </div>
          <div className="bg-teal-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold  capitalize">
              Collaborative <br /> <span>Environment</span>
            </h6>
            <p className="text-xs leading-5 w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eaque molestiae, consequuntur aliquid dolorum
              recusandae! Vero quod, sunt tempora dicta alias explicabo officia
              necessitatibus ipsam mollitia, doloribus eum. Quos, culpa?
            </p>
          </div>
          <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
              Long Term <br /> <span>Growth</span>
            </h6>
            <p className="text-xs leading-5 w-4/5 text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eaque molestiae, consequuntur aliquid dolorum
              recusandae! Vero quod, sunt tempora dicta alias explicabo officia
              necessitatibus ipsam mollitia, doloribus eum. Quos, culpa?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
