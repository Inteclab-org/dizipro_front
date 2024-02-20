import TimelineItem, { TimelineItemProps } from "./TimelineItem";

type Props = {
  timeline: TimelineItemProps[];
}

export default function Timeline({timeline}: Props) {
  return <div className="timeline w-[1140px] h-[185px] relative flex items-center justify-center">
    {timeline.map((timelineItem, index) => (
      <TimelineItem key={`${timelineItem.icon}-${index}`} index={index + 1} {...timelineItem} />
    ))}
  </div>
} 
