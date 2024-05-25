import React, { useState, useEffect } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardImage from "../assets/card-image.png";
import clsx from "clsx";

export function CustomCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 sm:p-8"
          >
            <Card className="rounded-[35px] sm:shadow-xl shadow-slate-300">
              <CardContent className="w-full h-full p-0 overflow-hidden">
                <img
                  src={CardImage}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </CardContent>
              <CardFooter className="p-3 flex items-center justify-center">
                <p className="w-full text-sm sm:text-lg text-center font-bold">
                  NEUROSCIENCES
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="flex justify-center items-center gap-3 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={clsx("size-6 rounded-full bg-blue-600", {
              "shadow-md shadow-slate-600 border-4 border-white": current === i,
            })}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}
