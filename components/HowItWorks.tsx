"use client";

import { fadeIn } from "@/lib/utils";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return <section id="how-it-works" className="max-w-[1140px] w-full text-center pt-[36px] pb-[120px]">
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} >
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[78px]">
        HOW IT WORKS
      </h2>
    </motion.div>
    <Timeline />
  </section>
}