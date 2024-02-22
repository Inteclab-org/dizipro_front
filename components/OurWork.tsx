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
  <section className="flex flex-col items-center max-w-[1140px] w-full text-center pt-[36px] pb-[100px]">
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={0} >
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[50px]">
        {title}
      </h2>
    </motion.div>
    <Projects data={projects} />
    <motion.div className="max-w-[250px] w-full" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} custom={1} >
      <Button variant="outline" asChild>
        <Link href={`/${locale}/portfolio`}>{
          buttonMessage
        }</Link>
      </Button>
    </motion.div>
  </section>
  </>
}