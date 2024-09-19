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
    <section className="w-full px-4 flex items-center justify-center bg-secondary/30">
      <div className="max-w-[918px] w-full py-[55px] flex justify-end relative gap-[20px] flex-col md:flex-row">
        <Image
          className="w-[174px] h-[248px] absolute left-0 top-[-37px] top-[-88px] md:w-[274px] md:h-[392px] "
          src="/partner-bg.png"
          alt="Partner us background"
          width={274}
          height={392}
        />
        <div className="w-[188px] h-[188px] md:w-[275px] md:h-[275px] shrink-0"></div>
        <div className="flex flex-col items-start gap-[12px] md:max-w-[479px]">
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
                <Button className="w-[320px]" variant="secondary">
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
