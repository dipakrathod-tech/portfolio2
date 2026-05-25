import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - DevOps, Cloud & Web Development",
  description:
    "Explore my portfolio of DevOps automation, AWS cloud infrastructure, Kubernetes deployments, and full-stack web applications. Real-world projects showcasing technical expertise.",
  keywords: [
    "DevOps Projects",
    "Cloud Projects",
    "AWS Projects",
    "Kubernetes Projects",
    "Docker Projects",
    "Web Development Projects",
    "Portfolio",
  ],
  openGraph: {
    title: "Projects - Dipak Rathod",
    description: "DevOps, Cloud & Web Development Projects",
    type: "website",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Dipak Rathod",
    description: "DevOps, Cloud & Web Development Projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
