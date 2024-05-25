"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function SigninForm() {
  const [role, setRole] = useState("patient");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    console.log(role);
    console.log(values);
  }

  return (
    <div>
      <Tabs
        onValueChange={(value) => setRole(value)}
        value={role}
        className="ml-auto mr-20 mb-8 w-[300px]"
      >
        <TabsList className="bg-[#c8ceee] p-0 rounded-none rounded-t-xl overflow-hidden">
          <TabsTrigger
            className="data-[state=active]:bg-[#877bb1] data-[state=active]:text-white p-8"
            value="patient"
          >
            Patient
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#877bb1] data-[state=active]:text-white p-8"
            value="doctor"
          >
            Doctor
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="md:w-[50%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              <Button
                className="px-16 text-base"
                type="submit"
                variant="custom"
              >
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
