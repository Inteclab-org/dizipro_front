import Project from "./Project";

export default function Projects({data}: {data: ProjectType[] | null}) {
  return <>
    <div className="grid grid-cols-[repeat(2,_minmax(180px,_1fr))] mb-[16px] md:mb-[40px] md:grid-cols-[repeat(3,_minmax(214px,_1fr))] lg:grid-cols-[repeat(4,_minmax(214px,_1fr))]">
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