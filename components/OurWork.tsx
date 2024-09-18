"use client"

import Link from "next/link";
import Projects, { ProjectType } from "./Projects";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Locale } from "@/i18n";

type Props = {
  title: string;
  buttonMessage: string;
  locale: Locale;
}

export default function OurWork({
  title,
  buttonMessage,
  locale
}: Props) {
  const supabase = createClient();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  const getData = async () => {
    const { data } = await supabase.from('all_projects_view').select(`id, name, src, project_id, images`).eq('is_top', true).limit(16).order('id', { ascending: false });
    if (data) {
      setProjects(data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return <>
  <section className="flex flex-col items-center max-w-[1140px] w-full text-center pt-[36px] pb-[28px] md:pb-[100px]">
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} >
      <h2 className="tracking-[-0.56px] leading-[1.2] uppercase font-semibold text-[28px] mb-[16px] md:mb-[50px] md:tracking-[-1.04px] md:leading-[68px] md:text-[52px]">
        {title}
      </h2>
    </motion.div>
    <Projects data={projects} />
    <motion.div className="max-w-[360px] md:max-w-[250px] w-full" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={1} >
      <Button variant="outline" asChild>
        <Link href={`/${locale}/portfolio`} className="py-[12px] text-[16px] md:py-[16px] md:text-[18px]">{
          buttonMessage
        }</Link>
      </Button>
    </motion.div>
  </section>
  </>
}