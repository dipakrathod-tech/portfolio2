export interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export const workData: WorkExperience[] = [
  {
    company: "ParamSkills Training India Private Limited (PSTIPL)",
    href: "#",
    badges: ["Full-time"],
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    title: "Project Assistant",
    logoUrl: "/paramskills.png",
    start: "Jan 2024",
    end: "Jun 2025",
    description:
      "Provided full-time dedicated support to organizational objectives and strategic projects. Assisted in project planning, coordination, and successful execution of training initiatives. Collaborated with team to develop and deliver skill development programs. Managed student registration to government portals and maintained comprehensive student records. Handled documentation, reporting, and project tracking using MS Excel and organizational tools.",
  },
  {
    company: "K.T. Joshi Tax & Finance Consultant",
    href: "#",
    badges: ["Full-time"],
    location: "Shrirampur, Maharashtra, India",
    title: "Accountant",
    logoUrl: "/ktjoshi-consultant.png",
    start: "Jul 2025",
    end: "Mar 2026",
    description:
      "Handled day-to-day accounting operations and ensured accurate bookkeeping. Filed GST returns and prepared income tax documents for salaried individuals. Ensured compliance with tax regulations and reconciled bank statements. Maintained ledgers and generated monthly financial reports. Supported senior accountant in preparing financial statements including balance sheets and profit & loss accounts. Assisted with GST filing, TDS calculation, and returns using Tally ERP 9 and MS Excel. Participated in auditing processes and verified financial data from clients. Maintained organized client records and digitized accounting files.",
  },
];