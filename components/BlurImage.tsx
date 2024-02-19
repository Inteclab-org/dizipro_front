import Image from "next/image";
import { useState } from "react";
import { ProjectType } from "./Projects";
import { cn } from "@/lib/utils";

type BlurImageProps = {
  project: ProjectType,
  width?: number,
  height?: number,
  className?: string,
  isImportant?: boolean
}

export default function BlurImage({project, width, height, className, isImportant = false}: BlurImageProps) {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      loading={isImportant ? "eager" : "lazy"}
      alt={project.name}
      src={`${STORAGE_URL}${project.src}`}
      width={width}
      height={height}
      className={cn(
        'object-contain group-hover:opacity-75 duration-700 ease-in-out w-full h-full',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100',
        className
      )}
      onLoad={() => setLoading(false)}
    />
  );
}