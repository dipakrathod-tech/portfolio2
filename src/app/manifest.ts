import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // Full name of the application (max 30 chars recommended)
    name: "Aishwarya Ambilwade - Project Assistant & Accountant",

    // Short name for home screen (max 12 chars recommended)
    short_name: "Aishwarya",

    // Detailed description for app stores and search engines
    description:
      "Professional portfolio showcasing accounting expertise, GST compliance, financial management, Tally ERP skills, and project assistance experience. Explore certifications, work experience, and technical accounting skills.",

    // Starting URL when app is launched
    start_url: "/",

    // Scope of navigation - all pages under root
    scope: "/",

    // Display mode for optimal user experience
    display: "standalone", // Makes it feel like a native app

    // Orientation preference
    orientation: "portrait-primary",

    // Theme color - matches your dark theme primary color
    theme_color: "#0a0a0a", // Dark background

    // Background color shown during app launch
    background_color: "#0a0a0a", // Matches dark theme

    // Application category for app stores
    categories: ["business", "productivity", "finance"],

    // Language and text direction
    lang: "en-US",
    dir: "ltr",

    // Comprehensive icon set for all devices and contexts
    icons: [
      // Favicon formats - SVG for scalability
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      // Standard PNG icons for Android
      {
        src: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      // Maskable icons for adaptive icons on Android
      {
        src: "/maskable-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "/maskable-icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
      // Apple Touch Icons
      {
        src: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
      // Additional common sizes
      {
        src: "/icon-72x72.png",
        type: "image/png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "/icon-96x96.png",
        type: "image/png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "/icon-128x128.png",
        type: "image/png",
        sizes: "128x128",
        purpose: "any",
      },
      {
        src: "/icon-144x144.png",
        type: "image/png",
        sizes: "144x144",
        purpose: "any",
      },
      {
        src: "/icon-152x152.png",
        type: "image/png",
        sizes: "152x152",
        purpose: "any",
      },
      {
        src: "/icon-384x384.png",
        type: "image/png",
        sizes: "384x384",
        purpose: "any",
      },
    ],

    // Screenshots for app stores and install prompts
    screenshots: [
      {
        src: "/screenshots/desktop-home.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
        label: "Portfolio Homepage - Desktop View",
      },
      {
        src: "/screenshots/mobile-home.png",
        type: "image/png",
        sizes: "750x1334",
        form_factor: "narrow",
        label: "Portfolio Homepage - Mobile View",
      },
      {
        src: "/screenshots/projects.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
        label: "Projects Showcase",
      },
      {
        src: "/screenshots/certifications.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
        label: "Professional Certifications",
      },
    ],

    // Related applications (optional - for app store presence)
    // related_applications: [],
    // prefer_related_applications: false,

    // Shortcuts for quick access to key features
    shortcuts: [
      {
        name: "View Projects",
        short_name: "Projects",
        description: "Browse my portfolio of DevOps and Cloud projects",
        url: "/projects",
        icons: [
          {
            src: "/shortcuts/projects-icon.png",
            type: "image/png",
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Certifications",
        short_name: "Certs",
        description: "View my professional certifications",
        url: "/certifications",
        icons: [
          {
            src: "/shortcuts/certifications-icon.png",
            type: "image/png",
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Download Resume",
        short_name: "Resume",
        description: "Download my resume PDF",
        url: "/resume.pdf",
        icons: [
          {
            src: "/shortcuts/resume-icon.png",
            type: "image/png",
            sizes: "96x96",
          },
        ],
      },
    ],

    // Share target for native sharing (optional but powerful for PWAs)
    // share_target: {
    //   action: "/share",
    //   method: "POST",
    //   enctype: "multipart/form-data",
    //   params: {
    //     title: "title",
    //     text: "text",
    //     url: "url",
    //   },
    // },

    // Protocol handlers (optional)
    // protocol_handlers: [
    //   {
    //     protocol: "web+portfolio",
    //     url: "/?portfolio=%s",
    //   },
    // ],

    // IARC rating ID (if applicable for app stores)
    // iarc_rating_id: "your-iarc-rating-id",
  };
}
