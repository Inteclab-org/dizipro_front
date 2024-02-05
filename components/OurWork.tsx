"use client"

import Link from "next/link";
import Projects, { ProjectType } from "./Projects";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function OurWork() {
  const supabase = createClient();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  const getData = async () => {
    const { data } = await supabase.from('all_projects_view').select(`id, name, src, project_id, images`).limit(12).order('id', { ascending: true });
    if (data) {
      setProjects(data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return <>
  <section className="flex flex-col items-center max-w-[1140px] w-full text-center pt-[36px] pb-[100px]">
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} custom={0} >
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[50px]">
        Our work
      </h2>
    </motion.div>
    <Projects data={projects} />
    <motion.div className="max-w-[250px] w-full" initial="hidden" whileInView="visible" variants={fadeIn} custom={1} >
      <Button variant="outline" asChild>
        <Link href="/portfolio">Show all</Link>
      </Button>
    </motion.div>
  </section>
  </>
}