# Replit.md

## Overview

This is a full-stack UX designer portfolio application built with modern web technologies. The application showcases a professional portfolio website for a UX designer named Sudhakar, featuring project showcases, services, skills, resume information, and a contact form. The architecture follows a clean separation between frontend (React/Vite) and backend (Express.js), with a PostgreSQL database for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application uses a **monorepo structure** with three main directories:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common TypeScript types and schemas

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot-reload enabled with custom Vite integration

## Key Components

### Frontend Components
1. **Navigation** - Sticky header with smooth scrolling navigation
2. **Hero Section** - Main landing area with call-to-action buttons
3. **Projects Section** - Portfolio showcase with project details
4. **Services Section** - UX services offered with feature lists
5. **Skills Section** - Technical skills and tools categorized display
6. **Resume Section** - Work experience and skills visualization
7. **Contact Section** - Contact form with validation and submission
8. **Footer** - Social links and site navigation

### Backend Routes
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve all contact messages (admin)

### UI System
- **Design System**: shadcn/ui components with consistent theming
- **Color Scheme**: Primary (purple), Secondary (purple variant), Accent (green)
- **Typography**: Custom font weights and sizes
- **Responsive**: Mobile-first responsive design

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Form validation (Zod) → API request → Database storage → Success response
   
2. **Data Persistence**:
   - Currently uses in-memory storage (`MemStorage` class)
   - Database schema defined but not actively connected
   - Ready for PostgreSQL integration via Drizzle ORM

3. **State Management**:
   - TanStack Query manages server state and caching
   - Local component state for UI interactions
   - Form state managed by React Hook Form

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL (configured but not actively used)
- **ORM**: Drizzle with PostgreSQL dialect
- **UI Library**: Radix UI primitives via shadcn/ui
- **Validation**: Zod for schema validation
- **Animations**: Framer Motion
- **Icons**: Lucide React and React Icons

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code formatting and linting
- **Vite Plugins**: Runtime error overlay, cartographer for Replit

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with file watching for auto-restart
- **Database**: Configured for Neon PostgreSQL via environment variables

### Production Build
- **Frontend**: Static files built to `dist/public`
- **Backend**: Bundled with esbuild to `dist/index.js`
- **Deployment**: Single Node.js process serving both frontend and API

### Environment Configuration
- **Development**: Separate dev servers with proxy setup
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Key Features
- **Portfolio Showcase**: Multi-project display with case studies
- **Contact System**: Form submission with email integration ready
- **Responsive Design**: Mobile-optimized user experience
- **Performance**: Optimized builds with code splitting
- **SEO Ready**: Proper meta tags and semantic HTML structure

The application is designed to be easily deployable on various platforms with minimal configuration changes, particularly optimized for Replit's environment with specific plugins and error handling.