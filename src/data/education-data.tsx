export interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export const educationData: Education[] = [
  {
    school: "C.D. Jain College of Commerce",
    href: "https://cdjaincollegeshrirampur.org",
    degree: "M.COM (Master of Commerce)",
    logoUrl: "/cdjain-college.png",
    start: "2024",
    end: "Jul 2026",
    description: "Advanced commerce education with focus on financial management, GST compliance, accounting standards, and business analytics. CGPA: 8.92/10"
  },
  {
    school: "C.D. Jain College of Commerce",
    href: "https://cdjaincollegeshrirampur.org",
    degree: "B.COM (Bachelor of Commerce)",
    logoUrl: "/cdjain-college.png",
    start: "2021",
    end: "April 2024",
    description: "Comprehensive commerce education covering accounting principles, taxation, business law, economics, and financial management"
  },
];