import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function HeroCarousel() {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return (
    <Carousel className="max-w-[1280px] w-full" opts={{
      loop: true
    }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className=" h-[302px] flex items-center justify-center px-0" key={`hero-carousel-item-${index}`}>
            <Image
              className="w-[1280px] h-[302px]"
              alt={`Hero carousel item ${index + 1}`}
              src={`${STORAGE_URL}/storage/v1/object/public/images/hero-carousel-${index + 1}.jpg`}
              width={1280}
              height={302}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 left-0" />
      <CarouselNext className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 right-0" />
    </Carousel>
  )
}
