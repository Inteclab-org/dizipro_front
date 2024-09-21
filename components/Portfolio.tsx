"use client";

import Projects, { ProjectType } from "@/components/Projects";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Tabs, TabsList } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Categories from "./Categories";
import { Locale } from "@/i18n";
import { useToast } from "./ui/use-toast";

export default function Portfolio({
  locale
}: {
  locale: Locale
}) {
  const limit = 24;
  const supabase = createClient();
  const { toast } = useToast();
  const [tabs, setTabs] = useState<Category[] | null>(null);
  const [category, setCategory] = useState<number | null>(null);
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const { data: categories } = await supabase.from('categories').select('*').order('id');
      setTabs(categories);
    }
    getData();
  }, []);
  
  const fetchData = async (page: number) => {
    try {
      const query = category
        ? supabase.from('category_projects_view').select(`id, name, src, project_id, images`, { count: "exact" }).eq('category_id', category).is('project_id', null)
        : supabase.from('all_projects_view').select(`id, name, src, project_id, images`, { count: "exact" });

      const { data: projectsData, count } = await query.range((page - 1) * limit, page * limit - 1).limit(limit).order('id', { ascending: false });
      if (projectsData) {
        setProjects(projectsData);
      }
      if (count) {
        setTotalPages(Math.ceil(count / limit));
      }
    } catch (error: any) {
      toast({
        title: "Error fetching data:",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [category, currentPage, limit]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  
  return (
    <>
      <Tabs defaultValue={category ? String(category) : "all"} className="w-full">
        <TabsList className="flex mb-[16px] p-0 bg-transparent h-[55px] overflow-hidden md:mb-[40px]">
          <Categories
            tabs={tabs}
            setCategory={setCategory}
            handlePageChange={handlePageChange}
            locale={locale}
          />
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
              <PaginationItem key={`pagination-itam-${index}`}>
                <PaginationLink className={`${index + 1 === currentPage ? ' border-border/90' : 'bg-transparent'}`} isActive={index + 1 === currentPage} onClick={(evt) => {
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
    </>
  );
}

export interface Category {
  id: number;
  name_en?: string;
  name_ru?: string;
  name_uz?: string;
}
