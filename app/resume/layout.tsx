import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Resume & CV | Full Stack Developer",
  description:
    "Download the resume of Hitesh Bhoi — a Full Stack Software Engineer with 3+ years of experience in web development, app development, and IT services. View complete CV and credentials.",
  keywords: [
    "resume",
    "CV",
    "full stack developer",
    "web developer resume",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Hitesh Bhoi | Resume & CV",
    description:
      "Full Stack Developer resume with 3+ years of professional experience in web and app development.",
    url: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
