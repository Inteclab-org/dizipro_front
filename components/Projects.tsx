"use client";

import { createClient } from "@/utils/supabase/client";
import Project from "./Project";
import { useEffect, useState } from "react";

export default function Projects() {
  const supabase = createClient();
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('projects').select('*');
      console.log(data)
      setProjects(data);
    }
    getData()
  }, []);

  return <>
    <ul className="grid grid-cols-[repeat(4,_minmax(214px,_1fr))] mb-[40px]">
      {
        projects?.map((project: Project) => (
          <Project key={project.id} {...project} />
        ))
      }
    </ul>
  </>
}

export interface Project {
  id: string;
  name: string;
  src: string;
}