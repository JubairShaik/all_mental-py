import type { StaticImageData } from "next/image";
import type { ElementType, Ref } from "react";
import type { Media as MediaType } from "@/payload-types";
import type { Icon } from "lucide-react";
import type { Header } from "@/payload-types";
import { Icons } from "@/components/icons";

export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: NavLink[];
      }
);

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        instagram: string;
    };
};

export type DocsConfig = {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};

export type FooterNavItem = SidebarNavItem;

export type FooterConfig = {
    footerNav: NavItem[];
};
export interface MainNavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export type DocsConfig = {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};

export interface Sound {
    name: string;
    url: string;
    icon: Icon;
}

export interface Video {
    name: string;
    slug: string;
    url: string;
    icon: Icon;
}