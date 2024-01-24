import { HeroCarousel } from "./HeroCarousel";
import { Button } from "./ui/button";

export default function Hero() {
  return <>
    <section className="max-w-[1440px] w-full flex flex-col items-center justify-center pt-[60px] pb-[100px] gap-[80px]">
      <div className="max-w-[865px] w-full text-center flex flex-col items-center">
        <h1 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[16px]">
          <span>We make </span>
          <span className="text-white bg-primary">high</span>
          <span> quality 3D models for you</span>
        </h1>
        <p className="text-[20px] leading-[30px] opacity-[0.6] mb-[30px]">
          Our “Dizipro” team makes 3D models online through this platform.
          All work is done freelance.
        </p>
        <Button variant="primary">Start now</Button>
      </div>
      <HeroCarousel />
    </section>
  </>
}