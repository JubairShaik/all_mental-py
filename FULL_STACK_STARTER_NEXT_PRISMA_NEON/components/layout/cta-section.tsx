import { Button, buttonVariants } from "@/components/ui/button";
import { homeConfig } from "@/config/marketing";
import Link from "next/link";
import { SectionWrapper } from "../typography";

export const CTASection = async () => {
  return (
    <SectionWrapper>
      <p className="text-4xl font-extrabold">{homeConfig.heading}</p>
      <p className="text-2xl font-light pb-4">{homeConfig.subHeading}</p>
      <Link href={homeConfig.btnURL}>
        <Button
          className={buttonVariants({
            variant: "default",
            className: "capitalize",
          })}
        >
          {homeConfig.btnText}
        </Button>
      </Link>
    </SectionWrapper>
  );
};
