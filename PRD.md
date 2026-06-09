# Corner Corner Website — Product Requirements Document

| Field | Detail |
|-------|--------|
| **Product** | Corner Corner Website |
| **Version** | 1.0.0 |
| **Status** | Initial Release |
| **Last Updated** | June 2026 |

---

## 1. Project Overview

### 1.1 About the Venue

Corner Corner is a destination venue in Canada Water, London SE16 — a crossroad of food, music, and community. The venue spans over 3,297 SQM and features:

- A rotating selection of London's best street food vendors (curated by KERB)
- A craft cocktail bar
- London's largest commercial indoor vertical farm (by Harvest London)
- 7 unique spaces available for private hire
- A year-round programme of free live music and events (programmed by Broadwick)

### 1.2 About the Website

A single-page-application (SPA) marketing website built to showcase the venue's offerings, drive table bookings, handle venue hire enquiries, and establish Corner Corner's brand identity. The website is developed by **Mohit Bhoir**.

### 1.3 Business Objectives

- Increase brand awareness for Corner Corner
- Drive direct table bookings via the booking page
- Generate venue hire leads through enquiry forms
- Showcase the food vendor lineup, events calendar, and vertical farm
- Provide essential visitor information (location, hours, contact, FAQs)
- Establish a premium brand identity aligned with the physical venue experience

---

## 2. Target Audience

| Audience | Needs |
|----------|-------|
| **Local residents** (Canada Water, SE16) | Food options, events, opening hours, booking |
| **London foodies** | Vendor lineup, cuisine types, bar offerings |
| **Event-goers** | Event calendar, music lineup, ticket info |
| **Corporate & private clients** | Space hire info, capacity, enquiry process |
| **Tourists & visitors** | Location, transport, nearby attractions |
| **Sustainability enthusiasts** | Vertical farm info, farm tours |

---

## 3. Site Architecture

### 3.1 Navigation Structure

```
[Logo] | Home | Food & Drink | What's On ▼ | Venue Hire ▼ | Vertical Farm | Info | Contact | 020 3370 2305 | [Book Now]
```

**Dropdown items:**
- What's On: All Events, World Cup 26
- Venue Hire: All Spaces, Enquire Now

### 3.2 Route Map

```
/              → Home
/food          → Food & Drink
/events        → Events
/venue-hire    → Venue Hire
/farm          → Vertical Farm
/about         → Info (About)
/book          → Book a Table
/world-cup     → World Cup 26
/contact       → Contact
```

### 3.3 Layout Shell

Every route is wrapped in a persistent `<Layout>` component providing:

- Fixed header (scroll-aware: transparent → opaque with backdrop blur)
- Scroll progress bar (fixed top, gold gradient)
- Desktop navigation with dropdown submenus
- Mobile hamburger menu with slide-out panel
- Sticky CTA bar (mobile-only, with Book a Table + Call Us)
- Back-to-top button (appears after 600px scroll)
- Footer with site links, social links, newsletter signup
- `<Outlet />` for page content

---

## 4. Page Requirements

### 4.1 Home (`/`)

**Purpose:** Landing page that captures the venue's atmosphere and drives exploration.

**Sections:**
1. **Hero** — Full-width background video (autoplay, muted, loop) with overlay text: "Eat. Drink. Gather." and CTA button
2. **Concept Pillars** — 3 numbered cards: Eat, Drink, Gather (with animations)
3. **Food Hall** — Vendor cards (Chick N Sours, Cafe by Sireli, Craft Cocktails, The Daily Desk) with images and descriptions
4. **Upcoming Events** — Event cards with date, title, description
5. **Venue Showcase** — Video + text highlighting the space
6. **Testimonials** — Quote cards from partners (Broadwick, KERB)
7. **Instagram Feed** — Preview of social media presence
8. **Location Map** — Embedded Google Map
9. **CTA Section** — "Ready to Visit?" with Book a Table link

### 4.2 Food & Drink (`/food`)

**Purpose:** Detail the food vendor lineup and bar offerings.

**Sections:**
1. **Page Hero** — Image header with title and subtitle
2. **Vendor Cards** — 4 vendors with images, descriptions, cuisine type
3. **Opening Hours** — Schedule table for Food Hall and Bar

### 4.3 Events (`/events`)

**Purpose:** Promote the events programme.

**Sections:**
1. **Page Hero** — Image header
2. **Upcoming Events** — Cards for live music, workshops, World Cup screenings
3. **Regular Events** — Recurring events (Run Club, Farm Tour, Daily Desk)
4. **Artist Directory** — Grid of performer/artist cards

### 4.4 Venue Hire (`/venue-hire`)

**Purpose:** Showcase event spaces and generate leads.

**Sections:**
1. **Page Hero** — Image header
2. **Space Cards** — 7 spaces (Event Hall, Food Hall, Studio, Loft, Terrace, Plant Room) with capacity, dimensions, features
3. **Enquiry Form** — Fields: Name, Email, Phone, Event Type, Guest Count, Preferred Space, Message
4. **Contact CTA** — Email link: hire@cornercorner.com

### 4.5 Vertical Farm (`/farm`)

**Purpose:** Highlight the on-site vertical farm and sustainability story.

**Sections:**
1. **Page Hero** — Image header
2. **Stats** — Key metrics: 95% less water, 0 pesticides, 365 days/year growing
3. **Partner Info** — Harvest London collaboration details
4. **Tour Booking** — Farm tour information with contact CTA

### 4.6 About / Info (`/about`)

**Purpose:** Tell the venue's story and provide visitor information.

**Sections:**
1. **Page Hero** — Image header
2. **Our Story** — Narrative of Corner Corner's creation
3. **Partners** — Cards for Broadwick, KERB, Harvest London
4. **FAQs** — 7 accordion items covering hours, booking, entry, parking, accessibility
5. **Visit Us** — Address, contact, transport, social links
6. **Google Map** — Embedded location map

### 4.7 Book a Table (`/book`)

**Purpose:** Capture table reservations.

**Sections:**
1. **Page Hero** — Image header
2. **Booking Form** — Fields: Name, Email, Phone, Number of Guests, Date, Time, Occasion, Special Requests
3. **Contact Info** — Phone number and email as alternative contact methods

### 4.8 World Cup 26 (`/world-cup`)

**Purpose:** Promote World Cup 26 screenings at the venue.

**Sections:**
1. **Page Hero** — Video header with World Cup branding
2. **Match Schedule** — Table with fixtures (Germany vs Curacao, England vs Croatia)
3. **Match Day Experience** — Cards: Big Screen, Table Service, Full Bar

### 4.9 Contact (`/contact`)

**Purpose:** Provide a general contact channel.

**Sections:**
1. **Page Hero** — Image header
2. **Contact Form** — Fields: Name, Email, Subject (dropdown), Message
3. **Visit Info** — Address, phone, email, opening hours, Google Map
4. **Hire CTA** — Private & event hire section with email link

---

## 5. Component Library

| Component | Description |
|-----------|-------------|
| `Layout` | Page shell: header, nav, footer, scroll effects |
| `Footer` | 4-column footer: brand, explore, visit, connect, newsletter |
| `Logo` | SVG logo rendered as `<img>` with drop-shadow |
| `StickyCTA` | Mobile-only fixed bottom bar (Book / Call) |
| `Reveal` | Scroll-triggered fade/slide animation (IntersectionObserver) |
| `Section` | Section wrapper with padding & optional dark background |
| `Container` | Max-width centered wrapper (max-w-7xl) |
| `SectionHeader` | Label + title + text combo with reveal |
| `PageHero` | Page header with back link, label, title, subtitle |
| `Button` | Multi-variant button (primary/outline/text) with sizes |
| `GlassCard` | Glassmorphism card with optional gold border |
| `Badge` | Inline badge (default/outline) |
| `Divider` | Subtle gradient divider |
| `BackToTop` | Fixed back-to-top button (appears after 600px) |
| `NavLink` | Desktop nav link with hover/active underline |
| `DesktopDropdown` | Nav dropdown with icon list items |
| `MobileNavItem` | Mobile nav link with expandable sub-links |
| `CursorFollower` | Custom cursor dot (desktop only) |

---

## 6. Design System

### 6.1 Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0a` | Page background |
| `--color-text` | `#f5f0eb` | Primary text |
| `--color-gold` | `#c9a96e` | Primary accent |
| `--color-gold-light` | `#dbb97e` | Gold hover state |
| `--color-muted` | `#888` / `#b8b0a8` | Secondary text |
| `--color-border` | `rgba(255,255,255,0.06)` | Subtle borders |

### 6.2 Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Inter** (sans-serif) | 300–700 | Body text, navigation, buttons |
| **Instrument Serif** (serif) | 400, 400 italic | Headings, hero titles |

### 6.3 Visual Effects

- Glassmorphism (`.glass`, `.glass-gold` utility classes)
- Noise/grain texture overlay via SVG filter
- Scroll-triggered reveal animations
- Custom cursor follower (desktop)
- Scroll progress bar (fixed top)
- Shimmer animations on gold elements
- Pulse glow on decorative borders
- Hover scaling on interactive elements

---

## 7. Technical Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 |
| **Routing** | React Router DOM v7 |
| **Build Tool** | Vite 6 |
| **CSS** | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| **Linting** | ESLint (react-hooks + react-refresh plugins) |
| **Language** | JavaScript (JSX) |
| **Module System** | ESM (`"type": "module"`) |

### 7.1 Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

---

## 8. External Integrations

| Service | Purpose |
|---------|---------|
| **cornercorner.com CDN** | Hosts all images (PNG) and videos (MP4) |
| **Google Maps Embed API** | Location maps on Home, About, Contact |
| **YouTube** | Embedded venue promo video on Home |
| **Google Fonts** | Inter + Instrument Serif font loading |
| **Instagram** | Social link + feed preview |
| **TikTok** | Social link |
| **Facebook** | Social link |
| **what3words** | Location reference (`///magma.oven.bolt`) |

---

## 9. Forms (Current State)

| Form | Fields | Status |
|------|--------|--------|
| Book a Table | Name, Email, Phone, Guests, Date, Time, Occasion, Requests | UI only — no submission |
| Venue Enquiry | Name, Email, Phone, Event Type, Guests, Space, Message | UI only — no submission |
| Contact | Name, Email, Subject, Message | UI only — no submission |
| Newsletter | Email | UI only — no submission |

All forms use `onSubmit={e => e.preventDefault()}` with **no backend API integration**.

---

## 10. Non-Functional Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Responsive** | Mobile-first design with Tailwind responsive utilities |
| **Performance** | Vite production build with code splitting |
| **Browser Support** | Modern browsers (Chrome, Firefox, Safari, Edge) |
| **SEO** | Basic meta tags (title, description) in `index.html` |
| **Accessibility** | Semantic HTML, aria-labels on interactive elements |
| **Font Loading** | Google Fonts with display=swap |
| **Dark Theme** | Consistent dark UI throughout (#0a0a0a background) |

---

## 11. Known Gaps & Limitations

| Issue | Impact |
|-------|--------|
| Forms not connected to any backend | Cannot submit bookings, enquiries, or newsletter signups |
| No content management system | All content is hardcoded; requires developer to update |
| No analytics integration | Unable to track user behavior or conversions |
| No SEO beyond basic meta tags | Limited search engine visibility |
| No error tracking | Bugs may go undetected in production |
| No automated tests | No test suite exists |
| No environment configuration | All external URLs and settings are hardcoded |

---

## 12. Future Enhancements

| Feature | Priority | Description |
|---------|----------|-------------|
| Form backend integration | High | Connect forms to API/email service for actual submissions |
| CMS integration | High | Headless CMS (e.g., Sanity, Strapi) for content management |
| Google Analytics / GA4 | Medium | Track page views, conversions, events |
| SEO improvements | Medium | Structured data, sitemap, Open Graph tags, meta per page |
| Event ticketing | Medium | Online ticket purchase for events |
| Online ordering | Low | Integration with food ordering platform |
| Blog / News section | Low | Regular content updates for SEO and engagement |
| Multi-language | Low | Support for additional languages |
| PWA | Low | Offline support, installable app |
| Automated testing | Medium | Unit + E2E tests |
