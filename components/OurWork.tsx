import Link from "next/link";
import Projects from "./Projects";
import { Button } from "./ui/button";

export default function OurWork() {
  return <>
  <section className="flex flex-col max-w-[1140px] w-full text-center pt-[36px] pb-[100px]">
    <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[50px]">
      Our work
    </h2>
    <Projects category_id={null} />
    <Button variant="outline" asChild>
      <Link href="/portfolio" className="max-w-[250px] w-full self-center">Show all</Link>
    </Button>
  </section>
  </>
}