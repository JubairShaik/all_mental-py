import { BookingForm } from "@/components/layout/booking-form";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-4">
                Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground py-4 text-center">
                Book a free 15-minute consultation call.  We&apos;ll discuss your goals, your schedule, and what I can do to help.
            </p>
            <BookingForm />
            <p className="text-lg text-muted-foreground py-4 text-center">
            You can also give me a call at <Link className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link> or email me at <Link className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
            </p>
        </div>
    );
}
