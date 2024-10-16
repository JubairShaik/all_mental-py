import Link from "next/link";

import { siteConfig } from "@/config/site";

import { cal } from "@/lib/calendar";
import { env } from "@/env.mjs";
import { Icons } from "@/components/ui/icons";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { UpcomingEvents } from "@/components/layout/marketing/upcoming-events";

interface EventParams {
    calendarId: string;
    timeMin: string;
    maxResults: number;
    singleEvents: boolean;
    orderBy: string;
}
export default async function IndexPage() {
    const getEvents = async () => {
        const params: EventParams = {
            calendarId: env.GOOGLE_CALENDAR_ID,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: "startTime",
        };
        const events = await cal.events.list(params);
        return events.data.items;
    };

    const events = await getEvents();

    return (
        <>
            <section className="pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href={siteConfig.links.instagram}
                        className={badgeVariants({ variant: "default" })}
                        target="_blank"
                    >
                        <Icons.twitter className="w-4 h-4 mr-2" />
                        @neighborhoodgram
                    </Link>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        All <span>the neighborhood news</span>
                        <span className="text-pink-500"> in one place</span>.
                    </h1>
                    {events && <UpcomingEvents events={events} />}
                </div>
            </section>
            <section className="container dark:bg-transparent">
                <div className="mx-auto grid justify-center gap-4 grid-cols-2 max-w-screen-lg">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Parents</h3>
                                <p className="text-sm">
                                    I am a parent of a current student at TNS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Faculty</h3>
                                <p className="text-sm text-muted-foreground">
                                    I am a faculty member at TNS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 mx-auto text-center md:max-w-screen-lg space-y-4">
                    <p className="font-sans text-2xl font-extrabold">
                        Want to help fund the 2024-2025 school year?
                    </p>
                    <Link
                        href={siteConfig.links.donate}
                        target="_blank"
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                        })}
                    >
                        Make a donation to TNS PTA
                    </Link>
                </div>
            </section>
        </>
    );
}
