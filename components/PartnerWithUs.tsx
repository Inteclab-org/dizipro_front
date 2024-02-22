"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactDialog, { ContactDialogProps } from "./ContactDialog";

export default function PartnerWithUs({
  title, body, buttonMessage, dialog
}: {
  title: string;
  body: string;
  buttonMessage: string;
  dialog: ContactDialogProps;
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
            <ContactDialog {...dialog} />
          </Dialog>
        </div>
      </div>
    </section>
  );
}
