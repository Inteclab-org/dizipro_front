import Image from "next/image";
import { useState } from "react";
import { Project } from "./Projects";
import { cn } from "@/lib/utils";

export default function BlurImage(props: Project) {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [isLoading, setLoading] = useState(true);

  return (
    // <a href={props.id} className="group">
      <Image
        loading="eager"
        alt={props.name}
        src={`${STORAGE_URL}${props.src}`}
        width={238}
        height={238}
        className={cn(
          'object-contain group-hover:opacity-75 duration-700 ease-in-out',
          isLoading
            ? 'grayscale blur-2xl scale-110'
            : 'grayscale-0 blur-0 scale-100'
        )}
        onLoad={() => setLoading(false)}
      />
    // </a>
  );
}