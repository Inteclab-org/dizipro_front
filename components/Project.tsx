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
  data: ProjectType[] | null
}

export default function Project(props: ProjectProps) {
  const [projectId, setProjectId] = useState(props.project.id);
  const [currentProject, setCurrentProject] = useState(props.project);

  const handleProjectClick = () => {
    setProjectId(props.project.id);
    setCurrentProject(props.project);
  }

  return (
    <Dialog>
      <DialogTrigger>
      <li
        className="bg-white flex flex-col py-6 pr-[25px] pl-[23px] border border-border/15 cursor-pointer hover:border-border/25 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.07)] hover:scale-110 transition-all duration-[0.3] overflow-hidden"
        onClick={handleProjectClick}
      >
        <BlurImage project={props.project} width={238} height={238} />
      </li>
      </DialogTrigger>
      <DialogContent className="max-w-[708px] w-full border-0 sm:rounded-none p-0">
        <SharedModal
          index={projectId}
          changePhotoId={(index: number) => setProjectId(index)}
          currentPhoto={currentProject}
          changeCurrentPhoto={(item: ProjectType) => setCurrentProject(item)}
          images={props.data}
          navigation={true}
        />    
      </DialogContent>
    </Dialog>
  )
}