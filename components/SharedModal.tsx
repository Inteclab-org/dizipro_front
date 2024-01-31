import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { ProjectType } from "./Projects";
import BlurImage from "./BlurImage";
import { range, variants } from "@/lib/utils";
import useKeypress from "react-use-keypress";
import Arrow from "./icons/Arrow";
import { useState } from "react";

export default function SharedModal({
  index,
  changePhotoId,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [currentProject, setCurrentProject] = useState(currentPhoto);

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     if (currentPhoto.images && currentProject.id < currentPhoto.images.length) {
  //       changePhotoId(index + 1);
  //     }
  //   },
  //   onSwipedRight: () => {
  //     if (currentProject.id > 1) {
  //       changePhotoId(index - 1);
  //     }
  //   },
  //   trackMouse: true,
  // });

  // useKeypress("ArrowRight", () => {
  //   if (currentProject.images && index < currentProject.images.length) {
  //     changePhotoId(index + 1);
  //   }
  // });

  // useKeypress("ArrowLeft", () => {
  //   if (index > 1) {
  //     changePhotoId(index - 1);
  //   }
  // });

  console.log(currentProject, currentProject.images)

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative flex aspect-[3/2.75] w-full max-w-[1280px] items-center h-auto"
        // {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2.75] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPhoto.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={`${STORAGE_URL}${currentProject.src}`}
                  width={708}
                  height={708}
                  priority
                  alt={currentProject.name}
                  className="max-w-max h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          <div className="relative aspect-[3/2] max-h-full w-full">
            {navigation && (
              <>
                {/* {currentPhoto.images && currentPhoto.images?.length > 1 && index > 1 && (
                  <button
                    className="absolute -left-[230px] top-[calc(50%-16px)] rounded-2 bg-white/50 p-3 backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] transition hover:bg-white/75 focus:outline-none"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    onClick={() => {
                      changePhotoId(index - 1);
                    }}
                  >
                    <Arrow className="w-8 h-8" />
                  </button>
                )}
                {currentPhoto.images && index < currentPhoto.images?.length - 1 && (
                  <button
                    className="absolute -right-[230px] top-[calc(50%-16px)] rounded-2 bg-white/50 p-3 backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] transition hover:bg-white/75 focus:outline-none"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    onClick={() => changePhotoId(index + 1)}
                  >
                    <Arrow className="w-8 h-8 -rotate-180" />
                  </button>
                )} */}
              </>
            )}
          </div>

          {navigation && (
            <div className="fixed inset-x-0 bottom-0 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {currentPhoto.images && currentPhoto.images.length > 1 && currentPhoto.images.map((project, projectIndex) => (
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
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}

export interface SharedModalProps {
  index: number;
  currentPhoto: ProjectType;
  changePhotoId: (index: number) => void;
  navigation: boolean;
  direction?: number;
}
