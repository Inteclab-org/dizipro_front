"use client";

import { fadeIn } from "@/lib/utils";
import { HeroCarousel } from "./HeroCarousel";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return <>
    <section className="max-w-[1440px] w-full flex flex-col items-center justify-center pt-[60px] pb-[100px] gap-[80px]">
      <div className="max-w-[865px] w-full text-center flex flex-col items-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} >
          <h1 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[16px]">
            <span>We make </span>
            <span className="text-white bg-primary">high</span>
            <span> quality 3D models for you</span>
          </h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={1} >
          <p className="text-[20px] leading-[30px] opacity-[0.6] mb-[30px]">
            Our “Dizipro” team makes 3D models online through this platform.
            All work is done freelance.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={2} >
          <Button variant="primary">Start now</Button>
        </motion.div>
      </div>
      <HeroCarousel />
    </section>
  </>
}