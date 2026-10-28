# GDG Community Website Frontend

A modern, responsive web application for the Google Developer Group (GDG) community, built with React, Vite, Tailwind CSS, and Framer Motion.

## Overview

This project is a standalone frontend application. All community content — including year groups, events, and members — is served statically from [`src/data/data.ts`](file:///src/data/data.ts). No backend server, Docker, or database setup is required.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Data Source**: Static data configured in [`src/data/data.ts`](file:///src/data/data.ts)

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or bun

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start the Vite development server
npm run dev
```

The application will be accessible at `http://localhost:8080` (or `http://localhost:5173`).

### Building for Production

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## Static Data Management

All data for the website lives in [`src/data/data.ts`](file:///src/data/data.ts):

- **`yearGroups`**: Array of years (e.g. 2025, 2024, 2023) containing:
  - **`events`**: Event titles, dates, descriptions, thumbnails, galleries, and highlights.
  - **`members`**: Member details, roles, photos, and social links (GitHub, LinkedIn, Instagram).
