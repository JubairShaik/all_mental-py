import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function MyApproach() {
    return (
        <div className="space-y-4 container mx-auto p-12 md:px-0">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize text-center py-4">My Approach</h2>
            <p className="text-lg">
                I believe that the therapeutic relationship is a microcosm that
                provides information about ways of being and patterns of
                interaction that are ripe for exploration. My job as your
                therapist is to help clear the haze of uncertainty and work with
                you to develop a clearer map of your life.
            </p>

            <p className="text-lg">
                I come to you with over a decade of professional experience in
                mental health and community social work, and my work as a
                therapist is also colored by my lived experience and my own
                intersecting identities. I am not a blank slate.
            </p>

            <p className="text-lg">
                My approach is informal and relational. You can expect a warm
                and authentic therapeutic experience, which may include loving
                confrontation through asking tough questions with a touch of
                humor as well. To encourage clients to share in a genuine, human
                way, I bring these qualities to session as a therapist. In our
                first conversations, we will discuss your motivation for
                choosing therapy at this time in your life and decide on some
                goals to work on together.
            </p>


            <p className="text-lg">
                If you think this may be a good fit and are interested in
                hearing more, please feel free to <Link href="/contact" className="underline">schedule a free 15 minute
                phone consultation</Link> through my calendar. Thank you for making
                time to share a deeply intimate, human experience with me and
                taking the first step in taking care of you.
            </p>
        </div>
    );
}
