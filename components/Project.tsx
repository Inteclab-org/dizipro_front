import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Project } from "./Projects";
import BlurImage from "./BlurImage";

export default function Project(props: Project) {
  return (
    <Dialog>
      <DialogTrigger>
      <li className="bg-white flex flex-col py-6 pr-[25px] pl-[23px] border border-border/15 cursor-pointer hover:border-border/25 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.07)] hover:scale-110 transition-all duration-[0.3] overflow-hidden">
        <BlurImage {...props} />
      </li>
      </DialogTrigger>
      <DialogContent className="max-w-[708px] w-full sm:rounded-none p-0">
        <Carousel opts={{
          loop: true
        }}>
          <CarouselContent>
            <CarouselItem className="flex items-center justify-center px-0">
              {/* <Image
                className="block w-[708px] h-[708px] object-cover ml-4"
                loading="eager"
                alt=""
                src="/project.png"
                width={708}
                height={708}
              /> */}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 left-[-230px]" />
          <CarouselNext className="w-12 h-12 rounded-[8px] border-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-white/50 right-[-230px]" />
        </Carousel>        
      </DialogContent>
    </Dialog>
  )
}