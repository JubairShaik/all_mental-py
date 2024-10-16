import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PTABudgetChart } from "./charts/pta-budget";
import Link from "next/link";
import DonateForm from "./forms/donate-form";

export default function DonateSection() {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
                <div>
                    <h1 className="text-6xl font-extrabold mb-4 capitalize">
                        Your donations empower us to protect our children.
                    </h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Thanks to community efforts, we&apos;ve successfully
                        lobbied to{" "}
                        <b>reduce the number of lockdown drills in schools</b>,
                        a change that was{" "}
                        <Link
                            href="https://www.whitehouse.gov/briefing-room/presidential-actions/2024/09/26/executive-order-on-combating-emerging-firearms-threats-and-improving-school-based-active-shooter-drills/#:~:text=Sec.%204.%C2%A0%20Understanding%20and,to%2C%20active%2Dshooter%20drills."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-foreground"
                        >
                            recently signed into law by the White House
                        </Link>
                        . Together, we can keep pushing for sensible policies
                        that{" "}
                        <b>
                            prioritize the safety and emotional health of our
                            students
                        </b>
                        .
                    </p>
                    <p className="text-lg text-muted-foreground mb-4">
                        Your support also helps us offer services that fulfill
                        our school mission of providing social-emotional
                        wellness, advancing our{" "}
                        <b>anti-bias/anti-racist curriculum</b>, and sustaining
                        a student-to-teacher ratio that ensures{" "}
                        <b>
                            every child receives the attention and care they
                            deserve
                        </b>
                        .
                    </p>
                    <h2 className="text-2xl font-semibold mb-2 capitalize">
                        PTA funds go towards:
                    </h2>
                    <PTABudgetChart />
                </div>
            </div>
            <div>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="leading-loose">
                            Your donation is fully tax deductible; the
                            Neighborhood School PTA is a 501(c)(3) charitable
                            organization.
                        </CardTitle>
                        <CardDescription>
                            Donations big and small allow TNS to continue our
                            incredible mission and create a safe and nurturing
                            environment for our children. The PTA raises money
                            to fund so many of the programs and partnerships
                            that make TNS so very special!
                        </CardDescription>
                    </CardHeader>
                    <DonateForm />
                </Card>
            </div>
        </div>
    );
}
