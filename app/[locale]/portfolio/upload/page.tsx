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
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Category } from "../page";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image"
import { Check, Repeat } from "lucide-react"
import { cn } from "@/lib/utils"
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n"

const formSchema = z.object({
  src: z.string({required_error: "Model picture is required"}).min(1, "Upload a model picture"),
  category_id: z.string({required_error: "Category is required"}).min(1, "Choose a category"),
  name: z.string().optional()
});

interface Props {
  params: {
    locale: Locale;
  };
};

export default function UploadModel({ params }:Props) {
  const supabase = createClient();
  const { toast } = useToast();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const [mainFile, setMainFile] = useState<number>(0);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    async function authorizeUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (!user) {
        router.push('/login');
      } else {
        setIsAuthorized(true);
      }
    }
    authorizeUser();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      src: "",
      category_id: ""
    },
  });

  const resetForm = function() {
    setIsLoading(false);
    form.reset();
    setFiles(null);
    setMainFile(0);
    toast({
      title: "Yay!",
      description: "Successfully created!",
    });
  }

  async function uploadModal(file: File, values: z.infer<typeof formSchema>, model: any) {
    const imageFolder = uuidv4();
    const { data: modelImage, error: modelImageError } = await supabase
      .storage
      .from('images')
      .upload(String(imageFolder) +`/` + file.name, file, {
        upsert: false
      });

    if (modelImage) {
      const { error: modelError } = await supabase
        .from('projects')
        .insert({
          name: values.name,
          src: `/storage/v1/object/public/images/${modelImage.path}`,
          category_id: values.category_id,
          ...(model?.id ? {project_id: model.id} : {})
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
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!files) return;
    if (!mainFile) {
      return toast({
        title: "Please, select a main modal!",
        variant: "destructive"
      });
    }

    setIsLoading(true);
    const imageFolder = uuidv4();
    let model:any = null;
    const { data: modelImage, error: modelImageError } = await supabase
      .storage
      .from('images')
      .upload(String(imageFolder) + `/` + files[mainFile - 1].name, files[mainFile - 1], {
        upsert: false
      });

    if (modelImage) {
      const { data: modelData, error: modelError } = await supabase
        .from('projects')
        .insert({
          name: values.name,
          src: `/storage/v1/object/public/images/${modelImage.path}`,
          category_id: values.category_id,
        }).select();

      if (modelData) {
        model = modelData[0];
      }

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

    if(model) {
      let views = files;
      views.splice(mainFile - 1, 1);
      let itemsProcessed = 0;

      for (const file of views) {
        itemsProcessed++;
        await uploadModal(file, values, model);
        
        if(itemsProcessed === views.length) {
          resetForm();
        }
      }
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const { data: categories } = await supabase.from('categories').select('*').order('id');
      if (categories) {
        setCategories(categories);
      }
    }
    getCategories();
  }, []);

  return (
    <section className="flex flex-col max-w-[1140px] w-1/2 pt-[64px] pb-[153px]">
      {
        isAuthorized && <>
          <h2 className="tracking-[-1.04px] leading-[68px] text-center uppercase font-semibold text-[40px] mb-[40px]">
            Create model
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="py-[60px] px-[30px] border space-y-8 relative">
              {isLoading && <Loader />}
              <FormField
                control={form.control}
                name="src"
                render={({ field }) => (
                  <FormItem className="!mt-0">
                    <FormLabel>Picture*</FormLabel>
                    <FormControl>
                      <Input placeholder="Model picture" type="file" multiple {...field} onChange={(e) => {
                        if (e.target.files && e.target.files.length > 5) {
                          toast({
                            title: "Uh oh! Something went wrong.",
                            description: "A maximum of 5 files are allowed",
                            variant: "destructive"
                          });
                          return;
                        }
                        if (e.target.files) {
                          const newFiles: File[] = Array.from(e.target.files);
                          setFiles(newFiles);
                        }
                        return field.onChange(e);
                      }} />
                    </FormControl>
                    {files && <output className="p-2 border mt-4 flex items-center gap-4 overflow-x-auto">
                      {files.map((file: File, index) => (
                        <div
                          key={`${file.name}-${index}`}
                          className="upload-btn inline-block w-[20%] pb-[20%] h-0 relative bg-transparent hover:bg-transparent"
                        >
                          <Image
                            className="w-full h-full object-contain border absolute left-0 top-0 p-2"
                            src={URL.createObjectURL(file)}
                            alt=""
                            width={250}
                            height={250}
                          />
                          <Button
                            className={cn("upload-btn--check absolute leading-none border-[none] bg-[rgba(0,0,0,0.5)] p-[0.3rem] rounded-[50%] top-2 right-2",
                              mainFile === (index + 1) ? "" : "hidden"
                            )}
                            type="button"
                            onClick={() => setMainFile(index + 1)}
                          >
                            <Check className="w-5 h-5" />
                          </Button>
                          <Button
                            className={cn("upload-btn--replace hidden absolute leading-none border-[none] bg-[rgba(0,0,0,0.5)] p-[0.3rem] rounded-[50%] bottom-2 right-2",
                            )}
                            type="button"
                          >
                            <Repeat className="w-5 h-5" />
                            <input
                              type="file"
                              title="Replace"
                              className="absolute opacity-0 text-right right-0 top-0"
                              onChange={(evt) => {
                                if (evt.target?.files) {
                                  const newFile: File = evt.target.files[0];
                                  const newFiles: File[] = Array.from(files);
                                  newFiles[index] = newFile;
                                  setFiles(newFiles);
                                }
                              }}
                            />
                          </Button>
                        </div>
                      ))}
                    </output>}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category*</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            categories && categories.map((category: Category) => (
                              <SelectItem key={`category-item-${category.id}`} value={String(category.id)}>{category[`name_${params.locale}`]}</SelectItem>
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
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Model name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      }
    </section>
  )
}
