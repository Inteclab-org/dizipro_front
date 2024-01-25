"use client";

import Projects from "@/components/Projects";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [tabs, setTabs] = useState<any[] | null>(null)
  const supabase = createClient();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('categories').select('*');
      setTabs(data);
    }
    getData()
  }, []);
  const index = 2;
  return (
    <section className="flex flex-col max-w-[1140px] w-full text-center pt-[64px] pb-[153px]">
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[40px]">
        Our work
      </h2>
      <Tabs defaultValue="all">
        <TabsList className="mb-[40px] p-0 bg-transparent">
          <TabsTrigger value="all" className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary">All models</TabsTrigger>
          {
            tabs?.map((tab: any) => (
              <TabsTrigger key={tab.id} value={tab.name} className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary">{tab.name}</TabsTrigger>
            ))
          }
        </TabsList>
        <TabsContent value="all">
          <Projects />
        </TabsContent>
        <TabsContent value="furniture">Furnitures.</TabsContent>
      </Tabs>

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
