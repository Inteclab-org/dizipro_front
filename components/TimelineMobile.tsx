import { cn, fadeIn } from "@/lib/utils";
import { TimelineItemProps } from "./TimelineItem";
import { motion } from "framer-motion";


type Props = {
  timeline: TimelineItemProps[];
}

export default function TimelineMobile({timeline}: Props) {
  return <div className="mx-auto px-6 grid grid-cols-2 mb-[-33px] max-w-[375px] min-w-[375px] md:hidden">
    {timeline.map((timelineItem, index) => (
      <div key={`timeline-mobile-item-${index}`} className={cn(
        "flex flex-col items-center mb-[33px]",
      )}>
        <motion.div
          className={cn(
            "flex items-end text-[16px] font-medium tracking-[-0.16px] leading-[19px] grow max-w-[148px] mx-2",
          )}
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={index}
        >
          {timelineItem.text}
        </motion.div>
        <div className={cn(
          "flex flex-col items-center relative w-full",
        )}>
          <div className={cn(
            "w-[50px] h-[50px] bg-white rounded-[25px] outline outline-[rgb(1,144,195)] outline-[6px] outline-offset-[-6px] flex justify-center items-center font-extrabold text-[18px] leading-[1.22] text-center my-3.5 mx-[19.5px] translate-x-[-19%]",
          )}>
            <span style={{textShadow: "0 1px 3px rgb(0 0 0 / 30%)"}}>{index + 1}</span>
          </div>
          <div className={cn(
            "h-[21px] bg-[#008DDD] absolute w-full z-[-1] -translate-y-2/4 top-2/4",
            (index === 1 || index === 3) && "left-0 w-[57%]",
            (index === 2 || index === 4) && "right-0 w-[65%]",
            index === 0 && "rounded-tl-[20px] rounded-bl-[20px]",
            index === 5 && "rounded-tr-[20px] rounded-br-[20px]"
          )} style={{
            ...(index === 1 && {background: "linear-gradient(to right, #008DDD 0%, #009963 100%)"}),
            ...(index === 2 && {background: "linear-gradient(to left, #00A9B4 0%, #008DDD 100%)"}),
            ...(index === 3 && {background: "linear-gradient(to left, #009963 0%, #00A9B4 100%)"}),
            ...(index === 4 && {background: "linear-gradient(to right, #008DDD 0%, #009D3F 100%)"}),
            ...(index === 5 && {background: "#009D3F"}),
          }}></div>
          {
            index === 1 && <div className="absolute bg-transparent overflow-hidden w-[100px] ml-auto right-0 top-[29px] z-[-1]">
              <div className="h-[169px] w-[200px] bg-[none] rounded-[50%] border-[20px] border-solid border-[#009963] translate-x-[-100px]"></div>
            </div>
          }
          {
            index === 2 && <div className="absolute bg-transparent overflow-hidden w-[100px] left-0 top-[29px] z-[-1]">
            <div className="h-[150px] w-[200px] bg-[none] rounded-[50%] border-[20px] border-solid border-[#008DDD]"></div>
          </div>
          }
        </div>
      </div>
    ))}
  </div>
} 
