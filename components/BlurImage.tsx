import Image from "next/image";
import { useState } from "react";
import { Project } from "./Projects";
import { cn } from "@/lib/utils";

export default function BlurImage(props: Project) {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={props.id} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          loading="eager"
          alt={props.name}
          src={`${STORAGE_URL}${props.src}`}
          width={238}
          height={238}
          objectFit="cover"
          className={cn(
            'w-[238px] h-[238px] group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
    </a>
  );
}