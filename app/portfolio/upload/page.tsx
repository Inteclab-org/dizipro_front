"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { ProjectType } from "@/components/Projects";
import { Category } from "../page";
import BlurImage from "@/components/BlurImage";
import { v4 as uuidv4 } from 'uuid';
import withAuth from '@/components/withAuth';

const formSchema = z.object({
  category_id: z.string().optional(),
  name: z.string({required_error: "Modal name is required"}),
  project_id: z.string().optional(),
  src: z.string({required_error: "Model picture is required"})
})

export default function UploadModel() {
  const supabase = createClient();
  const { toast } = useToast();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category_id: "",
      project_id: "",
    },
  });
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!file) return;

    const { data: modelImage, error: modelImageError } = await supabase
      .storage
      .from('images')
      .upload(String(uuidv4()) +`/` + file.name, file, {
        upsert: false
      });

    if (modelImage) {
      const { error: modelError } = await supabase
        .from('projects')
        .insert({
          name: values.name,
          src: `/storage/v1/object/public/images/${modelImage.path}`,
          ...(values.category_id ? {category_id: values.category_id} : {}),
          ...(values.project_id ? {project_id: values.project_id} : {})
        });
      if (modelError) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: modelError?.message,
          variant: "destructive"
        });
      }
    }
    if (modelImageError) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: modelImageError?.message,
        variant: "destructive"
      });
    }
  }

  const getProjects =async () => {
    const { data: projects, error } = await supabase.from('all_projects_view').select(`id, name, src, project_id, images`);
    if (projects) {
      setProjects(projects);
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const { data: categories } = await supabase.from('categories').select('*');
      if (categories) {
        setCategories(categories);
      }
    }
    getCategories();
  }, []);

  return (
    <section className="flex flex-col max-w-[1140px] w-1/2 pt-[64px] pb-[153px]">
      <h2 className="tracking-[-1.04px] leading-[68px] text-center uppercase font-semibold text-[40px] mb-[40px]">
        Create model
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-[60px] px-[30px] border space-y-8">
          <FormField
            control={form.control}
            name="src"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Picture*</FormLabel>
                <FormControl>
                  <Input placeholder="Model picture" type="file" {...field} onChange={(e) => {
                    setFile(e.target.files && e.target.files[0]);
                    return field.onChange(e);
                  }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Model name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        categories && categories.map((category: Category) => (
                          <SelectItem key={`category-item-${category.id}`} value={String(category.id)}>{category.name}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="isView"
            render={() => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked: boolean) => {
                      console.log(checked)
                      if (checked && !projects) {
                        getProjects();
                      } else {
                        setProjects(null);
                      }
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Is it a model view?
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          {
            projects && (
              <FormField
                control={form.control}
                name="project_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            projects && projects.map((project: ProjectType) => (
                              <SelectItem key={`project-item-${project.id}`} value={String(project.id)}>
                                <div className="flex items-center gap-[25px]">
                                  <BlurImage project={project} width={35} height={35} />
                                  <span>{project.name}</span>
                                </div>
                              </SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          }

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  )
}
