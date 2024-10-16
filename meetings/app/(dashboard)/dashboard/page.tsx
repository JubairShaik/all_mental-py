import { redirect } from "next/navigation"

import authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { FormCreateButton } from "@/components/form-create-button"
import { FormItem } from "@/components/form-item"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authConfig?.pages?.signIn || "/login")
  }

  const forms = await db.form.findMany({
      where: {
          completedBy: {
              some: {
                  userId: user.id,
              },
          },
      },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="forms" text="Fill out and manage forms.">
        <FormCreateButton />
      </DashboardHeader>
      <div>
        {forms?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {forms.map((form) => (
              <FormItem key={form.id as string} form={form} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>No forms created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any completed forms yet.
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}