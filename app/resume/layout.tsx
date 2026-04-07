import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Bhoi Hitesh - MERN Stack Developer",
  description: "Professional resume of Bhoi Hitesh, a MERN Stack Developer specializing in MERN Tech, and AI-enabled solutions. View technical skills, experience, and education.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
