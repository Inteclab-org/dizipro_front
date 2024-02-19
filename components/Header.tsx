import Logo from "./icons/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TelegramBig from "./icons/TelegramBig";
import WhatsUp from "./icons/WhatsUp";
import { TranslationObejct } from "@/lib/i18n/loadTranslation";

interface Props {
  translation: TranslationObejct;
}

export default function Header({ translation }: Props) {
  return (
    <>
      <header className="max-w-[1200px] w-full flex items-center justify-between gap-[40px] pt-[32px] pb-[16px] border-b-[1px] border-border/20">
        <Dialog>
        <div className="max-w-[55%] w-full flex items-center justify-between gap-[40px]">
          <nav className="flex items-center shrink-0 gap-[42px] leading-[24px]">
            <Link href="/#how-it-works">
              How it works
            </Link>
            <Link href="/portfolio">
              Our portfolio
            </Link>
            <DialogTrigger>Support</DialogTrigger>
          </nav>
          <Link href="/">
            <Logo className="shrink-0" />
          </Link>
        </div>
        
        {/* Order modal */}
        {/* <Dialog> */}
          <DialogTrigger>
            <Button>Order</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[360px] w-full sm:rounded-none">
            <DialogHeader className="mb-[26px]">
              <DialogTitle className="tracking-[-0.6px] leading-[36px] font-medium text-[30px]">Choose</DialogTitle>
              <DialogDescription className="text-foreground/65 text-base leading-[130%] tracking-[-0.32px]">
                Through which messanger do you want to discuss and order a project?
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
        </Dialog>
      </header>
    </>
  );
}
