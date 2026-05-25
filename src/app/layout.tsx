import { GridSmallBackground } from "@/components/grid-small-background";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aishwaryaambilwade.me"
  ),
  title: {
    default: "Aishwarya Ambilwade - Project Assistant & Accountant",
    template: "%s | Aishwarya Ambilwade",
  },
  description:
    "Dedicated Project Assistant and Accountant with strong expertise in accounting operations, GST compliance, and financial management. Specialized in Tally ERP, Excel analysis, and financial reporting.",
  keywords: [
    "Aishwarya Ambilwade",
    "Project Assistant",
    "Accountant",
    "GST Compliance",
    "Tally ERP 9",
    "Tally Prime",
    "Excel",
    "Financial Analysis",
    "Accounting Software",
    "Income Tax",
    "Bank Reconciliation",
    "Portfolio",
  ],
  authors: [{ name: "Aishwarya Ambilwade", url: "https://aishwaryaambilwade.me" }],
  creator: "Aishwarya Ambilwade",
  publisher: "Aishwarya Ambilwade",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Aishwarya Ambilwade Portfolio",
    title: "Aishwarya Ambilwade - Project Assistant & Accountant",
    description:
      "Dedicated Project Assistant and Accountant with strong expertise in accounting operations, GST compliance, and financial management. Specialized in Tally ERP, Excel analysis, and financial reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishwarya Ambilwade - Project Assistant & Accountant",
    description:
      "Dedicated Project Assistant and Accountant with strong expertise in accounting operations, GST compliance, and financial management. Specialized in Tally ERP, Excel analysis, and financial reporting.",
    creator: "@aishwaryaambilwade",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dipak Rathod",
    jobTitle: "Cloud & DevOps Engineer",
    description:
      "Passionate about building scalable solutions and optimizing cloud infrastructure",
    url: "https://dipakrathod.me",
    sameAs: [
      "https://github.com/dipakrathod-tech",
      "https://linkedin.com/in/dipakrathod",
    ],
    knowsAbout: [
      "Cloud Computing",
      "DevOps",
      "AWS",
      "Kubernetes",
      "Docker",
      "Infrastructure as Code",
      "CI/CD",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <meta name="google-site-verification" content="mLUnElGnC5mG6DjUX35SEUQ9M5CFwJ_UIlwiWmPFbQA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <GridSmallBackground>
              {/* div is the main content area */}
              <div className="w-[100%] sm:w-[80%] mx-auto">
                {children}
                <Navbar />
              </div>
              <Footer />
            </GridSmallBackground>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
