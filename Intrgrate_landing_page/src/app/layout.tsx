import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import FloatingButton from "./components/FloatingButton/FloatingButton";

export const metadata: Metadata = {
  title: "Koru",
  description: "Cultivating gratitude through self-reflection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased">
            <Hero />
            {children}
            <FloatingButton />
            <Footer />
      </body>
    </html>
  );
}
