import { redirect } from "next/navigation";
import authConfig from "@/auth.config";
import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { UserNameForm } from "@/components/forms/user-name-form";

export const metadata = {
    title: "Settings",
    description: "Manage account and website settings.",
};

export default async function SettingsPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect(authConfig?.pages?.signIn || "/login");
    }

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Settings"
                text="Manage account and website settings."
            />
            <div className="grid gap-10">
                <UserNameForm user={user} />
            </div>
        </DashboardShell>
    );
}
