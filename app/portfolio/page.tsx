"use client";

import Projects, { ProjectType } from "@/components/Projects";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const supabase = createClient();
  const [tabs, setTabs] = useState<Category[] | null>(null);
  const [category, setCategory] = useState<number | null>(null);
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 24;

  useEffect(() => {
    const getData = async () => {
      const { data: categories } = await supabase.from('categories').select('*');
      setTabs(categories);
    }
    getData();
  }, []);
  
  const fetchData = async (page: number) => {
    try {
      const query = category
        ? supabase.from('category_projects_view').select(`id, name, src`).eq('category_id', category)
        : supabase.from('projects').select(`id, name, src`);

      const { data: projectsData, count } = await query.range((page - 1) * limit, page * limit - 1).limit(limit);
      if (projectsData) {
        const sortedData = projectsData.sort((a, b) => a.id - b.id)
        setProjects(sortedData);
      }
      if (count) {
        setTotalPages(Math.ceil(count / limit));
      }
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [category, currentPage, limit]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  
  return (
    <section className="flex flex-col max-w-[1140px] w-full text-center pt-[64px] pb-[153px]">
      <h2 className="tracking-[-1.04px] leading-[68px] uppercase font-semibold text-[52px] mb-[40px]">
        Our work
      </h2>
      <Tabs defaultValue={category ? String(category) : "all"}>
        <TabsList className="mb-[40px] p-0 bg-transparent">
          <TabsTrigger
            key="tab-trigger-all"
            value="all"
            className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary"
            onClick={() => {
              console.log("category click", null)
              setCategory(null)
            }}
          >
            All models
          </TabsTrigger>
          {
            tabs?.map((tab: Category) => (
              <TabsTrigger
                key={tab.id}
                value={tab.name}
                className="border-b-[3px] py-3 px-5 rounded-none border-border/10 font-bold leading-[140%] tracking-[-0.18px] text-[18px] data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary"
                onClick={() => {
                  console.log("category click", tab.id)
                  setCategory(tab.id);
                }}
              >
                {tab.name}
              </TabsTrigger>
            ))
          }
        </TabsList>
        <Projects data={projects} />
      </Tabs>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={(evt) => {
              evt.preventDefault();
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }} />
          </PaginationItem>
          {
            Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem>
                <PaginationLink className={`${index + 1 === currentPage ? ' border-border/90' : ''}`} isActive={index + 1 === currentPage} onClick={(evt) => {
                  evt.preventDefault();
                  handlePageChange(index + 1);
                }}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))
          }
          <PaginationItem>
            <PaginationNext onClick={(evt) => {
              evt.preventDefault();
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

export interface Category {
  id: number;
  name: string;
}
