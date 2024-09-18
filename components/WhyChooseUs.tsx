"use client";

import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhyChooseUs({
  title,
  benefits
}: {
  title: string,
  benefits: BenefitType[]
}) {
  return (
    <>
      <section className="flex flex-col max-w-[1140px] w-full mt-[36px] mb-[28px] md:mb-[136px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="tracking-[-0.56px] leading-[1.2] text-[28px] text-center uppercase font-semibold mb-[16px] md:mb-[60px] md:tracking-[-1.04px] md:leading-[68px] md:text-[52px]">
            {title}
          </h2>
        </motion.div>
        <ul className="flex flex-wrap justify-center gap-[12px] leading-[24px] md:gap-[24px]">
          {benefits.map((benefit: BenefitType, index) => (
            <li
              key={`benefit-${index}`}
              className="flex-1 bg-white flex flex-col items-start py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[320px] max-w-[358px] lg:min-w-[200px] lg:max-w-[267px] border border-border/15"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={1}
              >
                <div className="rounded-lg p-2 bg-primary-foreground mb-[5px]">
                  {benefit.icon}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={2}
              >
                <h3 className="font-semibold text-[22px] tracking-[-0.44px]">
                  {benefit.title}
                </h3>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={3}
              >
                <p className="text-[20px] text-foreground/60">{benefit.text}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export type BenefitType = {
  title: string;
  text: string;
  icon: React.JSX.Element;
};
