"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  // const plugin = useRef(
  //   Autoplay({ delay: 3000, stopOnInteraction: true })
  // );
  const [selected, setSelected] = useState<number>(0);

  const autoPlayCarousel = () => {
    return setInterval(() => {
      setSelected((prevVal) => (prevVal === 4 ? 0 : prevVal + 1));
    }, 3000);
  };

  // Start autoplay when component mounts
  useEffect(() => {
    const intervalId = autoPlayCarousel();
    
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Carousel className="max-w-[1280px] w-full" opts={{
        loop: true
      }}
      // plugins={[plugin.current]}
    >
      <CarouselContent className="embla__container h-[302px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className={
            cn(
              "embla__slide h-[302px] px-0 absolute z-1 flex-[0_0_auto] w-full opacity-0 top-0",
              selected === index ? "is-selected" : ''
            )
          } key={`hero-carousel-item-${index}`}>
            <Image
              className="w-[1280px] h-[302px]"
              alt={`Hero carousel item ${index + 1}`}
              src={`/hero-carousel-${index + 1}.jpg`}
              width={1280}
              height={302}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 left-0 z-[2]"
        disabled={false}
        onClick={() => {
          setSelected((prevVal) => {
            if (prevVal === 0) return 4;
            return prevVal - 1;
          })
        }}
      />
      <CarouselNext
        className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 right-0 z-[2]"
        disabled={false}
        onClick={() => {
          setSelected((prevVal) => {
            if (prevVal === 4) return 0;
            return prevVal + 1;
          })
        }}
      />
    </Carousel>
  )
}
