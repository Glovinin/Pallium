# Wanzeller Advogados

## Overview
A Next.js website for Wanzeller Advogados, a law firm. The site includes multiple pages for practice areas, team information, contact, and scheduling functionality.

## Project Architecture
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, custom components
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **AI Integration**: Google Generative AI for chatbot functionality

## Project Structure
```
src/
├── app/           # Next.js App Router pages
│   ├── actions/   # Server actions (chat)
│   ├── agendar/   # Scheduling page
│   ├── areas-pratica/  # Practice areas
│   ├── contactos/ # Contact page
│   └── sobre/     # About page
├── components/    # React components
│   ├── chat/      # Chatbot components
│   ├── equipa/    # Team components
│   ├── home/      # Homepage sections
│   ├── layout/    # Header, Footer, etc.
│   └── ui/        # Shared UI components
├── context/       # React Context providers
├── data/          # Static data files
└── lib/           # Utility functions
public/            # Static assets (images, videos)
```

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Configuration
- The dev server is configured to bind to 0.0.0.0:5000 for Replit compatibility
- `allowedDevOrigins: ['*']` is set in next.config.mjs to allow the Replit proxy

## Recent Changes
- 2025-12-29: Configured project for Replit environment (port 5000, allowed hosts)
