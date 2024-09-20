import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TelegramBig from "./icons/TelegramBig";
import WhatsUp from "./icons/WhatsUp";
import Link from "next/link";

export type ContactDialogProps = {
  title: string;
  description: string;
};

export default function ContactDialog({
  title,
  description
}: ContactDialogProps) {
  console.log("opening")
  return (
    <DialogContent className="max-w-[360px] w-full sm:rounded-none">
      <DialogHeader className="mb-[26px]">
        <DialogTitle className="tracking-[-0.6px] leading-[36px] font-medium text-[30px]">
          {title}
        </DialogTitle>
        <DialogDescription className="text-foreground/65 text-base leading-[130%] tracking-[-0.32px]">
          {description}
        </DialogDescription>
      </DialogHeader>
      <div className="flex gap-2">
        <Link className="p-4 bg-muted" href="https://t.me/dizipro_order" target="_blank">
          <TelegramBig className="w-[112px] h-[112px]" />
        </Link>
        <Link className="p-4 bg-muted" href="https://wa.me/998906666660" target="_blank">
          <WhatsUp className="w-[112px] h-[112px]" />
        </Link>
      </div>
    </DialogContent>
  )
}