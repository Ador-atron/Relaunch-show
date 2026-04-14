# CAR SHOW - Premium Car Dealership Website

## Concept & Vision
A cinematic, sky-blue themed premium car dealership website that sells comfort and terrain capability. The experience feels like walking into a luxury showroom — every scroll is a reveal, every interaction a ceremony. Sky blue represents freedom, exploration, and the open road ahead.

## Design Language

### Aesthetic Direction
Apple-inspired premium minimalism adapted for the automotive world. Vast sky blue gradients as backgrounds, surgical typography, and product-as-hero photography philosophy.

### Color Palette
- **Primary Sky Blue**: `#0A84FF` - Main accent, interactive elements
- **Deep Sky**: `#0066CC` - Darker accent, hover states
- **Light Sky**: `#E8F4FD` - Section backgrounds, cards
- **Cloud White**: `#FFFFFF` - Text on dark, card backgrounds  
- **Midnight**: `#1A1A2E` - Dark sections, headings
- **Mist**: `#F0F8FF` - Alternate light backgrounds
- **Steel**: `#4A5568` - Secondary text

### Typography
- **Display**: SF Pro Display / Inter - Headlines 56px/40px
- **Body**: SF Pro Text / Inter - Body 17px, captions 14px
- **Tracking**: Slight negative on headlines (-0.02em)
- **Line-height**: 1.1 for headlines, 1.6 for body

### Spatial System
- 8px base unit
- Generous whitespace (sections 120px+ padding)
- Max content width: 1200px

### Motion Philosophy
- Smooth page transitions (fade + subtle slide, 400ms)
- Scroll-triggered reveals (staggered 100ms)
- Hover: scale(1.02), shadow elevation
- Video backgrounds autoplay, muted, loop

## Layout & Structure

### Pages
1. **Home** - Hero video, featured vehicles, value props, testimonials
2. **Inventory** - Filterable vehicle grid with search
3. **Vehicle Detail** - Full spec, gallery, financing calculator
4. **About** - Dealership story, team, certifications
5. **Contact** - Form, map, hours

### Hero Section (Home)
- Full-viewport video background (hero video)
- Centered headline + CTA overlay
- Navigation glass bar

### Section Pacing
- Hero (video) → Featured Vehicles (cards) → Value Props (icons) → Testimonials → CTA Banner

## Features & Interactions

### Core
- Smooth page transitions (React Router + Framer Motion)
- Video backgrounds autoplay/loop/muted
- Inventory filter by: type, price, drivetrain
- Responsive: mobile-first

### Interaction Details
- Card hover: elevate + shadow
- CTAs: pill-shaped, blue fill
- Nav: transparent → solid on scroll
- Forms: real-time validation

## Component Inventory

### Navigation
- Glass morphism (blur + 80% opacity white)
- Logo left, links center, CTA right
- Mobile: hamburger → slide-in drawer

### Hero Module
- Video background, overlay gradient
- Large headline (56px), subtitle (21px)
- Two CTAs: primary (filled), secondary (outline)

### Vehicle Card
- Image top 60%
- Name, price, key specs
- Hover: scale + shadow

### Footer
- Dark (#1A1A2E) background
- Grid: links, contact, social
- Newsletter input

## Technical Approach
- React 18 + Vite + TypeScript
- React Router for pages
- Framer Motion for transitions
- Tailwind CSS
- Lucide React icons
