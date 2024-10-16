"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "./ui/icons"

interface FormCreateButtonProps extends ButtonProps {}

export function FormCreateButton({
  className,
  variant,
  ...props
}: FormCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)

    const response = await fetch("/api/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Form",
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          title: "Unauthorized action.",
          description: "Something bad happened, sorry!",
          variant: "destructive",
        })
      }

      return toast({
        title: "Something went wrong.",
        description: "Your form was not created. Please try again.",
        variant: "destructive",
      })
    }

    const form = await response.json()

    // This forces a cache invalidation.
    router.refresh()

    router.push(`/editor/${form.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New form
    </button>
  )
}