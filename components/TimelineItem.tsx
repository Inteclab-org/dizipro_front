import Image from "next/image";
import { motion } from "framer-motion";
import { cn, fadeIn } from "@/lib/utils";

export default function TimelineItem({
  icon,
  text,
  index
}: TimelineItemProps) {
  return (
    <div className="timeline-content relative max-w-[185px] w-full text-center shrink-0 grow-0 self-start relative p-2">
      <div className="timeline-icon absolute w-[50px] h-[50px] -translate-x-2/4 left-2/4 top-[calc(100%_+_90px)]">
        <Image className="w-[50px] h-[50px]" src={`/${icon}.png`} alt={icon} width={50} height={50} />
      </div>
      <motion.div
        className={
          cn(
            "relative timieline-title text-[16px] font-medium tracking-[-0.16px] leading-[19px] whitespace-pre-line md:leading-[28px] md:text-[18px] md:tracking-[-0.2px]",
            (index && index > 4) ? "whitespace-nowrap" : ""
          )
        }
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        custom={index ? index : 0}
      >
        {text}
        <div className="absolute border top-[-8px] w-full h-[calc(100%+16px)] md:left-[-14px] md:w-[calc(100%+28px)]"></div>
      </motion.div>
    </div>
  )
}

export interface TimelineItemProps {
  icon: string;
  text: string;
  index?: number;
}