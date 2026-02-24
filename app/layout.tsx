import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  verification: {
    google: "JW3afhQrjbgq-WfdbI-XknS2QBnzuax1vcaM0UJO5hg",
  },
  title: "Hitesh Bhoi | Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in Next.js, React, Node.js, Express & MongoDB. Portfolio, projects, and contact details.",
  keywords: [
    "Hitesh Bhoi",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Hitesh Bhoi | MERN Stack Developer",
    description:
      "Portfolio website of Hitesh Bhoi, a MERN Stack Developer.",
    url: "https://hiteshdev.vercel.app",
    siteName: "Hitesh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
