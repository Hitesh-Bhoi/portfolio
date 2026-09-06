import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Resume",
  description:
    "Professional resume of Hitesh Bhoi — Full Stack Software Engineer with expertise in React, Next.js, Node.js, MongoDB, and enterprise application development. View education, experience, skills, and projects.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
