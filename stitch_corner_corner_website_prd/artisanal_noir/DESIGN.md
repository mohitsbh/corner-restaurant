---
name: Artisanal Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5b5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#998f81'
  outline-variant: '#4d463a'
  surface-tint: '#e4c285'
  primary: '#e6c487'
  on-primary: '#412d00'
  primary-container: '#c9a96e'
  on-primary-container: '#543d0c'
  inverse-primary: '#745a27'
  secondary: '#e4c286'
  on-secondary: '#412d00'
  secondary-container: '#5d4515'
  on-secondary-container: '#d5b479'
  tertiary: '#b8c8f2'
  on-tertiary: '#203051'
  tertiary-container: '#9dadd5'
  on-tertiary-container: '#314163'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea4'
  primary-fixed-dim: '#e4c285'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5a4312'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#e4c286'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5a4313'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ef'
  on-tertiary-fixed: '#081b3b'
  on-tertiary-fixed-variant: '#374669'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  off-white: '#f5f0eb'
  muted-silver: '#b8b0a8'
  deep-gray: '#1c1c1c'
  gold-glass-stroke: rgba(201, 169, 110, 0.1)
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  margin-desktop: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system is crafted for a multi-space venue that balances communal warmth with exclusive elegance. The aesthetic is rooted in a **Premium Dark** movement, blending **Glassmorphism** with **Minimalist** structures to evoke the atmosphere of a dimly lit, high-end London lounge.

The target audience consists of discerning urbanites seeking artisanal experiences. The UI must feel sophisticated yet approachable, utilizing high contrast and intentional "silence" (whitespace) to allow imagery and gold accents to shine. A subtle grain texture should be applied to the base background to provide a tactile, paper-like quality that breaks the sterility of pure digital blacks.

## Colors

The palette is anchored by a deep-black foundation, utilizing gold as the primary vessel for hierarchy and action. 

- **Primary & Secondary:** Two shades of gold provide depth to interactive elements and brand signaling.
- **Surface Strategy:** The background uses `#0a0a0a`. Elevated surfaces (cards, menus) utilize `#1c1c1c` with varying levels of transparency to create the glassmorphism effect.
- **Typography:** Headlines and primary body text use `#f5f0eb` for high legibility against dark backgrounds, while `#888888` is reserved for metadata and de-emphasized content.

## Typography

The typography pairing contrasts the literary, timeless feel of a serif headline with the functional precision of a modern sans-serif body. 

- **Headlines:** Set in a premium serif (using Noto Serif as the closest available match to Instrument Serif), these should be given ample room to breathe. For large display moments, use tighter letter spacing and lowercase for a more "editorial" feel.
- **Body:** Inter provides a neutral, highly legible counterpoint. 
- **Labels:** Use uppercase with increased letter spacing for small UI elements like category tags or overlines to maintain a structured, architectural feel.

## Layout & Spacing

This design system employs a **fixed-width container** model for desktop to maintain the boutique, curated feel of a high-end publication. 

- **Grid:** A 12-column grid is used for desktop with generous 24px gutters. On mobile, a 4-column grid with 20px side margins ensures content remains centered and readable.
- **Rhythm:** Spacing follows an 8px linear scale. Use larger vertical gaps (80px, 120px, 160px) between major sections to emphasize the premium nature of the venue.
- **Safe Zones:** Content should never feel cramped; ensure a minimum of 24px padding within all card-based components.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and tonal layering rather than traditional heavy shadows.

- **The Glass Effect:** Elevated panels (like modals or floating navigation) use a semi-transparent fill of the primary background color with a `blur(12px)` backdrop filter.
- **Borders:** Every glass element must have a 1px solid border using `rgba(201, 169, 110, 0.1)`. This subtle gold highlight simulates the way light catches the edge of high-quality glassware.
- **Shadows:** Use only one type of shadow: a very soft, large-radius "Ambient Glow" (0px 20px 40px rgba(0,0,0,0.5)) to lift elements off the deep black base.

## Shapes

The shape language is **Soft** but disciplined. 

- **Corner Radius:** Use a consistent 4px (0.25rem) radius for standard components like buttons and input fields. 
- **Large Components:** For cards and sections, a 8px (0.5rem) or 12px (0.75rem) radius may be used to soften the layout while maintaining a professional, structured appearance. 
- Avoid fully rounded "pill" shapes, as they lean too far into casual/playful territory. The goal is "architectural precision."

## Components

- **Buttons:**
    - **Primary:** Solid gold background (`#c9a96e`) with black text. No border.
    - **Secondary:** Ghost style. Transparent background with a 1px gold border and gold text.
    - **Hover States:** Subtle increase in brightness or a 2px vertical shift to imply tactility.
- **Cards:** Use the glassmorphism style (semi-transparent background, backdrop blur, and the 1px subtle gold border). 
- **Input Fields:** Deep black background with a 1px border using `#4f4f4f`. On focus, the border transitions to the primary gold.
- **Chips/Tags:** Small, capitalized text with a very subtle gold tint and a 1px gold-glass-stroke.
- **Checkboxes/Radios:** Custom gold-bordered squares/circles. When checked, use a solid gold fill with a black checkmark icon.
- **Lists:** Use gold-colored hairline dividers (0.5px height) to separate items without creating visual clutter.
- **Signature Component (The Venue Switcher):** A custom navigation element that uses large serif typography and full-screen image transitions to switch between the different "spaces" of the venue.