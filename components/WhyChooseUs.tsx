"use client";

import { ReactNode } from "react";
import Check from "./icons/Check";
import Click from "./icons/Click";
import Message from "./icons/Message";
import Price from "./icons/Price";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

const benefits: BenefitType[] = [
  {
    heading: "Custom Creations",
    text: "Receive tailor-made, precise, and top-quality 3D models and environments, crafted to your specifications.",
    icon: (className) => <Check className={className} />,
  },
  {
    heading: "Competitive Pricing",
    text: "Access custom 3D model creation services at unbeatable rates, ensuring value without compromising on quality.",
    icon: (className) => <Price className={className} />,
  },
  {
    heading: "User-Friendly Service",
    text: "Our streamlined process simplifies ordering and ensures a seamless experience from start to completion.",
    icon: (className) => <Click className={className} />,
  },
  {
    heading: "Skilled Professionals",
    text: "Our talented freelancers offer personalized support and expertise, enriching your project with their experience.",
    icon: (className) => <Message className={className} />,
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="flex flex-col max-w-[1140px] w-full mt-[36px] mb-[136px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="tracking-[-1.04px] leading-[68px] text-center uppercase font-semibold text-[52px] mb-[60px]">
            WHY CHOOSE US?
          </h2>
        </motion.div>
        <ul className="flex justify-center gap-[24px] leading-[24px]">
          {benefits.map((benefit: BenefitType, index) => (
            <li
              key={`benefit-${index}`}
              className="flex-1 bg-white flex flex-col items-start py-5 pr-[21px] pl-[19px] gap-[8px] min-w-[200px] max-w-[267px] border border-border/15"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={1}
              >
                <div className="rounded-lg p-2 bg-primary-foreground mb-[5px]">
                  {benefit.icon("h-8 w-8 shrink-0")}
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
                  {benefit.heading}
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

type BenefitType = {
  heading: string;
  text: string;
  icon: (className: string) => ReactNode;
};
