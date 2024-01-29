import Image from "next/image";
import { useState } from "react";
import { ProjectType } from "./Projects";
import { cn } from "@/lib/utils";

type BlurImageProps = {
  project: ProjectType,
  width?: number,
  height?: number,
  className?: string
}

export default function BlurImage(props: BlurImageProps) {
  const {project, width, height} = props;
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [isLoading, setLoading] = useState(true);

  return (
    // <a href={props.id} className="group">
      <Image
        loading="eager"
        alt={project.name}
        src={`${STORAGE_URL}${project.src}`}
        width={width}
        height={height}
        className={cn(
          'object-contain group-hover:opacity-75 duration-700 ease-in-out',
          isLoading
            ? 'grayscale blur-2xl scale-110'
            : 'grayscale-0 blur-0 scale-100',
          props.className
        )}
        onLoad={() => setLoading(false)}
      />
    // </a>
  );
}