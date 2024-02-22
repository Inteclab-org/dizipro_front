import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectType } from "./Projects";
import BlurImage from "./BlurImage";
import SharedModal from "./SharedModal";

type ProjectProps = {
  project: ProjectType,
}

export default function Project({project}: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger>
      <div
        className="relative z-[2] h-full justify-center items-center aspect-square bg-white flex flex-col py-2 px-2 border border-border/15 cursor-pointer transition-all duration-300 overflow-hidden hover:border-border/25 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.07)] hover:scale-110 hover:z-[3]"
      >
        <BlurImage project={project} width={238} height={238} isImportant={true} className="relative z-[1]" />
      </div>
      </DialogTrigger>
      <DialogContent className="max-w-[708px] w-full border-0 sm:rounded-none p-0">
        <SharedModal
          currentPhoto={project}
          direction={-1}
        />
      </DialogContent>
    </Dialog>
  )
}