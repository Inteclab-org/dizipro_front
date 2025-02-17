import { cn, fadeIn } from "@/lib/utils";
import { TimelineItemProps } from "./TimelineItem";
import { motion } from "framer-motion";
import { useEffect } from "react";


type Props = {
  timeline: TimelineItemProps[];
}

export default function TimelineMobile({timeline}: Props) {
  const timelineMobile = timeline.map((item, index) => {
    return {
      index,
      ...item
    }
  });
  
  useEffect(() => {
    const temp = timelineMobile[2];
    timelineMobile[2] = timelineMobile[3];
    timelineMobile[3] = temp;
  }, [timelineMobile]);

  return <div className="mx-auto px-6 grid grid-cols-2 mb-[-33px] max-w-[375px] min-w-[320px] md:hidden">
    {timelineMobile.map((timelineItem) => (
      <div key={`timeline-mobile-item-${timelineItem.index}`} className={cn(
        "flex flex-col items-center mb-[33px]",
      )}>
        <motion.div
          className={cn(
            "flex items-end text-[16px] font-medium tracking-[-0.16px] leading-[19px] grow max-w-[148px] mx-2 whitespace-pre-line",
          )}
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={timelineItem.index}
        >
          {timelineItem.text}
        </motion.div>
        <div className={cn(
          "flex flex-col items-center relative w-full",
        )}>
          <div className={cn(
            "timeline-content-mobile relative w-[50px] h-[50px] bg-[#008DDD] rounded-[50%] border-[4px] border-solid border-white flex justify-center items-center font-bold text-[18px] text-white leading-[1.22] text-center my-3.5 mx-[19.5px] translate-x-[-19%]",
          )}>
            <span style={{textShadow: "0 1px 3px rgb(0 0 0 / 30%)"}}>{(timelineItem.index || 0) + 1}</span>
          </div>
          <div className={cn(
            "h-[7px] bg-[#cce8f8] absolute w-full z-[-1] -translate-y-2/4 top-2/4",
            (timelineItem.index === 1 || timelineItem.index === 3) && "left-0 w-[57%]",
            (timelineItem.index === 2 || timelineItem.index === 4) && "right-0 w-[65%]",
            timelineItem.index === 0 && "rounded-tl-[20px] rounded-bl-[20px]",
            timelineItem.index === 5 && "rounded-tr-[20px] rounded-br-[20px]"
          )}></div>
          {
            timelineItem.index === 1 && <div className="absolute bg-transparent overflow-hidden w-[105px] ml-auto right-[-10px] top-[29px] z-[-2] sm:right-0">
              <div className="h-[184px] w-[200px] bg-[none] rounded-[50%] border-[7px] border-solid border-[#cce8f8] translate-x-[-100px]"></div>
            </div>
          }
          {
            timelineItem.index === 2 && <div className="absolute bg-transparent overflow-hidden w-[90px] left-[-10px] top-[29px] z-[-2] sm:left-0">
            <div className="h-[169px] w-[200px] bg-[none] rounded-[50%] border-[7px] border-solid border-[#cce8f8]"></div>
          </div>
          }
        </div>
      </div>
    ))}
  </div>
} 
