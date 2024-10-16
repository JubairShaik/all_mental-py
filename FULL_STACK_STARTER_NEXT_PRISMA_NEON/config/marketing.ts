import { Icons } from "@/components/layout/icons";
import { MarketingConfig } from "@/types";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Articles",
      href: "/posts",
    },
  ],
};

export const homeConfig = {
  heading: "Digital Design + Development",
  subHeading: "Based in NYC, delivering worldwide.",
  btnText: "Book a meeting",
  btnURL: "#booking",
};

export const featuresConfig = {
  description:
    "Full Stack Tech offers expert in-house software and IT services so you can get your weather together.",
  features: [
    {
      title: "Get a custom solution to fit your exact needs",
      description:
        "From small business to enterprise, we can come up with a solution to fit your needs and budget.",
      icons: [Icons.proportions, Icons.syringe, Icons.draftingCompass],
    },
    {
      title: "Agile Development",
      description:
        "Our agile development process ensures that your projects are delivered on time and within budget.",
      icons: [Icons.boxes, Icons.ganttChart, Icons.target],
    },
    {
      title: "High Code Quality",
      description:
        "We adhere to best practices and industry standards to deliver high-quality, maintainable code.",
      icons: [Icons.binary, Icons.code, Icons.bookCopy],
    },
    {
      title: "Scalability",
      description:
        "Our solutions are designed to scale with your business, ensuring performance and reliability as you grow.",
      icons: [Icons.scaling, Icons.activity, Icons.calendarCheck],
    },
    {
      title: "Security First",
      description:
        "We prioritize security at every step, from development to deployment, keeping your data safe and secure.",
      icons: [Icons.fingerprint, Icons.siren, Icons.scanEye],
    },
    {
      title: "Cloud Expertise",
      description:
        "Leverage our expertise in cloud technologies to build robust, scalable applications.",
      icons: [Icons.router, Icons.cloudCog, Icons.databaseBackup],
    },
  ],
  extraValue:
    "Full Stack Tech also offers 24/7 Support to meet your organization's response needs",
};

export const bookingConfig = {
  title: "Get Started",
  subtitle: "Let's figure out how to build this product together.",
};
