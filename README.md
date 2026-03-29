# 🏛️ MuseoVerse Desktop Web App

An interactive museum analytics dashboard built with React, Vite, Tailwind CSS v4, and React Router.

This repository currently contains a desktop-oriented dashboard experience for the Grand Egyptian Museum inside the MuseoVerse Partner Platform, plus a set of additional standalone Figma-imported screens stored under `src/imports/`.

## ✨ What This Project Is

This app is a polished front-end dashboard for museum operations and digital engagement tracking. It is designed around a fixed desktop shell with:

- A branded left sidebar for page navigation
- A top header with search, global filters, sync status, and notifications
- A routed content area for dashboard pages
- Static, curated data visualizations and operational tables
- A visual system built around warm museum-inspired browns, golds, parchment neutrals, and Manrope typography

It is currently a front-end product UI, not a full data-connected platform.

## 📌 Current Status

The main routed application is fully navigable through the sidebar and includes 9 primary pages:

1. `Overview`
2. `Visitor Analytics`
3. `Exhibits & Artifacts`
4. `Storytelling / Scan / AR`
5. `Social Feed`
6. `Virtual Tours`
7. `Campaigns`
8. `Reports`
9. `Museum Settings`

There are also several extra Figma-imported screens under `src/imports/`, but those are not currently connected to the main router.

## 🧭 App Navigation

### Sidebar navigation

The main app shell is defined in `src/app/components/Layout.tsx`. The sidebar contains these routes:

| Label | Route |
|---|---|
| Overview | `/` |
| Visitor Analytics | `/analytics` |
| Exhibits & Artifacts | `/exhibits` |
| Storytelling / Scan / AR | `/storytelling` |
| Social Feed | `/social` |
| Virtual Tours | `/virtual-tours` |
| Campaigns | `/campaigns` |
| Reports | `/reports` |
| Museum Settings | `/settings` |

### Header controls

The top header includes:

- Museum identity label: `Grand Egyptian Museum`
- Location label: `Cairo, Egypt`
- `Live Data Sync` button with temporary syncing state
- Search input
- Global `Date Range` dropdown
- Global `Museum Hall` dropdown
- Notification bell

Important implementation note:

- These controls are currently local UI state.
- They do not fetch remote data.
- Search does not navigate.
- Sync is visual only.
- The dropdowns do not yet drive shared filtering across all pages.

## 🗺️ Routed Pages

Below is the current screen-by-screen breakdown of the routed application.

### 1. 🏛️ Overview

File: `src/app/components/pages/Overview.tsx`

Purpose:

- Serves as the landing dashboard for the museum.
- Gives a high-level snapshot of museum activity, engagement, artifact interest, and hall performance.

Main content:

- KPI cards
- `Engagement Trend` chart
- `Activity by Zone`
- `Top Scanned Artifacts`
- `AI Insights`
- `Hall Performance Summary` table

Implementation notes:

- The engagement trend uses a page-local custom SVG line chart.
- The chart is responsive to its card width using `ResizeObserver`.

### 2. 👥 Visitor Analytics

File: `src/app/components/pages/VisitorAnalytics.tsx`

Purpose:

- Focuses on audience behavior, visitor mix, hourly activity, funnel progression, and hall-level behavior.

Main content:

- `New vs Returning Visitors` responsive area chart with legend
- `Audience Segments` donut chart
- `Peak Usage Hours` responsive bar chart
- `Audience Geography`
- `Visitor Journey Funnel`
- `Hall-by-Hall Visitor Behavior` table

Implementation notes:

- Audience segments include `Tourists`, `Students`, `Cultural Enthusiasts`, `Remote Visitors`, and `Other`.
- The page uses shared chart primitives from `CustomCharts.tsx`.

### 3. 🏺 Exhibits & Artifacts

File: `src/app/components/pages/ExhibitsArtifacts.tsx`

Purpose:

- Tracks exhibit performance and artifact interaction across halls, eras, and types.

Main content:

- Three page-level dropdown filters:
  - `Hall`
  - `Era`
  - `Type`
- `Exhibit Comparison` responsive bar chart with legend
- `Exhibit Performance` table
- `Top Scanned Artifacts`
- Underperforming or attention-needed section

Implementation notes:

- This page uses the shared `AppDropdown` component for its filters.
- Filter values are currently local component state.

### 4. 📖 Storytelling / Scan / AR

File: `src/app/components/pages/StorytellingAR.tsx`

Purpose:

- Covers scan behavior, generated story usage, AI artifact interactions, and AR-related funneling.

Main content:

- KPI cards
- `Scan & Story Trend` responsive area chart with legend
- `Storytelling Styles`
- `Scan → Story → AI Funnel`
- `Most Asked Questions`
- `Top Artifacts by AI Interaction`
- Alert / attention block

Implementation notes:

- The chart height has already been increased to better fill its card width.
- This page relies on static local arrays, not API responses.

### 5. 💬 Social Feed

File: `src/app/components/pages/SocialFeed.tsx`

Purpose:

- Monitors public-facing social engagement and museum conversation trends.

Main content:

- KPI cards
- `Top User-Generated Posts`
- `Trending Tags`
- moderation-related section
- `Most Discussed Artifacts`
- additional curated social insight cards

Implementation notes:

- The page is content-heavy and uses cards/lists rather than custom charts.

### 6. 🌐 Virtual Tours

File: `src/app/components/pages/VirtualTours.tsx`

Purpose:

- Tracks remote virtual-tour activity, completions, engagement, geographies, and viewing modes.

Main content:

- KPI cards
- `Performance by Tour` responsive bar chart with legend
- `Guided vs Free Explore` donut chart
- `Top Scenes`
- `Tour Catalog` table
- `Top Countries`

Implementation notes:

- The chart height has been increased to better match the wider card layout.
- The page uses shared chart primitives from `CustomCharts.tsx`.

### 7. 📣 Campaigns

File: `src/app/components/pages/Campaigns.tsx`

Purpose:

- Organizes campaign performance, promoted exhibits, and action recommendations.

Main content:

- KPI cards
- `Active Campaigns` table
- `Promoted Exhibits`
- recommendation / insight block
- `Suggested Actions`

Implementation notes:

- This page is largely structured around tables, cards, and recommendation blocks.

### 8. 📄 Reports

File: `src/app/components/pages/Reports.tsx`

Purpose:

- Presents report templates, export history, and scheduled report content.

Main content:

- `Custom Date Range` dropdown
- `Report Templates`
- `Recent Exports` table
- scheduling / status section

Implementation notes:

- The native dropdown was replaced with the shared `AppDropdown` for visual consistency.

### 9. ⚙️ Museum Settings

File: `src/app/components/pages/MuseumSettings.tsx`

Purpose:

- Centralizes museum profile, operational settings, team data, and platform controls.

Main content:

- museum profile / location information
- settings sections
- team table
- notification and integration-related cards
- support / account blocks

Implementation notes:

- The content width was expanded to align with the wider page layouts used elsewhere in the dashboard.

## 🧩 Shared Components

### `Layout.tsx`

File: `src/app/components/Layout.tsx`

Responsibilities:

- Defines the full application shell
- Renders the sidebar
- Renders the top header
- Hosts the routed page outlet
- Manages local header UI state

Notable details:

- Uses `light_logo.png` as the app brand mark
- Uses `9daab04414367d49254977be5b6fb20e0c511e1b.png` as the sidebar profile image
- Keeps `Live Data Sync` as a clickable button with temporary busy state
- Uses `NavLink` to highlight the active route

### `AppDropdown.tsx`

File: `src/app/components/AppDropdown.tsx`

Purpose:

- Shared custom dropdown trigger and menu used across the app

Styling details:

- Gradient trigger background
- Border and shadow treatment
- Rotating chevron
- Radio-style option selection
- Cursor pointer behavior
- Reserved padding to prevent selected indicator overlap

Used in:

- global header filters
- Reports page
- Exhibits & Artifacts page

### `CustomCharts.tsx`

File: `src/app/components/CustomCharts.tsx`

Purpose:

- Contains custom chart primitives built with pure SVG

Included chart components:

- `SimpleBarChart`
- `SimpleAreaChart`
- `SimpleDonutChart`

Why they exist:

- They were introduced as drop-in replacements for Recharts in order to avoid the Recharts `2.15.x` duplicate SVG key bug noted in the file header comments.

Implementation details:

- `SimpleBarChart` is responsive
- `SimpleAreaChart` is responsive
- both use `ResizeObserver`
- both calculate a drawable region with chart padding
- donut charts are generated from hand-built SVG arc paths

## 🎨 Styling System

Styling is split across four files:

- `src/styles/index.css`
- `src/styles/fonts.css`
- `src/styles/tailwind.css`
- `src/styles/theme.css`

### `index.css`

Loads the global style pipeline:

- `fonts.css`
- `tailwind.css`
- `theme.css`

### `fonts.css`

Loads the Google font:

- `Manrope`

### `tailwind.css`

Contains:

- Tailwind CSS v4 import
- `tw-animate-css` import
- Tailwind v4 directives such as `@custom-variant` and `@theme`

### `theme.css`

Contains:

- CSS variables for colors, tokens, borders, radius, chart colors, and sidebar colors
- base typography defaults for `h1` to `h4`, `label`, `button`, and `input`
- light and dark token sets

### Visual direction

The current UI language is characterized by:

- rich brown and espresso tones
- parchment and ivory neutrals
- muted gold accents
- rounded cards and soft borders
- restrained shadows
- compact dashboard typography

## 🛠️ Tech Stack

### Core runtime

- React 18
- React DOM 18
- React Router 7
- Vite 6
- Tailwind CSS 4

### UI and icon tooling

- Lucide React
- Radix UI primitives
- shadcn/ui-style component files under `src/app/components/ui`

### Installed but only partially used in the routed dashboard

The project also includes a broad dependency set that appears to come from the original generated bundle and component library setup, including:

- MUI packages
- Recharts
- Motion
- React Hook Form
- Sonner
- Embla Carousel
- Vaul
- Date-fns
- and several Radix-based helper packages

Important note:

- Not every installed dependency is actively used by the current routed dashboard pages.

## 🧱 Routing Architecture

Main entry flow:

1. `src/main.tsx` mounts the app
2. `src/app/App.tsx` renders `RouterProvider`
3. `src/app/routes.ts` defines the browser router
4. `src/app/components/Layout.tsx` renders the shared shell
5. Nested route pages render into `<Outlet />`

Router type:

- `createBrowserRouter`

Current route source:

- `src/app/routes.ts`

## 📁 Project Structure

```text
Museoversedesktopwebapp/
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  ├─ routes.ts
│  │  └─ components/
│  │     ├─ Layout.tsx
│  │     ├─ AppDropdown.tsx
│  │     ├─ CustomCharts.tsx
│  │     ├─ figma/
│  │     │  └─ ImageWithFallback.tsx
│  │     ├─ pages/
│  │     │  ├─ Overview.tsx
│  │     │  ├─ VisitorAnalytics.tsx
│  │     │  ├─ ExhibitsArtifacts.tsx
│  │     │  ├─ StorytellingAR.tsx
│  │     │  ├─ SocialFeed.tsx
│  │     │  ├─ VirtualTours.tsx
│  │     │  ├─ Campaigns.tsx
│  │     │  ├─ Reports.tsx
│  │     │  └─ MuseumSettings.tsx
│  │     └─ ui/
│  │        └─ many reusable shadcn/radix-based primitives
│  ├─ assets/
│  │  └─ png-based exported visual assets, including light_logo.png
│  ├─ imports/
│  │  └─ standalone imported Figma screens and generated svg modules
│  └─ styles/
│     ├─ fonts.css
│     ├─ index.css
│     ├─ tailwind.css
│     └─ theme.css
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ ATTRIBUTIONS.md
└─ README.md
```

## 🧪 Standalone Imported Screens

The `src/imports/` folder contains non-routed screens generated from design imports, including:

- `Explore.tsx`
- `FeedGeneral.tsx`
- `FeedGrandEgyptianMuseumCairo.tsx`
- `LouvreMuseumDetail.tsx`
- `NewExperienceTheNightAtTheLouvre.tsx`
- `ProfilePage.tsx`
- `ResultOfTheImageModeScanning.tsx`
- `ScanningInTheImageMode.tsx`
- `Virtual.tsx`

Important note:

- These files are not currently mounted in `src/app/routes.ts`.
- You cannot reach them from the current dashboard UI unless they are explicitly wired into the router or rendered manually.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## 📜 Available Scripts

From `package.json`:

- `npm run dev` -> starts the Vite development server
- `npm run build` -> creates a production build

## ⚙️ TypeScript and Vite Notes

### `tsconfig.json`

Current highlights:

- `strict: true`
- `module: "ESNext"`
- `moduleResolution: "Bundler"`
- path alias for `@/* -> src/*`
- includes Node and Vite types

### `vite.config.ts`

Current highlights:

- uses `@vitejs/plugin-react`
- uses `@tailwindcss/vite`
- defines alias `@` -> `src`
- includes raw asset support for:
  - `*.svg`
  - `*.csv`

## 🧠 Data Model and State Reality

This is important for anyone continuing the project.

### What is real today

- Routes are real
- Layout is real
- Custom dropdown interactions are real
- Search input typing is real
- Sync button state change is real
- Responsive custom SVG charts are real
- Tables, KPI cards, legends, and filters render correctly

### What is still static or local-only

- Dashboard data is hardcoded in page files
- No API fetching is implemented
- No authentication flow is implemented
- No persistence layer is implemented
- No database connection is implemented
- Header filters are not globally wired to page datasets
- Search does not perform query logic
- Notifications are visual only
- Profile block is display-only

## 🧭 How to Explore the App in the UI

If you are running the app locally:

1. Open the app in the browser from the Vite dev server URL
2. Use the left sidebar to move between all current dashboard pages
3. Use the top header controls for visual interaction and filter selection
4. Use direct URLs if needed for testing specific screens

Quick route list:

- `/`
- `/analytics`
- `/exhibits`
- `/storytelling`
- `/social`
- `/virtual-tours`
- `/campaigns`
- `/reports`
- `/settings`

## 🧼 Editor and Linting Notes

This repo includes workspace-level VS Code CSS settings in `.vscode/settings.json` to suppress false `unknown at rule` warnings for Tailwind v4 directives such as:

- `@custom-variant`
- `@theme`

## 🖼️ Assets and Branding

The app currently uses:

- `src/assets/light_logo.png` for the brand logo in the sidebar
- `src/assets/9daab04414367d49254977be5b6fb20e0c511e1b.png` for the sidebar profile photo

General note:

- The repository contains many PNG exports from the original design/import pipeline.
- Some of these assets are fairly large and may be worth optimizing later.

## ⚠️ Known Limitations

- The experience is primarily desktop-oriented.
- Data is static and embedded in component files.
- Some installed UI libraries are not currently used in the main dashboard flow.
- Several imported screens exist outside the routed application.
- There is no backend integration, auth layer, or persistence mechanism yet.

## 🧭 Good Next Steps for the Project

If this app is going to evolve beyond a static front-end prototype, the most valuable next steps would be:

1. Connect page datasets to real APIs
2. Define a shared filtering model for date range and museum hall
3. Add typed domain models for museum analytics data
4. Move hardcoded arrays into data modules or a service layer
5. Route or remove the standalone imported screens intentionally
6. Optimize oversized assets
7. Add testing and linting workflows
8. Add authentication and role-aware access control

## 🙏 Design Source and Attribution

Original design reference:

- https://www.figma.com/design/fSKzBPkxqvNwows16i5Ovx/MuseoVerse-Desktop-Web-App

Attribution file:

- `ATTRIBUTIONS.md`

Current attributions include:

- shadcn/ui components under MIT license
- Unsplash photos under the Unsplash license

## 🏁 Summary

MuseoVerse Desktop Web App is currently a richly styled, route-based museum analytics dashboard prototype with:

- a complete desktop dashboard shell
- 9 routed product pages
- shared dropdown and chart primitives
- a consistent visual language
- static but well-structured analytics content
- extra imported screens ready for future integration

If you are picking this project up, the most important thing to understand is this:

The UI is already quite complete, but the data and product wiring are still in the prototype phase.
