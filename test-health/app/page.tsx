import { About } from "@/components/layout/about";
import { CTA } from "@/components/layout/cta";
import { FAQs } from "@/components/layout/faqs";
import { BookASession } from "@/components/layout/book-a-session";
export default function HomePage() {
    return (
        <div className="space-y-8">
            <CTA />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                About FelEsia
            </h2>
            <About />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-6">
                Frequently asked questions
            </h2>
            <FAQs />
            <div className="px-4 py-auto max-w-screen-lg space-y-8 mx-auto">
                <h2 className="text-6xl font-bold tracking-tighter  max-w-screen-lg  mx-auto">
                    I&apos;m honored to accompany you on your journey.
                </h2>
                <p className="leading-relaxed text-xl text-muted-foreground max-w-screen-lg mx-auto">
                    Let&apos;s figure it out together. Schedule a{" "}
                    <b>free 15 minute consultation</b> to discuss your needs and
                    goals.
                </p>
                <BookASession />
            </div>
        </div>
    );
}
