import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { ProjectType } from "./Projects";
import { cn, variants } from "@/lib/utils";
import useKeypress from "react-use-keypress";
import Arrow from "./icons/Arrow";
import { useState } from "react";
import ImageView from "./ImageView";
import { transform } from "typescript";

export default function SharedModal({
  currentPhoto,
  direction,
}: SharedModalProps) {
  const STORAGE_URL = process.env.SUPABASE_URL;
  const [currentProject, setCurrentProject] = useState(currentPhoto);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length = currentPhoto.images?.length || 1;
  const distance = (length / 2) * -100;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPhoto.images && currentIndex < currentPhoto.images.length - 1) {
        setCurrentProject(currentPhoto.images[currentIndex + 1]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPhoto.images && currentIndex > 0) {
        setCurrentProject(currentPhoto.images[currentIndex - 1]);
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    },
    trackMouse: true,
  });

  useKeypress("ArrowRight", () => {
    if (currentPhoto.images && currentIndex < currentPhoto.images.length - 1) {
      setCurrentProject(currentPhoto.images[currentIndex + 1]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (currentPhoto.images && currentIndex > 0) {
      setCurrentProject(currentPhoto.images[currentIndex - 1]);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  });

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative flex aspect-[3/2.75] w-full items-center h-auto max-w-[95%] mx-auto lg:max-w-[708px]"
        {...handlers}
      >
        {/* Main image */}
        <div className="overflow-hidden relative flex items-center justify-center w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-[95%] h-[95%] flex items-center justify-center lg:w-full lg:h-full"
            >
              <Image
                src={`${STORAGE_URL}${currentProject.src}`}
                width={708}
                height={708}
                alt={currentProject.name}
                className="object-contain"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          <div className="relative aspect-[3/2] max-h-full w-full">
            <>
              {currentPhoto.images && currentPhoto.images?.length > 1 && currentIndex > 0 && (
                <button
                  className="absolute -left-[230px] top-[calc(50%-16px)] rounded-2 bg-white/50 p-3 backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] transition hover:bg-white/75 focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => {
                    if (currentPhoto.images) {
                      setCurrentProject(currentPhoto.images[currentIndex - 1]);
                      setCurrentIndex((prevIndex) => prevIndex - 1);
                    }
                  }}
                >
                  <Arrow className="w-8 h-8" />
                </button>
              )}
              {currentPhoto.images && currentPhoto.images?.length > 1 && currentIndex < currentPhoto.images.length - 1 && (
                <button
                  className="absolute -right-[230px] top-[calc(50%-16px)] rounded-2 bg-white/50 p-3 backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] transition hover:bg-white/75 focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => {
                    if (currentPhoto.images) {
                      setCurrentProject(currentPhoto.images[currentIndex + 1]);
                      setCurrentIndex((prevIndex) => prevIndex + 1);
                    }
                  }}
                >
                  <Arrow className="w-8 h-8 -rotate-180" />
                </button>
              )}
            </>
          </div>

          <div className="fixed inset-x-0 bottom-0">
            <motion.div
              className={
                cn(
                  "mt-6 mb-6 flex aspect-[3/2] h-9 relative left-[10%] sm:h-14",
                )
              }
            >
              <AnimatePresence initial={false}>
                {currentPhoto.images && currentPhoto.images.length > 1 && currentPhoto.images.map((project, projectIndex) => (
                  <ImageView
                    key={`view-${project.id}-${projectIndex}`}
                    project={project}
                    projectIndex={projectIndex}
                    currentProject={currentProject}
                    setCurrentProject={setCurrentProject}
                    setCurrentIndex={setCurrentIndex}
                    count={currentPhoto.images?.length || 3}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export interface SharedModalProps {
  currentPhoto: ProjectType;
  direction?: number;
}
