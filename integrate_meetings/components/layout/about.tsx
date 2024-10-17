import Image from "next/image";
import { Separator } from "../ui/separator";

export const About = () => {
    return (
        <section className="max-w-screen-md mx-auto space-y-2 p-6">
            <div className="flex flex-col justify-center space-y-4 max-w-screen-lg">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image
                        src="/images/headshot.png"
                        alt="FelEsia Rodriguez"
                        width={1108}
                        height={1108}
                        className="rounded-full mx-auto w-72 h-fit"
                    />
                    <div className="inline-flex">
                        <Separator
                            orientation="vertical"
                            className="hidden h-full mr-6 md:block"
                        />
                        <p className="leading-loose text-xl text-muted-foreground max-w-screen-lg">
                            FelEsia Rodriguez is a licensed therapist with over
                            10 years of experience. She specializes in helping
                            individuals and couples overcome challenges and
                            build stronger, healthier relationships. Her
                            compassionate approach and evidence-based techniques
                            have helped countless clients achieve personal
                            growth and emotional well-being.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
