'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  parentName: z.string().min(1, "Parent name is required"),
  childName: z.string().min(1, "Child name is required"),
  grade: z.string().min(1, "Grade is required"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

export function MetrocardRequestForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      grade: "",
      email: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(data: FormData) {
    // Handle form submission
    console.log(data);

    // Simulating form submission
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        toast({
          title: "Success",
          description: "Your metrocard request has been submitted successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error submitting your metrocard request. Please try again.",
        });
      }
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="childName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your child's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <FormControl>
                <Input placeholder="Enter your child's grade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Request Metrocard</Button>
      </form>
    </Form>
  );
}

