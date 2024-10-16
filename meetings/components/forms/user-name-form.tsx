"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { userNameSchema } from "@/lib/validations/user";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "../ui/icons";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Session } from "next-auth";

export function UserNameForm({
    user,
    className,
}: {
    user: Session["user"];
    className?: string;
}) {
    const form = useForm<z.infer<typeof userNameSchema>>({
        resolver: zodResolver(userNameSchema),
        defaultValues: {
            name: user?.name || "",
        },
    });

    const {
        handleSubmit,
        register,
    } = form;

    const router = useRouter();

    const [isSaving, setIsSaving] = React.useState<boolean>(false);

    async function onSubmit(values: z.infer<typeof userNameSchema>) {
        setIsSaving(true);

        if (!user) {
            return null;
        }

        const response = await fetch(`/api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: values.name,
            }),
        });

        setIsSaving(false);

        if (!response?.ok) {
            return toast({
                title: "Something went wrong.",
                description: "Your name was not updated. Please try again.",
                variant: "destructive",
            });
        }

        toast({
            description: "Your name has been updated.",
        });

        router.refresh();
    }

    return (
        <Form {...form}>
            <form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle>Your Name</CardTitle>
                        <CardDescription>
                            Please enter your full name or a display name you
                            are comfortable with.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className="sr-only"
                                        htmlFor="name"
                                    >
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            size={32}
                                            {...register("name")}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className={cn(buttonVariants(), className)}
                            disabled={isSaving}
                        >
                            {isSaving && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            <span>Save</span>
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}
