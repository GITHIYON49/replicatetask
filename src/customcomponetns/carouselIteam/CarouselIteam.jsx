import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Imageone,
  Imagetwo,
  Imagethree,
  Imagefour,
  Imagefive,
} from "@/assets/images";

const carouselImages = [Imageone, Imagetwo, Imagethree, Imagefour, Imagefive];

function CarouselIteam() {
  return (
    <>
      <div className="w-full h-80 flex justify-center mb-28">
        <Carousel className="w-4/5 md:w-11/12 h-full -z-10">
          <CarouselContent className="w-full h-full">
            {carouselImages.map((img, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full h-full flex items-center justify-center p-0">
                      <div className="w-full h-80">
                        <img
                          className="w-full h-full object-cover overflow-hidden"
                          src={img}
                          alt="company"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default CarouselIteam;
