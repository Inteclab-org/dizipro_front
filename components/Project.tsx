import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectType } from "./Projects";
import BlurImage from "./BlurImage";
import SharedModal from "./SharedModal";
import { useState } from "react";

type ProjectProps = {
  project: ProjectType,
}

export default function Project({project}: ProjectProps) {
  const [projectId, setProjectId] = useState(project.id);

  return (
    <Dialog>
      <DialogTrigger>
      <div
        className="h-full justify-center bg-white flex flex-col py-6 pr-[25px] pl-[23px] border border-border/15 cursor-pointer hover:border-border/25 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.07)] hover:scale-110 transition-all duration-[0.3] overflow-hidden"
      >
        <BlurImage project={project} width={238} height={238} />
      </div>
      </DialogTrigger>
      <DialogContent className="max-w-[708px] w-full border-0 sm:rounded-none p-0">
        <SharedModal
          index={projectId}
          changePhotoId={(index: number) => setProjectId(index)}
          currentPhoto={project}
          navigation={true}
          direction={-1}
        />
      </DialogContent>
    </Dialog>
  )
}