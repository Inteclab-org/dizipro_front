"use client";

import { cn, fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Programs() {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

  return <>
    <section className="max-w-[1140px] w-full text-center mt-[36px] mb-[225px]">
      <motion.h2 initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[78px]">
        Programs we use
      </motion.h2>
      <ul className="grid grid-cols-[repeat(3,_minmax(380px,_1fr))]">
        {
          Array.from({ length: 6 }).map((_, index) => (
            <li
              key={`program-item-${index + 1}`}
              className={cn("max-width-[380px] w-full flex items-center justify-center p-[30px] border-border/5",
                index % 3 === 1 ? "border-l-2 border-r-2" : "",
                index < 3 ? "border-b-[1px]" : "border-t-[1px]"
              )}
            >
              <Image
                className="w-auto h-auto"
                src={`${STORAGE_URL}/storage/v1/object/public/images/program-${index + 1}.png`}
                alt={`program-item-${index}`}
                width={272} 
                height={68}
              />
            </li>
          ))
        }
      </ul>
    </section>
  </>
}