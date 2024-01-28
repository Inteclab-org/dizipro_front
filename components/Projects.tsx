"use client";

import { createClient } from "@/utils/supabase/client";
import Project from "./Project";
import { useEffect, useMemo, useState } from "react";

export default function Projects({category_id}: {category_id: number | null}) {
  const supabase = createClient();
  const [projects, setProjects] = useState<Project[] | null>(null);

  const fetchData = useMemo(async () => {
    console.log('category_id:', category_id);

    try {
      let data = null;

      if (category_id !== null) {
        ({ data } = await supabase
          .from('category_projects_view')
          .select(`id, name, src`)
          .eq('category_id', category_id));
      } else {
        ({ data } = await supabase.from('projects').select(`id, name, src`));
      }

      console.log('Fetched data:', data);
      return data;
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  }, [category_id]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData;
      if (data !== null) {
        setProjects(data);
      }
    };

    fetchDataAsync();
  }, [fetchData]);

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
  id: number;
  name: string;
  src: string;
}