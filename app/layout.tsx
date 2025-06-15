import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResearchX - Decentralized Knowledge IP Registry",
  description:
    "Powering collaborative science and education through on-chain IP and programmable licensing",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="w-full bg-blue-400/60 text-blue-100 font-semibold text-sm md:text-base text-center px-4 py-2 shadow-sm mb-4">
            🚧 This is just our MVP — a glimpse into the idea. We're building
            out the full platform next.
          </div>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
