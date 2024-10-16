import { DashboardHeader } from "@/components/header"
import { FormCreateButton } from "@/components/form-create-button"
import { FormItem } from "@/components/form-item"
import { DashboardShell } from "@/components/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Forms" text="Create and manage forms.">
        <FormCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <FormItem.Skeleton />
        <FormItem.Skeleton />
        <FormItem.Skeleton />
        <FormItem.Skeleton />
        <FormItem.Skeleton />
      </div>
    </DashboardShell>
  )
}