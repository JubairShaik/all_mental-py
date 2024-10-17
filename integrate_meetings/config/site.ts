interface SiteConfig {
  name: string;
  phone?: string;
  email?: string;
  NPI?: string;
  description: string;
  url: string;
  ogImage: string;
  links?: {
    instagram: string;
  };
  mainNav: {
    title: string;
    href: string;
  }[],
  footerNav: {
    title: string;
    href: string;
  }[],
}

export const siteConfig: SiteConfig = {
    name: "FelEsia Rodriguez, LCSW",
    description: "Offering online therapy services to NYC and New York State.",
    url: "https://therapistfelesia.com",
    ogImage: "https://therapistfelesia.com/og.jpg",
    email: "info@therapistfelesia.com",
    NPI: "1457870180",
    phone: "(917) 267-8420",
    mainNav: [
        {
            title: "About Me",
            href: "/about",
        },
        {
            title: "My Approach",
            href: "/my-approach"
        },
        {
            title: "FAQs",
            href: "/faqs"
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ],
  footerNav: [
        {
            title: "About Me",
            href: "/about",
        },
        {
            title: "My Approach",
            href: "/my-approach"
        },
        {
            title: "FAQs",
            href: "/faqs"
        },
        {
            title: "Contact",
            href: "/contact"
        },
  ],
};