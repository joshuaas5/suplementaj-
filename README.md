# Suplementa Já

A comprehensive nutritional supplement recommendation platform built with Next.js, featuring an intelligent assessment system, detailed nutrient database, and evidence-based health content.

## Overview

Suplementa Já helps users discover the right nutritional supplements based on their individual health goals, dietary habits, and lifestyle factors. The platform combines a personalized quiz system with scientifically-backed educational content.

## Features

- **Personalized Assessment**: 6-step questionnaire analyzing diet, goals, and lifestyle
- **Smart Recommendations**: Algorithm-driven supplement suggestions with priority ranking
- **Nutrient Database**: Detailed profiles of 40+ nutrients with benefits, dosages, and interactions
- **Educational Content**: 30+ articles on nutrition, supplements, and wellness
- **PDF Report Generation**: Downloadable personalized supplement guide
- **SEO Optimized**: Built-in sitemap, structured data, and meta tags for search visibility
- **Performance Focused**: Optimized Core Web Vitals and mobile experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with Neobrutalism design
- **Validation**: Zod + React Hook Form
- **PDF Generation**: jsPDF
- **Analytics**: Google Analytics 4
- **Monetization**: Google AdSense ready

## Architecture

```
app/
├── page.tsx              # Homepage
├── layout.tsx            # Root layout
├── sitemap.ts            # Dynamic sitemap
├── avaliacao/            # Assessment quiz (6 steps)
├── resultados/           # Results page
├── nutrientes/           # Nutrient database
├── blog/                 # Educational articles
├── sobre/                # About page
├── termos/               # Terms of service
├── privacidade/          # Privacy policy
└── api/subscribe/        # Newsletter API

components/               # Reusable UI components
lib/                     # Utilities and helpers
public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joshuaas5/suplementaj-.git

# Navigate to the project
cd suplementaj-

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Deployment

```bash
npm run build
```

Deploy on Vercel:

```bash
vercel --prod
```

## SEO & Performance

- Dynamic sitemap generation
- Open Graph meta tags for social sharing
- Semantic HTML structure
- Image optimization with Next.js Image component
- Lazy loading for non-critical resources

## Live Demo

[https://suplementaja.com](https://suplementaja.com)

---

Making nutrition science accessible to everyone.
