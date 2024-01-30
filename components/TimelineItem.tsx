import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

export default function TimelineItem({
  icon,
  text,
  index
}: TimelineItemProps) {
  return (
    <div className="timeline-content relative max-w-[185px] w-full text-center shrink-0 grow-0 self-start relative py-2">
      <div className="timeline-icon absolute w-[50px] h-[50px] -translate-x-2/4 left-2/4 top-[calc(100%_+_90px)]">
        <Image className="w-[50px] h-[50px]" src={`/${icon}.png`} alt={icon} width={50} height={50} />
      </div>
      <motion.div
        className="timieline-title text-[20px] font-medium leading-[28px] tracking-[-0.2px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        custom={index ? index : 3}
      >
        {text}
      </motion.div>
    </div>
  )
}

export interface TimelineItemProps {
  icon: string;
  text: string;
  index?: number;
}