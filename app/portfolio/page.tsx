import Projects from "@/components/Projects";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Portfolio() {
  const index = 2;
  return (
    <section className="flex flex-col max-w-[1140px] w-full text-center pt-[64px] pb-[153px]">
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[50px]">
        Our work
      </h2>
      <Projects />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className={`border-0 border-b-[1.7px] border-transparent${index === 1 ? ' border-border/90' : ''}`} isActive={index === 1}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className={`border-0 border-b-[1.7px] border-transparent${index === 2 ? ' border-border/90' : ''}`} isActive={index === 2}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className={`border-0 border-b-[1.7px] border-transparent${index === 3 ? ' border-border/90' : ''}`} isActive={index === 3}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
