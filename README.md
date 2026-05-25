# 🚀 Dipak Rathod - Portfolio

> A modern, responsive portfolio website showcasing my journey as an aspiring Cloud & DevOps Engineer.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black?style=for-the-badge)](https://ui.shadcn.com/)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌙 Dark/Light Mode**: Toggle between themes with system preference detection
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed
- **🎯 Interactive Elements**: Hover effects, animations, and engaging UI components
- **📧 Contact Integration**: Click-to-copy email/phone functionality
- **🔗 Social Links**: Direct links to professional profiles
- **📄 Projects Showcase**: Detailed project presentations with live demos
- **🏆 Certifications**: Professional credentials and achievements
- **📝 Blog Ready**: Structured for future blog implementation

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion & Magic UI
- **Icons**: Lucide React + Custom SVGs

### Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Build Tool**: Turbopack (Next.js)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects page
│   │   └── certifications/    # Certifications page
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── magicui/          # Magic UI animations
│   │   └── sections/         # Page sections
│   ├── data/                 # Static data (modular)
│   │   ├── work-data.tsx     # Work experience
│   │   ├── education-data.tsx # Education background
│   │   ├── skill-data.tsx    # Skills & technologies
│   │   ├── project-data.tsx  # Projects portfolio
│   │   ├── certification-data.tsx # Certifications
│   │   ├── navigation-links-data.tsx # Navigation & footer
│   │   └── dummy-resume-template.tsx # Template data (unused)
│   └── lib/                  # Utilities
├── public/                   # Static assets
│   ├── favicon.svg          # Custom DR logo
│   └── user-image/          # Profile images
└── components.json          # shadcn/ui config
```

## 🎨 Components & Features

### Core Components

- **Hero Section**: Animated introduction with profile image
- **About Section**: Professional summary and background
- **Skills Section**: Technology stack visualization
- **Projects Section**: Interactive project showcase
- **Certifications**: Professional credentials display
- **Footer**: Contact info with copy-to-clipboard functionality

### UI Components (shadcn/ui)

- Avatar, Badge, Button, Card
- Input, Label, Progress, Tabs
- Tooltip, Separator, Skeleton
- Custom animations and transitions

### Magic UI Enhancements

- Border Beam effects
- Interactive hover buttons
- Rainbow buttons
- Shine borders
- Dock navigation

## 📝 Customization

### Personal Information

Update your details in the respective data files:

```typescript
// src/data/work-data.tsx - Work experience
// src/data/education-data.tsx - Education background
// src/data/skill-data.tsx - Skills and technologies
// src/data/project-data.tsx - Projects portfolio
// src/data/certification-data.tsx - Certifications
// src/data/navigation-links-data.tsx - Contact & social links
```

### Theme Colors

Modify theme colors in `src/app/globals.css`:

```css
:root {
  --primary: your-color;
  --secondary: your-color;
  /* ... other CSS variables */
}
```

### Adding Components

Use shadcn/ui CLI to add new components:

```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Other Platforms

- **Netlify**: `pnpm build` → Deploy `/dist`
- **GitHub Pages**: Use GitHub Actions
- **Docker**: Dockerfile included for containerization

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Bundle Size**: Minimized with Next.js optimization
- **Loading Speed**: < 2s initial load time

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Dipak Rathod**

- 📧 Email: dipakrathod.tech@gmail.com
- 📱 Phone: +91 8888075197
- 🌐 Portfolio: [dipakrathod.me](https://dipakrathod.me)
- 🔗 LinkedIn: [linkedin.com/in/dipakrathod-tech](https://linkedin.com/in/dipakrathod-tech)
- 🐦 Twitter: [@dipak_techy](https://x.com/DipakrathodTech)

---

<p align="center">
  <strong>Built with ❤️ and lots of ☕</strong>
</p>

<p align="center">
  <sub>© 2025 Dipak Rathod. All rights reserved.</sub>
</p>
# portfolio2
