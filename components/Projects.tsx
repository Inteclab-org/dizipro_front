"use client";

import { createClient } from "@/utils/supabase/client";
import Project from "./Project";
import { useEffect, useMemo, useState } from "react";

export default function Projects({category_id, limit = 12}: {category_id: number | null, limit?: number}) {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  
  const fetchData = useMemo(async () => {
    const supabase = createClient();
    console.log('category_id:', category_id);

    try {
      let data = null;

      if (category_id) {
        ({ data } = await supabase
          .from('category_projects_view')
          .select(`id, name, src`)
          .eq('category_id', category_id)
          .limit(limit));
      } else {
        ({ data } = await supabase.from('projects').select(`id, name, src`).limit(limit));
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
        projects?.map((project: ProjectType) => (
          <Project key={project.id} {...project} />
        ))
      }
    </ul>
  </>
}

export interface ProjectType {
  id: number;
  name: string;
  src: string;
}