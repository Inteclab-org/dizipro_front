import { motion } from "framer-motion";
import BlurImage from "./BlurImage";
import { memo } from "react";
import { ProjectType } from "./Projects";

type ImageViewProps = {
  project: ProjectType;
  projectIndex: number;
  currentProject: ProjectType;
  setCurrentProject: (project: ProjectType) => void;
  setCurrentIndex: (index: number) => void;
}

const ImageView = memo(({ project, projectIndex, currentProject, setCurrentProject, setCurrentIndex }: ImageViewProps) => {
  return (
    <motion.button
      initial={{
        width: "0%",
        x: `${Math.max((projectIndex - 1) * -100, -100)}%`,
      }}
      animate={{
        scale: project.src === currentProject.src ? 1.25 : 1,
        width: "100%",
        x: `${Math.max((projectIndex + 1) * -100, -100)}%`,
      }}
      exit={{ width: "0%" }}
      onClick={() => {
        setCurrentProject(project);
        setCurrentIndex(projectIndex);
      }}
      key={`${project.id}${currentProject.src}`}
      className={`${
        project.src === currentProject.src
          ? "z-20 rounded-md shadow shadow-black/50 bg-white"
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
    </motion.button>
  );
});

export default ImageView;
