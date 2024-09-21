import BlurImage from "./BlurImage";
import { memo } from "react";
import { ProjectType } from "./Projects";

type ImageViewProps = {
  project: ProjectType;
  projectIndex: number;
  currentProject: ProjectType;
  count: number;
  setCurrentProject: (project: ProjectType) => void;
  setCurrentIndex: (index: number) => void;
}

const ImageView = memo(({ project, projectIndex, currentProject, count, setCurrentProject, setCurrentIndex }: ImageViewProps) => {
  return (
    <button
      onClick={() => {
        setCurrentProject(project);
        setCurrentIndex(projectIndex);
      }}
      key={`${project.id}${currentProject.src}`}
      className={`${
        project.src === currentProject.src
          ? "z-20 rounded-md shadow shadow-black/50 bg-white scale-125"
          : "z-10 bg-white/40"
      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
    >
      <BlurImage
        width={180}
        height={120}
        project={project}
        className={`${
          project.src === currentProject.src
            ? "brightness-110 hover:brightness-110"
            : "brightness-50 contrast-125 hover:brightness-75"
        } h-full transform object-cover transition`}
      />
    </button>
  );
});

export default ImageView;
