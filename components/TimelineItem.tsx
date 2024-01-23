import Image from "next/image";

export default function TimelineItem({
  icon,
  text
}: TimelineItemProps) {
  return (
    <div className="timeline-content relative max-w-[185px] w-full text-center shrink-0 grow-0 self-start relative py-2">
      <div className="timeline-icon absolute w-[50px] h-[50px] -translate-x-2/4 left-2/4 top-[calc(100%_+_90px)]">
        <Image src={`/${icon}.png`} alt={icon} width={50} height={50} />
      </div>
      <div className="timieline-title text-[20px] font-medium leading-[28px] tracking-[-0.2px]">{text}</div>
    </div>
  )
}

export interface TimelineItemProps {
  icon: string;
  text: string;
}