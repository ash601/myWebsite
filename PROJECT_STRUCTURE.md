# Project Structure

**Last Updated:** July 27, 2025  
**Project:** Future Site - Next.js Application

## Directory Tree

```
future-site/
├── .cursor/                    # Cursor IDE configuration
│   └── rules/
│       └── mustfollow.mdc     # File structure & design system rules
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                        # Source code directory
│   ├── app/                    # Next.js app directory (App Router)
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form API
│   │   │       └── route.ts    # Contact API endpoint
│   │   ├── contact/            # Contact page
│   │   │   └── page.tsx        # Contact page component
│   │   ├── portfolio/          # Portfolio page
│   │   │   └── page.tsx        # Portfolio page with glass UI
│   │   ├── favicon.ico         # App favicon
│   │   ├── globals.css         # Global styles & design system
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page component
│   ├── components/             # Reusable components
│   │   ├── myUis/             # Custom UI components
│   │   │   ├── brand-input.tsx # Branded input component
│   │   │   ├── glass-card.tsx  # Glass morphism card component
│   │   │   └── primary-button.tsx # Primary button component
│   │   └── ui/                # Base UI components (shadcn/ui)
│   │       ├── button.tsx      # Button component
│   │       ├── card.tsx        # Card component
│   │       └── input.tsx       # Input component
│   └── lib/                    # Utility functions
│       └── utils.ts            # Common utilities and helpers
├── components.json             # shadcn/ui configuration
├── Design.json                 # Futuristic design system specification
├── eslint.config.mjs          # ESLint configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── postcss.config.mjs         # PostCSS configuration
├── PROJECT_STRUCTURE.md       # This file - project structure documentation
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

## Directory Descriptions

### `/src/app/`
Next.js App Router directory containing the main application structure with layouts, pages, and global styles implementing the futuristic design system.

### `/src/components/`
**myUis/**: Custom-built UI components specific to this project with branded styling following Design.json specifications.  
**ui/**: Base UI components from shadcn/ui library adapted for the futuristic design system.

### `/src/lib/`
Utility functions and helper modules shared across the application.

### `/public/`
Static assets served directly by Next.js including SVG icons and images.

### `/.cursor/`
IDE-specific configuration for Cursor editor including file structure management and design system enforcement rules.

## Design System Files

### `Design.json`
Complete design system specification containing:
- Color palette and brand colors
- Typography scales and font definitions  
- Component styling rules and states
- Visual effects and animations
- Implementation guidelines and restrictions

### `globals.css`
CSS implementation of the design system featuring:
- CSS custom properties for theming
- Futuristic glass morphism effects
- Predefined component classes
- Animation keyframes and transitions

## File Count Summary
- **Total Components**: 7 (4 custom + 3 base UI)
- **Configuration Files**: 7
- **Design System Files**: 2 (Design.json + globals.css)
- **Static Assets**: 5 SVG files
- **Source Files**: 12 TypeScript/TSX files
- **Documentation**: 2 (README.md + PROJECT_STRUCTURE.md)

---
*This file is automatically maintained according to project structure rules.* 