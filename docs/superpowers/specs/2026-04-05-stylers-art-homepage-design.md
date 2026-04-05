# Stylers Art Gallery Homepage Design

## Summary

Design and build a single-page marketing homepage for Stylers Art Gallery (`時代畫廊`) for GitHub Pages. The page should present the gallery as a cultural destination in San Francisco Chinatown, with a refined, location-led identity that encourages in-person visits.

The page will be English-first with Traditional Chinese accents and titles. It will highlight the gallery's specialization in traditional Chinese calligraphy and painting, professional mounting and custom framing, seal carving, and traditional Chinese art products without feeling like a storefront catalog.

## Goals

- Establish the gallery as the only Chinese art gallery in San Francisco's Chinatown
- Drive in-person visits as the primary conversion goal
- Present the business as refined and trustworthy rather than generic or overly commercial
- Communicate the four core offerings clearly
- Provide practical visit information: address, map, phone, hours, and appointment note

## Non-Goals

- No ecommerce, inventory browsing, booking flow, or CMS
- No multi-page site structure in this pass
- No dependency on frameworks or third-party UI libraries
- No image gallery management system

## Audience

- Visitors exploring San Francisco Chinatown
- Collectors or culturally curious visitors seeking traditional Chinese art
- Customers needing mounting, framing, or seal carving services
- Tourists and locals who may discover the gallery by location

## Positioning

The homepage should feel like a Chinatown landmark and a gallery first, with services integrated into that identity. The tone should be ceremonial, calm, and distinguished rather than trendy, minimal-tech, or marketplace-heavy.

## Visual Direction

### Chosen Direction

`Chinatown Landmark`, informed by the earlier `Scholar's Salon` palette and mood.

### Design Characteristics

- Warm parchment, ink black, muted cinnabar red, and brushed gold accents
- Editorial composition with large type and section rhythm rather than boxed business-card layouts
- Traditional Chinese accents used sparingly and intentionally
- Background atmosphere derived from paper, ink wash, carved stone, and seal impressions
- Subtle motion only where it supports elegance and depth

### Typography

- Distinct serif-forward typography for major headings to create a gallery voice
- Clean supporting sans-serif for practical content
- Traditional Chinese title accents displayed with respectful spacing and prominence

## Content Strategy

### Core Message

The page should communicate that Stylers Art Gallery is a rare and culturally grounded place to visit in person in San Francisco Chinatown.

### Voice

- English-first
- Traditional Chinese accents only, never Simplified Chinese
- Refined and inviting
- Confident without sounding corporate

### Confirmed Business Details

- Name: Stylers Art Gallery
- Chinese name: 時代畫廊
- Location: 661 Jackson St, San Francisco, CA 94133
- Phone: (415) 692-1765 (English)
- Phone: (415) 640-6298 (Mandarin or Cantonese only)
- Hours: Every day, including weekends and most holidays, 11AM to 3PM
- Appointment note: Contact the gallery to arrange an appointment outside those hours
- Primary CTA goal: encourage in-person visits

## Information Architecture

### 1. Hero

Purpose:
Introduce the gallery as a destination in Chinatown and establish emotional tone immediately.

Content:

- English headline centered on place and distinction
- `時代畫廊` as a ceremonial accent
- Short supporting paragraph covering the gallery's specialties
- Primary CTA: visit / open map
- Secondary CTA: call or contact for services

### 2. Signature Disciplines

Purpose:
Summarize the gallery's four core areas without making the page feel like a product grid.

Content:

- Traditional Chinese calligraphy and paintings
- Professional mounting and custom framing
- Seal carving
- Traditional Chinese art products

Presentation:
Four refined panels or columns with short copy and tactile visual cues.

### 3. Chinatown Landmark Section

Purpose:
Anchor the page in neighborhood identity and explain why visiting in person matters.

Content:

- The gallery's singular position in Chinatown
- Language about discovery, craftsmanship, and atmosphere
- A stronger invitation to experience the space in person

### 4. Gallery Atmosphere Section

Purpose:
Give the page emotional depth without requiring a full image system.

Content:

- A visually rich band using layered backgrounds, quote-style copy, or framed detail blocks
- Emphasis on paper, brushwork, seals, carved surfaces, and collected objects

### 5. Visit Information

Purpose:
Convert interested visitors into real foot traffic.

Content:

- Address
- Google Maps link
- Both phone links with language labels
- Business hours
- Appointment note for outside standard hours

### 6. Footer

Purpose:
Provide a clean ending with identity and practical contact repetition.

Content:

- Stylers Art Gallery / 時代畫廊
- Copyright
- Address and both phone numbers

## Interaction and Motion

- Soft reveal or fade-up on load for major sections
- Gentle hover response on CTA and content panels
- No gratuitous animation
- Motion must remain lightweight and degrade gracefully

## Responsive Behavior

- Mobile-first layout
- Hero stack should remain legible on narrow screens
- Signature disciplines should collapse cleanly from multi-column to single-column
- Visit section must keep map CTA and phone CTA prominent on mobile

## Accessibility

- Semantic landmarks and heading structure
- High contrast between text and background
- Visible focus states on links and buttons
- Clear tap targets for touch devices
- Decorative effects must not obscure essential content

## Technical Approach

- Implement as a single static HTML file in [`/Users/weiranye/project/stylersart.github.io/index.html`](/Users/weiranye/project/stylersart.github.io/index.html)
- Inline CSS and minimal inline JavaScript only if needed for subtle effects
- No build tooling required
- Suitable for GitHub Pages deployment

## Risks and Mitigations

### Risk: Overly ornate design hurts clarity

Mitigation:
Keep structure simple, use ornament mostly through texture, color, and spacing rather than dense decoration.

### Risk: Small-business information gets buried by brand storytelling

Mitigation:
Make the visit section prominent and repeat the CTA in the hero.

### Risk: Page feels like a generic Asian-themed template

Mitigation:
Tie the narrative tightly to Chinatown, the gallery's specific services, and the confirmed local identity.

## Testing and Validation

- Verify responsive layout at mobile and desktop widths
- Verify CTAs for map and phone work
- Verify readable contrast and keyboard focus visibility
- Verify copy accurately reflects provided business hours and appointment policy

## Implementation Boundary

This design covers one polished homepage only. Any future additions such as a gallery catalog, biography pages, event listings, bilingual full-site structure, or appointment workflow should be handled in later iterations.
