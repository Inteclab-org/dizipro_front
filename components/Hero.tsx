"use client";

import { fadeIn } from "@/lib/utils";
import { HeroCarousel } from "./HeroCarousel";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog, { ContactDialogProps } from "./ContactDialog";
import { Locale } from "@/i18n";

export type HeroTitleProps = {
  firstPart: string;
  mainPart: string;
  lastPart: string;
};

interface Props {
  title: HeroTitleProps;
  body: string;
  buttonMessage: string;
  dialog: ContactDialogProps;
  locale?: Locale;
}

const Hero = ({ title, body, buttonMessage, dialog, locale }: Props) => {
  return (
    <section className="max-w-[1440px] px-4 w-full flex flex-col items-center justify-center pt-[60px] pb-[56px] gap-[56px] md:gap-[80px] md:pb-[100px]">
      <div className="max-w-[865px] w-full text-center flex flex-col items-center">
        <motion.h1
          className="tracking-tighter whitespace-pre-line leading-[1.1] uppercase font-semibold mb-[16px] text-[36px] sm:text-[42px] md:text-[52px] md:tracking-[-1.04px] md:leading-[68px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={0}
        >
          {title.firstPart}
          <span className="text-white bg-primary">{title.mainPart}</span>
          {title.lastPart}
        </motion.h1>
        <motion.p
          className="text-[20px] leading-[1.2] text-black/60 mb-[16px] md:mb-[30px] md:leading-[30px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={1}
        >
          {body}
        </motion.p>

        <Dialog>
          <DialogTrigger className="max-w-[340px] w-full sm:w-auto" asChild>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              custom={2}
            >
              <Button variant="primary" className="w-full">
                {buttonMessage}
              </Button>
            </motion.div>
          </DialogTrigger>
          <ContactDialog locale={locale} {...dialog} />
        </Dialog>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
