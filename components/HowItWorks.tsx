"use client";

import { fadeIn } from "@/lib/utils";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { TimelineItemProps } from "./TimelineItem";
import TimelineMobile from "./TimelineMobile";

type Props = {
  title: string;
  timeline: TimelineItemProps[];
};

export default function HowItWorks({
  title,
  timeline
}: Props) {
  return <section id="how-it-works" className=" w-full text-center md:pt-[36px] pb-[36px] md:pb-[120px]">
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} >
      <h2 className="tracking-[-0.56px] leading-[1.2] uppercase font-semibold text-[28px] mb-[24px] mx-[30px] md:mb-[78px] md:text-[52px] md:leading-[68px] md:tracking-[-1.04px]">
        {title}
      </h2>
    </motion.div>
    <Timeline timeline={timeline} />
    <TimelineMobile timeline={timeline} />
  </section>
}