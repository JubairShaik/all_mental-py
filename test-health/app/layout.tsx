import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/toaster";
import { AudioMixer } from "@/components/layout/audio-mixer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FelEsia Rodriguez, LCSW",
    description: "Licensed Family Therapist in New York",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground font-sans antialiased",
                    inter.className
                )}
            >
                <Header />
                <div className="flex-grow">
                    {children}
                    <Analytics />
                </div>
                <SiteFooter />
                {/* <AudioMixer /> */}
                <Toaster />
                <TailwindIndicator />
            </body>
        </html>
    );
}
