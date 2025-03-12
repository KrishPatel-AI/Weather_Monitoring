"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import MehsanaSolar from "../../public/mehsanasolar.jpg";

import MehsanaWildlife from "../../public/mehsanawl.jpg";

import MehsanaWetland from "../../public/mehsanawetland.jpg";

const CarouselComponent = () => {
  return (
    <>
      <Carousel className="w-full relative">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={MehsanaSolar}
              alt="Mehsana Solar Plant"
              width={1600}
              height={500}
              className="w-full object-fit h-[550px] rounded-lg"
            />
          </CarouselItem>

          <CarouselItem>
            <Image
              src={MehsanaWildlife}
              alt="Mehsana Wildlife"
              width={1600}
              height={500}
              className="w-full object-fit h-[550px] rounded-lg"
            />
          </CarouselItem>

          <CarouselItem>
            <Image
              src={MehsanaWetland}
              alt="Mehsana Wetlands"
              width={1600}
              height={500}
              className="w-full object-fit h-[550px] rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white hover:bg-[var(--accent-color)] transition-all w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10" />

        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white hover:bg-[var(--accent-color)] transition-all w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10" />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
