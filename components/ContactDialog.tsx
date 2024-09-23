import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TelegramBig from "./icons/TelegramBig";
import WhatsUp from "./icons/WhatsUp";
import Phone from "./icons/Phone";
import Link from "next/link";
import { Locale } from "@/i18n";

export type ContactDialogProps = {
  title: string;
  description: string;
  locale?: Locale;
};

export default function ContactDialog({
  title,
  description,
  locale
}: ContactDialogProps) {
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
      <div className="flex flex-col gap-[8px]">
        {
          locale === "uz" && <Link className="flex items-center gap-[8px] p-4 bg-muted" href="https://t.me/dizipro_order" target="_blank">
            <Phone className="w-[32px] h-[32px]" />
            <p className="font- text-[18px] tracking-[-0.56px] leading-[1.3]">+998(90)98765454</p>
          </Link>
        }
        <div className="flex gap-2 justify-between">
          <Link className="p-4 bg-muted" href="https://t.me/dizipro_order" target="_blank">
            <TelegramBig className="w-[112px] h-[112px]" />
          </Link>
          <Link className="p-4 bg-muted" href="https://wa.me/998906666660" target="_blank">
            <WhatsUp className="w-[112px] h-[112px]" />
          </Link>
        </div>
      </div>
    </DialogContent>
  )
}