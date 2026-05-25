import { IconType } from "react-icons";
import { 
  FaHome, 
  FaLinkedin, 
  FaEnvelope,
  FaReact
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss 
} from "react-icons/si";

// Types
export interface NavbarItem {
  href: string;
  icon: IconType;
  label: string;
}

export interface SocialContact {
  name: string;
  url: string;
  icon: IconType;
}

export interface QuickLink {
  name: string;
  href: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  description: string;
}

export interface TechStackItem {
  name: string;
  icon: IconType;
}

export interface FooterStatus {
  available: boolean;
  message: string;
}

export interface FooterData {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  social: Record<string, SocialLink>;
  quickLinks: QuickLink[];
  techStack: TechStackItem[];
  status: FooterStatus;
}

// Navigation Data
export const navbarItems: NavbarItem[] = [
  { href: "/", icon: FaHome, label: "Home" },
  // { href: "#", icon: FaPenFancy, label: "Blog" },
  // { href: "#", icon: SlDocs, label: "Docs" },
];

export const socialContacts: Record<string, SocialContact> = {
  Email: {
    name: "Email",
    url: "mailto:aishwaryaambilwade.me@gmail.com",
    icon: FaEnvelope,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aishwaryaambilwade/",
    icon: FaLinkedin,
  },
};

export const quickLinks: QuickLink[] = [
  {
    name: "Home",
    href: "/",
    description: "Back to homepage"
  },
  {
    name: "Projects",
    href: "/projects",
    description: "View my work"
  },
  {
    name: "Certifications",
    href: "/certifications",
    description: "My credentials"
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Latest articles"
  },
];

// Social Links Data
export const socialLinks: Record<string, SocialLink> = {
  LinkedIn: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aishwaryaambilwade/",
    icon: FaLinkedin,
    description: "Professional network"
  },
  Email: {
    name: "Email",
    href: "mailto:aishwaryaambilwade.me@gmail.com",
    icon: FaEnvelope,
    description: "Get in touch"
  }
};

// Tech Stack Data
export const techStack: TechStackItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss }
];

// Footer Status Data
export const footerStatus: FooterStatus = {
  available: true,
  message: "Open to opportunities"
};

// Combined Footer Data
export const footerData: FooterData = {
  name: "Aishwarya Dinesh Ambilwade",
  title: "Project Assistant & Accountant",
  description: "Dedicated to leveraging technical skills in Tally, Excel, and data analysis to drive organizational success while pursuing advanced certifications in business analytics.",
  location: "Kannad, Dist. Chhatrapati Sambhaji Nagar, Maharashtra, India",
  email: "aishwaryaambilwade.me@gmail.com",
  phone: "",
  social: socialLinks,
  quickLinks: quickLinks,
  techStack: techStack,
  status: footerStatus
};
