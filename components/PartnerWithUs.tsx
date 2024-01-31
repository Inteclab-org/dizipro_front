"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
  return (
    <section className="w-full flex items-center justify-center bg-secondary/30">
      <div className="max-w-[918px] w-full py-[55px] flex justify-end relative">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={2} >
          <Image className="w-[274px] h-[392px] absolute top-[-88px] left-0" src="/partner-bg.png" alt="Partner us background" width={274} height={392} />
        </motion.div>
        <div className="max-w-[479px] flex flex-col items-start gap-[12px]">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={3} >
            <h2 className="text-[36px] tracking-[-0.72px] leading-[50px] uppercase font-semibold">
              Partner with us
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={4} >
            <p className="w-full text-[20px] tracking-[-0.2px] leading-[30px] mb-[18px]">
              Get quality 3D models created for you by experienced designers in
              our team. We provide you with high quality 3D models made by our
              professional team.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={5} >
            <Button variant="secondary">Start now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}