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
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://imhitesh.vercel.app/"),
  applicationName: "Bhoi Hitesh",

  verification: {
    google: "35Iek724jp8dUrHztMdx_ntZLXokufUG47R5yfGOp-Q",
  },

  title: "Hitesh Bhoi | Web Developer | App Development & IT Services",
  description:
    "Hitesh Bhoi — Full Stack Software Engineer providing professional web development, app development, and IT services. Expert in Next.js, React, Node.js, and building scalable web applications.",
  keywords: [
    "web development",
    "app development",
    "web developer",
    "freelance web developer",
    "web development services",
    "IT services",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MERN developer",
    "software engineer",
    "web application development",
    "custom web development",
    "e-commerce development",
    "responsive web design",
  ],

  openGraph: {
    title: "Hitesh Bhoi | Web Developer & App Development Services",
    description:
      "Hi, I’m Bhoi Hitesh — a MERN Stack Developer crafting fast, scalable, and user-friendly web experiences using modern web technologies.",
    url: "https://imhitesh.vercel.app/",
    siteName: "Bhoi Hitesh",
    type: "website",
    images: [
      {
        url: "https://imhitesh.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Bhoi Hitesh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhoi Hitesh | Web Developer",
    description:
      "MERN Stack Developer crafting fast, scalable, and user-friendly web experiences using modern web technologies.",
    images: ["https://imhitesh.vercel.app/og.png"],
    creator: "@hitesh_bhoi", // Replace with actual handle if different
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // We should probably generate this or just use favicon for now
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hitesh Bhoi",
              url: "https://imhitesh.vercel.app/",
              jobTitle: "MERN Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open Source",
              },
              sameAs: [
                "https://github.com/Hitesh-Bhoi",
                "https://www.linkedin.com/in/bhoi-hitesh-332a601a8/",
                "https://www.instagram.com/bhoihitesh1844/",
              ],
              knowsAbout: [
                "Next.js",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MERN Stack Development",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
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
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
