import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications - Cloud & DevOps Credentials",
  description:
    "Professional cloud computing and DevOps certifications including AWS, Azure, Kubernetes, Docker, and industry-recognized credentials showcasing technical expertise.",
  keywords: [
    "AWS Certification",
    "Cloud Certifications",
    "DevOps Certifications",
    "Kubernetes Certification",
    "Docker Certification",
    "Professional Credentials",
  ],
  openGraph: {
    title: "Certifications - Dipak Rathod",
    description: "Cloud & DevOps Professional Certifications",
    type: "website",
    url: "/certifications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications - Dipak Rathod",
    description: "Cloud & DevOps Professional Certifications",
  },
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
