"use client";

import { createClient } from "@/utils/supabase/client";
import Project from "./Project";
import { useEffect, useMemo, useState } from "react";

export default function Projects({data}: {data: ProjectType[] | null}) {
  return <>
    <ul className="grid grid-cols-[repeat(4,_minmax(214px,_1fr))] mb-[40px]">
      {
        data?.map((project: ProjectType) => (
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