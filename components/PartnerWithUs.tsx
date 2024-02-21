"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
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
import Link from "next/link";

export default function PartnerWithUs({
  title, body, buttonMessage
}: {
  title: string;
  body: string;
  buttonMessage: string;
}) {
  return (
    <section className="w-full flex items-center justify-center bg-secondary/30">
      <div className="max-w-[918px] w-full py-[55px] flex justify-end relative">
        <Image
          className="w-[274px] h-[392px] absolute top-[-88px] left-0"
          src="/partner-bg.png"
          alt="Partner us background"
          width={274}
          height={392}
        />
        <div className="max-w-[479px] flex flex-col items-start gap-[12px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={0}
            className="text-[36px] tracking-[-0.72px] leading-[50px] uppercase font-semibold"
          >
            {title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={1}
            className="w-full text-[20px] tracking-[-0.2px] leading-[30px] mb-[18px]"
          >
            {body}
          </motion.p>

          {/* Order modal */}
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={2}
              >
                <Button variant="secondary">
                  {buttonMessage}
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-[360px] w-full sm:rounded-none">
              <DialogHeader className="mb-[26px]">
                <DialogTitle className="tracking-[-0.6px] leading-[36px] font-medium text-[30px]">
                  Choose
                </DialogTitle>
                <DialogDescription className="text-foreground/65 text-base leading-[130%] tracking-[-0.32px]">
                  Through which messanger do you want to discuss and order a
                  project?
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-2">
                <Link
                  className="p-4 bg-muted"
                  href="https://t.me/dizipro_order"
                  target="_blank"
                >
                  <TelegramBig className="w-[112px] h-[112px]" />
                </Link>
                <Link
                  className="p-4 bg-muted"
                  href="https://wa.me/998906666660"
                  target="_blank"
                >
                  <WhatsUp className="w-[112px] h-[112px]" />
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
