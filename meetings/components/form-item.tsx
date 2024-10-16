import Link from "next/link"
import { CompletedForm, Form } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { FormOperations } from "./form-operations"

interface FormItemProps {
    form: Pick<Form, "id" | "createdAt" | "title">;
}

export function FormItem({ form }: FormItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${form.id}`}
          className="font-semibold hover:underline"
        >
          {form.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(form.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <FormOperations form={{ id: form.id, title: form.title }} />
    </div>
  )
}

FormItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}