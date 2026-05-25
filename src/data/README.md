# Data Architecture

This directory contains all data files for the portfolio application.

## Production Data Files ✅

These files contain real data and are actively used by components:

- **`work-data.tsx`** - Work experience data
- **`education-data.tsx`** - Education background data  
- **`skill-data.tsx`** - Skills and technologies data
- **`project-data.tsx`** - Projects portfolio data
- **`certification-data.tsx`** - Professional certifications data
- **`navigation-links-data.tsx`** - Navigation, footer, and contact data

## Template/Reference Files 📋

- **`dummy-resume-template.tsx`** - Original template data (NOT used in production)
  - Contains template data from the original portfolio template
  - Kept for reference purposes only
  - No components import from this file

## Component Data Mapping

| Component | Data Source |
|-----------|-------------|
| HeroSection | Hardcoded + navigation-links-data.tsx |
| WorkExperienceSection | work-data.tsx |
| EducationSection | education-data.tsx |
| SkillsSection | skill-data.tsx |
| ProjectsSection | project-data.tsx |
| CertificationsSection | certification-data.tsx |
| Navbar | navigation-links-data.tsx |
| Footer | navigation-links-data.tsx |

## Adding New Data

1. Create a new `.tsx` file in this directory
2. Export TypeScript interfaces for type safety
3. Export the data array/object
4. Import and use in your component
5. Update this README with the new mapping

## Data Format

All data files follow this pattern:

```typescript
// Define interfaces
export interface DataType {
  // properties
}

// Export data
export const dataName: DataType[] = [
  // data objects
];
```