import { IconType } from "react-icons";
import {
  SiMicrosoft,
  SiPowerbi,
} from "react-icons/si";
import {
  IoCheckmarkCircleOutline,
  IoTimeOutline,
  IoAddOutline,
  IoTrophyOutline,
  IoCalculatorOutline,
  IoDocumentOutline,
} from "react-icons/io5";

// Types
export interface CompletedCertification {
  name: string;
  provider: string;
  date: string;
  status: "Completed";
  level: "Foundation" | "Associate" | "Professional" | "Expert";
  icon: IconType;
  description: string;
  skills: string[];
  credentialUrl: string;
  credentialId: string;
  validUntil: string;
}

export interface InProgressCertification {
  name: string;
  provider: string;
  expectedDate: string;
  status: "In Progress";
  level: "Foundation" | "Associate" | "Professional" | "Expert";
  icon: IconType;
  progress: number;
  description: string;
  skills: string[];
  studyMaterials: string[];
}

export interface PlannedCertification {
  name: string;
  provider: string;
  expectedDate: string;
  status: "Planned";
  level: "Foundation" | "Associate" | "Professional" | "Expert";
  icon: IconType;
  description: string;
  skills: string[];
  priority: "High" | "Medium" | "Low";
}

export interface CertificationStat {
  label: string;
  count: number;
  icon: IconType;
}

// Data
export const completedCertifications: CompletedCertification[] = [
  {
    name: "MS-CIT - Maharashtra State Certificate in Information Technology",
    provider: "Maharashtra State",
    date: "2024",
    status: "Completed",
    level: "Foundation",
    icon: SiMicrosoft,
    description: "Comprehensive IT literacy certification covering computer fundamentals, office applications, and digital skills",
    skills: ["Computer Fundamentals", "MS Office", "Internet", "Email", "Digital Literacy"],
    credentialUrl: "#",
    credentialId: "MS-CIT-2024",
    validUntil: "Never expires"
  },
  {
    name: "KLIC Tally Prime with GST & Tally ERP 9",
    provider: "KLIC",
    date: "2025",
    status: "Completed",
    level: "Professional",
    icon: IoCalculatorOutline,
    description: "Advanced Tally accounting software certification covering GST compliance, financial management, and accounting operations",
    skills: ["Tally ERP 9", "Tally Prime", "GST Filing", "Accounting", "Financial Reporting"],
    credentialUrl: "#",
    credentialId: "KLIC-TALLY-2025",
    validUntil: "Never expires"
  }
];

export const inProgressCertifications: InProgressCertification[] = [
  {
    name: "Microsoft Excel Professional Certificate",
    provider: "Microsoft Coursera",
    expectedDate: "2026",
    status: "In Progress",
    level: "Professional",
    icon: SiMicrosoft,
    progress: 75,
    description: "Professional certification in advanced Excel skills including data analysis, visualization, and automation",
    skills: ["Advanced Excel", "Data Analysis", "Financial Modeling", "Data Visualization", "Automation"],
    studyMaterials: ["Microsoft Learning Path", "Coursera Projects", "Practice Exercises"]
  },
  {
    name: "Microsoft Power BI Data Analyst Professional Certificate",
    provider: "Microsoft Coursera",
    expectedDate: "2026",
    status: "In Progress",
    level: "Professional",
    icon: SiPowerbi,
    progress: 60,
    description: "Professional data analyst certification using Power BI for business intelligence and data visualization",
    skills: ["Power BI", "Data Analysis", "Business Intelligence", "Data Visualization", "DAX"],
    studyMaterials: ["Microsoft Power BI Documentation", "Coursera Learning Modules", "Hands-on Projects"]
  }
];

export const plannedCertifications: PlannedCertification[] = [
  {
    name: "Advanced Data Analytics Certification",
    provider: "Professional Institute",
    expectedDate: "2026",
    status: "Planned",
    level: "Professional",
    icon: IoDocumentOutline,
    description: "Advanced certification in business analytics and data analysis",
    skills: ["Data Analysis", "Business Analytics", "Statistical Analysis", "Data Modeling"],
    priority: "High"
  }
];

// Utility functions
export const getLevelColor = (level: string) => {
  switch (level) {
    case "Foundation": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Associate": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Professional": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Expert": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    default: return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "In Progress": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Planned": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    default: return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Medium": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    case "Low": return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
    default: return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
  }
};

// Computed data
export const certificationStats: CertificationStat[] = [
  { label: "Completed", count: completedCertifications.length, icon: IoCheckmarkCircleOutline },
  { label: "In Progress", count: inProgressCertifications.length, icon: IoTimeOutline },
  { label: "Planned", count: plannedCertifications.length, icon: IoAddOutline },
  { label: "Total Goals", count: completedCertifications.length + inProgressCertifications.length + plannedCertifications.length, icon: IoTrophyOutline }
];
