"use client"

import Link from "next/link";
import Projects, { ProjectType } from "./Projects";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function OurWork() {
  const supabase = createClient();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  const getData = async () => {
    const { data } = await supabase.from('projects').select('*').limit(12);
    if (data) {
      const sortedData = data.sort((a, b) => a.id - b.id);
      setProjects(sortedData);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return <>
  <section className="flex flex-col max-w-[1140px] w-full text-center pt-[36px] pb-[100px]">
    <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[50px]">
      Our work
    </h2>
    <Projects data={projects} />
    <Button variant="outline" asChild>
      <Link href="/portfolio" className="max-w-[250px] w-full self-center">Show all</Link>
    </Button>
  </section>
  </>
}