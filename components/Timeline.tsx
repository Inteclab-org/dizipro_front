import TimelineItem, { TimelineItemProps } from "./TimelineItem";

type Props = {
  timeline: TimelineItemProps[];
}

export default function Timeline({timeline}: Props) {
  return <div className="timeline pl-6 w-[1190px] h-[240.5px] relative flex items-center justify-center overflow-x-auto overflow-y-hidden px-4 md:mx-auto">
    {timeline.map((timelineItem, index) => (
      <TimelineItem key={`${timelineItem.icon}-${index}`} index={index + 1} {...timelineItem} />
    ))}
  </div>
} 
