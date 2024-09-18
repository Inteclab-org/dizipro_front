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
        <Image className="hidden w-[50px] h-[50px] md:block" src={`/${icon}.png`} alt={icon} width={50} height={50} />
      </div>
      <motion.div
        className={
          cn(
            "relative timieline-title text-[16px] font-medium leading-[28px] tracking-[-0.2px] md:text-[20px]",
            index === 6 ? "whitespace-nowrap" : ""
          )
        }
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        custom={index ? index : 0}
      >
        {text}
        <div className="absolute border top-[-8px] left-[4px] w-[calc(100%-8px)] h-[calc(100%+16px)] md:left-[-14px] md:w-[calc(100%+28px)]"></div>
      </motion.div>
    </div>
  )
}

export interface TimelineItemProps {
  icon: string;
  text: string;
  index?: number;
}