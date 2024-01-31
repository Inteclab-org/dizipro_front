import Project from "./Project";

export default function Projects({data}: {data: ProjectType[] | null}) {
  return <>
    <div className="grid grid-cols-[repeat(4,_minmax(214px,_1fr))] mb-[40px]">
      {
        data?.map((project: ProjectType) => (
          project.src && <Project key={project.id} project={project} />
        ))
      }
    </div>
  </>
}

export interface ProjectType {
  id: number;
  name: string;
  src: string;
  images: ProjectType[] | null;
}