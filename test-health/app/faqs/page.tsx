import { FAQs } from "@/components/layout/faqs";
import Link from "next/link";
import { siteConfig } from "@/config/site";
export default function FAQsPage() {
    return (
        <div className="space-y-4 container mx-auto p-12 md:px-0">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                Frequently asked questions
                </h2>
            <FAQs />
            <p className="text-lg text-muted-foreground py-4 text-center">
            If you have any other questions, feel free to give me a call at <Link className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link> or email me at <Link className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
            </p>
            <p className="text-lg text-muted-foreground py-4 text-center">
            You can also <Link className="underline" href="/contact">schedule a 15-minute call with me</Link> if you prefer.
            </p>
        </div>
    );
}
