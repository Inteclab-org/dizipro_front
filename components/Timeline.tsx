import TimelineItem, { TimelineItemProps } from "./TimelineItem";

const timeline: TimelineItemProps[] = [
  {
    icon: "start-contact",
    text: "Contact us"
  },
  {
    icon: "object",
    text: "Show us the object you want"
  },
  {
    icon: "negotiation",
    text: "Price and deadline negotiation"
  },
  {
    icon: "rendering",
    text: "Confirm the rendering"
  },
  {
    icon: "payment",
    text: "Make a payment"
  },
  {
    icon: "finish-order",
    text: "Get your order"
  }
];

export default function Timeline({
}: TimelineProps) {
  return <div className="timeline w-[1140px] h-[185px] relative flex items-center justify-center">
    {
      timeline.map((timelineItem, index) => (
        <TimelineItem key={`${timelineItem.icon}-${index}`} {...timelineItem} />
      ))
    }
  </div>
}

export interface TimelineProps {
}