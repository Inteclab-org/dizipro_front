import Project from "./Project";

export default function Projects() {
  return <>
    <ul className="grid grid-cols-[repeat(4,_minmax(214px,_1fr))] mb-[40px]">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ul>
  </>
}