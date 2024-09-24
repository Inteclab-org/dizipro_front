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
import { Locale } from "@/i18n";

export default function PartnerWithUs({
  title, body, buttonMessage, dialog, locale
}: {
  title: string;
  body: string;
  buttonMessage: string;
  dialog: ContactDialogProps;
  locale?: Locale;
}) {
  return (
    <section className="w-full px-4 flex items-center justify-center bg-secondary/30 text-center md:text-start">
      <div className="max-w-[918px] w-full py-[55px] flex justify-end relative flex-col items-center md:items-start md:gap-[20px] md:flex-row">
        <Image
          className="w-[174px] h-[248px] absolute top-[-37px] -translate-x-2/4 left-2/4 md:left-0 md:translate-x-0 md:top-[-88px] md:w-[274px] md:h-[392px] "
          src="/partner-bg.png"
          alt="Partner us background"
          width={274}
          height={392}
        />
        <div className="w-[188px] h-[188px] md:w-[275px] md:h-[275px] shrink-0"></div>
        <div className="flex flex-col items-center gap-[4px] md:gap-[12px] max-w-[479px] md:items-start">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={0}
            className="text-[30px] tracking-[-0.6px] leading-[40px] uppercase font-semibold md:text-[36px] md:tracking-[-0.72px] md:leading-[50px]"
          >
            {title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={1}
            className="w-full text-[18px] tracking-[-0.18px] leading-[25px] mb-[28px] md:mb-[18px] md:text-[20px] md:tracking-[-0.2px] md:leading-[30px]"
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
            <ContactDialog locale={locale} {...dialog} />
          </Dialog>
        </div>
      </div>
    </section>
  );
}
