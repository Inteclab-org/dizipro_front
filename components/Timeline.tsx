import TimelineItem, { TimelineItemProps } from "./TimelineItem";

type Props = {
  timeline: TimelineItemProps[];
}

export default function Timeline({timeline}: Props) {
  return <div className="hidden overflow-x-auto overflow-y-hidden mx-6 md:block">
    <div className="timeline w-[1180px] h-[240.5px] relative flex items-center justify-center mb-0 lg:mb-[24px] md:mx-auto">
      {timeline.map((timelineItem, index) => (
        <TimelineItem key={`${timelineItem.icon}-${index}`} index={index + 1} {...timelineItem} />
      ))}
    </div>
  </div>
} 
