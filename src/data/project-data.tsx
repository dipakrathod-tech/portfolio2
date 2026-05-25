import { IconType } from "react-icons";
import {
  IoCloudOutline,
  IoServerOutline,
  IoCubeOutline,
  IoStatsChartOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";

// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "DevOps" | "Cloud" | "Web" | "AI/ML";
  status: "Completed" | "In Progress";
  demoUrl: string;
  githubUrl: string;
  features: string[];
  impact: string;
  icon: IconType;
  color: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  timeline: string;
  stars: number;
  views: number;
  downloads: number;
}

export interface ProjectStat {
  label: string;
  count: number;
  icon: IconType;
  color: string;
}

// Data
/*
export const devopsProjects: Project[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Automation",
    description: "Complete Infrastructure as Code solution using Terraform and AWS services for scalable web applications. Includes auto-scaling, load balancing, and monitoring with comprehensive CI/CD pipeline integration.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Terraform", "Docker", "Jenkins", "CloudWatch", "ECS", "RDS"],
    category: "DevOps",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Auto-scaling EC2 instances",
      "Application Load Balancer",
      "RDS Multi-AZ deployment",
      "CloudWatch monitoring & alerts",
      "S3 storage with lifecycle policies",
      "VPC with public/private subnets",
      "IAM roles and policies"
    ],
    impact: "Reduced deployment time by 70% and improved system reliability to 99.9% uptime",
    icon: IoCloudOutline,
    color: "currentColor",
    difficulty: "Advanced",
    timeline: "3 months",
    stars: 45,
    views: 1200,
    downloads: 89
  },
  {
    id: 2,
    title: "Kubernetes CI/CD Pipeline",
    description: "Automated deployment pipeline using Jenkins, Docker, and Kubernetes for microservices architecture with rolling updates, health checks, and automated rollbacks.",
    image: "/api/placeholder/600/400",
    technologies: ["Kubernetes", "Jenkins", "Docker", "Helm", "Prometheus", "Grafana", "GitLab"],
    category: "DevOps",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Multi-stage Jenkins pipeline",
      "Container orchestration",
      "Blue-green deployments",
      "Health monitoring",
      "Secret management with Vault",
      "Automated testing integration",
      "Slack notifications"
    ],
    impact: "Achieved 99.9% uptime with zero-downtime deployments",
    icon: IoCubeOutline,
    color: "currentColor",
    difficulty: "Expert",
    timeline: "4 months",
    stars: 67,
    views: 2100,
    downloads: 156
  },
  {
    id: 3,
    title: "Infrastructure Monitoring Stack",
    description: "Real-time monitoring solution using Prometheus, Grafana, and custom metrics for comprehensive infrastructure visibility, alerting, and performance optimization.",
    image: "/api/placeholder/600/400",
    technologies: ["Prometheus", "Grafana", "Python", "Docker", "AlertManager", "Elasticsearch"],
    category: "DevOps",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Custom metrics collection",
      "Real-time dashboards",
      "Multi-channel alerting",
      "Performance analytics",
      "Resource optimization insights",
      "SLA monitoring",
      "Cost tracking"
    ],
    impact: "Reduced incident response time by 60% and prevented 15+ critical issues",
    icon: IoStatsChartOutline,
    color: "currentColor",
    difficulty: "Intermediate",
    timeline: "2 months",
    stars: 32,
    views: 890,
    downloads: 67
  },
  {
    id: 4,
    title: "Multi-Cloud Backup Strategy",
    description: "Automated backup solution with encryption, compression, and multi-cloud storage support across AWS, Azure, and Google Cloud with disaster recovery capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "AWS S3", "Azure Blob", "GCS", "Terraform", "Ansible"],
    category: "DevOps",
    status: "In Progress",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Cross-cloud replication",
      "AES-256 encryption",
      "Incremental backups",
      "Automated testing",
      "Cost optimization",
      "Compliance reporting"
    ],
    impact: "99.99% data durability with 50% cost reduction",
    icon: IoShieldCheckmarkOutline,
    color: "currentColor",
    difficulty: "Advanced",
    timeline: "3 months",
    stars: 28,
    views: 654,
    downloads: 43
  }
];
*/

/*
export const cloudProjects: Project[] = [
  {
    id: 5,
    title: "Serverless API Gateway",
    description: "RESTful API using AWS Lambda, API Gateway, and DynamoDB with JWT authentication, rate limiting, and comprehensive logging for high-scale applications.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Python", "JWT", "CloudFormation"],
    category: "Cloud",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "JWT authentication",
      "Rate limiting",
      "Request validation",
      "Auto-scaling",
      "Cost optimization",
      "Monitoring & logging"
    ],
    impact: "Handles 10K+ requests/second with 99.95% availability",
    icon: IoServerOutline,
    color: "currentColor",
    difficulty: "Intermediate",
    timeline: "6 weeks",
    stars: 89,
    views: 3200,
    downloads: 234
  },
  {
    id: 6,
    title: "Cloud-Native Data Pipeline",
    description: "Real-time data processing pipeline using AWS Kinesis, Lambda, and RedShift for analytics with automated data quality checks and monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS Kinesis", "Lambda", "RedShift", "Python", "Apache Airflow", "Docker"],
    category: "Cloud",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time processing",
      "Data quality validation",
      "Automated workflows",
      "Error handling",
      "Cost monitoring",
      "Performance optimization"
    ],
    impact: "Processes 1M+ events daily with 99.9% accuracy",
    icon: IoServerOutline,
    color: "currentColor",
    difficulty: "Advanced",
    timeline: "8 weeks",
    stars: 56,
    views: 1890,
    downloads: 123
  },
  {
    id: 7,
    title: "Multi-Region Disaster Recovery",
    description: "Comprehensive disaster recovery solution across multiple AWS regions with automated failover, data replication, and recovery testing.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Route 53", "RDS", "S3", "CloudFormation", "Lambda"],
    category: "Cloud",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Cross-region replication",
      "Automated failover",
      "RTO < 15 minutes",
      "RPO < 5 minutes",
      "Regular DR testing",
      "Cost optimization"
    ],
    impact: "Achieved 99.99% availability with minimal data loss",
    icon: IoShieldCheckmarkOutline,
    color: "currentColor",
    difficulty: "Expert",
    timeline: "10 weeks",
    stars: 42,
    views: 1456,
    downloads: 78
  }
];
*/

/*
export const webProjects: Project[] = [
  {
    id: 8,
    title: "DevOps Portfolio Website",
    description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring responsive design, dark mode, and optimized performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Motion"],
    category: "Web",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Responsive design",
      "Dark/light mode",
      "SEO optimized",
      "Performance optimized",
      "Accessibility compliant",
      "Modern animations"
    ],
    impact: "100% Lighthouse score with excellent user experience",
    icon: IoGlobeOutline,
    color: "currentColor",
    difficulty: "Intermediate",
    timeline: "4 weeks",
    stars: 123,
    views: 5670,
    downloads: 345
  },
  {
    id: 9,
    title: "Real-time Monitoring Dashboard",
    description: "Interactive web dashboard for infrastructure monitoring with real-time updates, custom alerts, and comprehensive reporting capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "WebSocket", "Node.js", "MongoDB", "Docker"],
    category: "Web",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time updates",
      "Interactive charts",
      "Custom alerting",
      "Export capabilities",
      "Multi-user support",
      "Mobile responsive"
    ],
    impact: "Improved monitoring efficiency by 80%",
    icon: IoStatsChartOutline,
    color: "currentColor",
    difficulty: "Advanced",
    timeline: "6 weeks",
    stars: 67,
    views: 2340,
    downloads: 189
  },
  {
    id: 10,
    title: "API Documentation Portal",
    description: "Comprehensive API documentation website with interactive examples, authentication testing, and automated documentation generation.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "OpenAPI", "Swagger", "TypeScript", "Docusaurus"],
    category: "Web",
    status: "In Progress",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Interactive API testing",
      "Auto-generated docs",
      "Code examples",
      "Authentication flows",
      "Version management",
      "Search functionality"
    ],
    impact: "Reduced developer onboarding time by 50%",
    icon: IoCodeOutline,
    color: "currentColor",
    difficulty: "Intermediate",
    timeline: "5 weeks",
    stars: 34,
    views: 1230,
    downloads: 89
  }
];
*/

/*
export const aimlProjects: Project[] = [
  {
    id: 11,
    title: "Infrastructure Anomaly Detection",
    description: "Machine learning system for detecting infrastructure anomalies using time-series analysis, automated alerting, and predictive maintenance capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "Pandas", "Prometheus", "Docker", "Kubernetes"],
    category: "AI/ML",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Time-series analysis",
      "Anomaly detection",
      "Predictive alerts",
      "Real-time processing",
      "Model versioning",
      "Performance metrics"
    ],
    impact: "Prevented 25+ critical incidents and reduced downtime by 40%",
    icon: IoBulbOutline,
    color: "currentColor",
    difficulty: "Expert",
    timeline: "12 weeks",
    stars: 78,
    views: 2890,
    downloads: 167
  },
  {
    id: 12,
    title: "Automated Log Analysis",
    description: "AI-powered log analysis system using NLP for intelligent error detection, categorization, and automated incident creation with sentiment analysis.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "NLTK", "scikit-learn", "Elasticsearch", "Kibana", "FastAPI"],
    category: "AI/ML",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "NLP processing",
      "Error categorization",
      "Automated tickets",
      "Trend analysis",
      "Real-time alerts",
      "Custom models"
    ],
    impact: "Reduced manual log analysis time by 85%",
    icon: IoSettingsOutline,
    color: "currentColor",
    difficulty: "Advanced",
    timeline: "8 weeks",
    stars: 45,
    views: 1670,
    downloads: 123
  },
  {
    id: 13,
    title: "Performance Prediction Model",
    description: "Machine learning model for predicting application performance issues before they occur, with automated scaling recommendations and capacity planning.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "PyTorch", "MLflow", "Grafana", "PostgreSQL", "Redis"],
    category: "AI/ML",
    status: "In Progress",
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Performance prediction",
      "Capacity planning",
      "Auto-scaling recommendations",
      "Model monitoring",
      "A/B testing",
      "Feature engineering"
    ],
    impact: "Improved resource utilization by 35% with proactive scaling",
    icon: IoStatsChartOutline,
    color: "currentColor",
    difficulty: "Expert",
    timeline: "16 weeks",
    stars: 23,
    views: 890,
    downloads: 56
  }
];
*/

/*
// Computed data
export const allProjects: Project[] = [...devopsProjects, ...cloudProjects, ...webProjects, ...aimlProjects];

export const projectStats: ProjectStat[] = [
  { label: "Total Projects", count: allProjects.length, icon: IoCodeSlashOutline, color: "currentColor" },
  { label: "Completed", count: allProjects.filter(p => p.status === "Completed").length, icon: IoRocketOutline, color: "currentColor" },
  { label: "In Progress", count: allProjects.filter(p => p.status === "In Progress").length, icon: IoSettingsOutline, color: "currentColor" },
  { label: "Technologies", count: 35, icon: IoLayersOutline, color: "currentColor" }
];

// Utility functions
export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "#22C55E";
    case "Intermediate": return "#F59E0B";
    case "Advanced": return "#EF4444";
    case "Expert": return "#8B5CF6";
    default: return "#6B7280";
  }
};

export const getTechIcon = (tech: string) => {
  const techIcons: { [key: string]: IconType } = {
    "AWS": SiAmazon,
    "Docker": SiDocker,
    "React": SiReact,
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Linux": SiLinux,
    "Kubernetes": IoCubeOutline,
    "Jenkins": IoSettingsOutline,
    "Terraform": IoCloudOutline,
    "GitHub": SiGithub,
    "Next.js": SiReact,
    "TypeScript": SiJavascript,
    "Java": SiJavascript,
  };
  return techIcons[tech] || IoCodeSlashOutline;
};
*/

// Temporary empty exports to prevent build errors
export const devopsProjects: Project[] = [];
export const cloudProjects: Project[] = [];
export const webProjects: Project[] = [];
export const aimlProjects: Project[] = [];
export const allProjects: Project[] = [];
export const projectStats: ProjectStat[] = [];
export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "#22C55E";
    case "Intermediate": return "#F59E0B";
    case "Advanced": return "#EF4444";
    case "Expert": return "#8B5CF6";
    default: return "#6B7280";
  }
};
export const getTechIcon = (_tech: string) => IoCodeSlashOutline;
