"use client";

import { fadeIn } from "@/lib/utils";
import { HeroCarousel } from "./HeroCarousel";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog, { ContactDialogProps } from "./ContactDialog";

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
}

const Hero = ({ title, body, buttonMessage, dialog }: Props) => {
  return (
    <section className="max-w-[1440px] w-full flex flex-col items-center justify-center pt-[60px] pb-[100px] gap-[80px]">
      <div className="max-w-[865px] w-full text-center flex flex-col items-center">
        <motion.h1
          className="tracking-[-1.04px] leading-[68px] uppercase font-semibold mb-[16px] text-[42px] md:text-[52px]"
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
          className="text-[20px] leading-[30px] opacity-60 mb-[30px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={1}
        >
          {body}
        </motion.p>

        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              custom={2}
            >
              <Button variant="primary">
                {buttonMessage}
              </Button>
            </motion.div>
          </DialogTrigger>
          <ContactDialog {...dialog} />
        </Dialog>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
