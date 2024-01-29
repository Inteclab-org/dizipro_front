import Project from "./Project";

export default function Projects({data}: {data: ProjectType[] | null}) {
  return <>
    <ul className="grid grid-cols-[repeat(4,_minmax(214px,_1fr))] mb-[40px]">
      {
        data?.map((project: ProjectType) => (
          <Project key={project.id} data={data} project={project} />
        ))
      }
    </ul>
  </>
}

export interface ProjectType {
  id: number;
  name: string;
  src: string;
}