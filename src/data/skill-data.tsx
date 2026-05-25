import { IconType } from "react-icons";
import {
  SiMicrosoft,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";
import {
  IoCalculatorOutline,
  IoDocumentOutline,
  IoBarChartOutline,
  IoCheckmarkCircleOutline,
  IoPieChartOutline,
  IoServerOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// Types
export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Tool {
  name: string;
  icon: IconType;
  color: string;
}

export interface Certification {
  name: string;
  status: "In Progress" | "Planning";
  icon: IconType;
  color: string;
}

// Skill Categories Data
export const skillCategories: SkillCategory[] = [
  {
    title: "Accounting Software",
    description: "Specialized accounting and compliance tools",
    skills: [
      { name: "Tally ERP 9", level: "Advanced", icon: IoCalculatorOutline, color: "currentColor" },
      { name: "Tally Prime", level: "Advanced", icon: IoCalculatorOutline, color: "currentColor" },
      { name: "GST Filing", level: "Advanced", icon: IoDocumentOutline, color: "currentColor" },
      { name: "TDS Calculation", level: "Advanced", icon: IoCalculatorOutline, color: "currentColor" },
    ]
  },
  {
    title: "Technical Skills",
    description: "Data analysis and spreadsheet applications",
    skills: [
      { name: "MS Excel (Advanced)", level: "Advanced", icon: SiMicrosoft, color: "currentColor" },
      { name: "Power BI", level: "Intermediate", icon: SiPowerbi, color: "currentColor" },
      { name: "Data Visualization", level: "Intermediate", icon: IoBarChartOutline, color: "currentColor" },
      { name: "Financial Analysis", level: "Intermediate", icon: IoPieChartOutline, color: "currentColor" },
    ]
  },
  {
    title: "Accounting Operations",
    description: "Core accounting and compliance expertise",
    skills: [
      { name: "Income Tax Documentation", level: "Advanced", icon: IoDocumentOutline, color: "currentColor" },
      { name: "Bank Reconciliation", level: "Advanced", icon: IoCheckmarkCircleOutline, color: "currentColor" },
      { name: "Financial Statements", level: "Advanced", icon: IoBarChartOutline, color: "currentColor" },
      { name: "Bookkeeping", level: "Advanced", icon: IoCalculatorOutline, color: "currentColor" },
    ]
  },
  {
    title: "Analytical & Soft Skills",
    description: "Problem-solving and team collaboration",
    skills: [
      { name: "Problem-solving", level: "Advanced", icon: IoSettingsOutline, color: "currentColor" },
      { name: "Financial Planning", level: "Intermediate", icon: IoPieChartOutline, color: "currentColor" },
      { name: "Adaptability", level: "Advanced", icon: IoServerOutline, color: "currentColor" },
      { name: "Team Collaboration", level: "Advanced", icon: IoCheckmarkCircleOutline, color: "currentColor" },
    ]
  }
];

// Tools Data
export const tools: Tool[] = [
  { name: "GitHub", icon: SiGithub, color: "currentColor" },
  { name: "AWS", icon: SiAmazon, color: "currentColor" },
  { name: "Docker", icon: SiDocker, color: "currentColor" },
  { name: "Python", icon: SiPython, color: "currentColor" },
  { name: "Linux", icon: SiLinux, color: "currentColor" },
  { name: "React", icon: SiReact, color: "currentColor" },
  { name: "Node.js", icon: SiNodedotjs, color: "currentColor" },
  { name: "Git", icon: SiGit, color: "currentColor" },
];


// Utility Functions
export const getLevelColor = (_level: string): string => {
  return "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20";
};

export const getCategoryIcon = (categoryTitle: string): IconType => {
  switch (categoryTitle) {
    case "Cloud Platforms":
      return IoCloudOutline;
    case "DevOps & Tools":
      return IoSettingsOutline;
    case "Programming":
      return IoCodeSlashOutline;
    case "Infrastructure":
      return IoServerOutline;
    default:
      return IoRocketOutline;
  }
};
