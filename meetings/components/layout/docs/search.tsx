"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { allDocs } from "@/.contentlayer/generated/index.mjs";
import { useState } from "react";
import { CircleIcon } from "lucide-react";
import { CommandLoading } from "cmdk";

export function DocsSearch({ ...props }: DialogProps) {
    const [searchValue, setSearchValue] = useState("");
    const [loading , setLoading] = useState(false);

    const filteredDocs = allDocs
        .filter((doc) => {
            const searchContent = doc.title + doc.description + doc.body;
            return searchContent
                .toLowerCase()
                .includes(searchValue.toLowerCase());
        });

    const router = useRouter();

    const [open, setOpen] = useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement &&
                        e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return;
                }

                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    const handleSearchValueChange = (value: string) => {
        setLoading(true);
        setSearchValue(value);
        setLoading(false);
    };

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className="hidden lg:inline-flex">
                    Search documentation...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    value={searchValue}
                    placeholder="Search the docs..."
                    onValueChange={handleSearchValueChange}
                />
                <CommandList>
                    {filteredDocs.length === 0 ? (
                        <CommandEmpty>No results found.</CommandEmpty>
                    ) : loading ? (
                        <CommandLoading>Loading...</CommandLoading>
                    ) 
                     : (
                        filteredDocs.map((doc) => (
                            <CommandItem
                                key={doc.slug}
                                value={doc.title}
                                onSelect={() => {
                                    runCommand(() =>
                                        router.push(doc.slug as string)
                                    );
                                }}
                            >
                                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                    <CircleIcon className="h-3 w-3" />
                                </div>
                                {doc.title}
                            </CommandItem>
                        ))
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}
