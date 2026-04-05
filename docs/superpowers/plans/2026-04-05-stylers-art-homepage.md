# Stylers Art Gallery Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dummy GitHub Pages landing page with a polished single-page marketing homepage for Stylers Art Gallery that emphasizes its Chinatown location and drives in-person visits.

**Architecture:** Keep the site as one self-contained static HTML document with inline CSS and minimal inline JavaScript. Build the page around semantic sections, layered decorative backgrounds, refined typography, and a responsive layout that surfaces location, hours, and bilingual phone contact clearly.

**Tech Stack:** HTML5, inline CSS, minimal vanilla JavaScript, GitHub Pages

---

## File Structure

- Modify: `/Users/weiranye/project/stylersart.github.io/index.html`
  Responsibility: contain the full homepage markup, styles, copy, and lightweight motion behavior.
- Keep: `/Users/weiranye/project/stylersart.github.io/CNAME`
  Responsibility: preserve GitHub Pages custom domain configuration.
- Reference: `/Users/weiranye/project/stylersart.github.io/docs/superpowers/specs/2026-04-05-stylers-art-homepage-design.md`
  Responsibility: approved design source of truth for copy, layout, and business details.

### Task 1: Replace The Dummy Homepage With The Marketing Page

**Files:**
- Modify: `/Users/weiranye/project/stylersart.github.io/index.html`
- Reference: `/Users/weiranye/project/stylersart.github.io/docs/superpowers/specs/2026-04-05-stylers-art-homepage-design.md`

- [ ] **Step 1: Snapshot the current page before editing**

Run: `sed -n '1,220p' /Users/weiranye/project/stylersart.github.io/index.html`
Expected: the existing file is a short dummy page with one card and a Google Maps button.

- [ ] **Step 2: Replace the document head and global theme with a full static marketing-page shell**

Update `/Users/weiranye/project/stylersart.github.io/index.html` so the top of the file follows this structure:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Stylers Art Gallery | 時代畫廊 | San Francisco Chinatown</title>
  <meta
    name="description"
    content="Stylers Art Gallery is San Francisco Chinatown's Chinese art gallery, offering traditional Chinese calligraphy and painting, mounting and custom framing, seal carving, and curated art objects."
  >
  <style>
    :root {
      --paper: #efe4cf;
      --paper-strong: #e4d0ae;
      --ink: #171311;
      --ink-soft: #2f2722;
      --cinnabar: #8f2f23;
      --cinnabar-soft: #b24f3f;
      --gold: #b08a4a;
      --gold-soft: rgba(176, 138, 74, 0.22);
      --mist: rgba(255, 248, 236, 0.72);
      --line: rgba(94, 63, 33, 0.16);
      --shadow: 0 24px 80px rgba(23, 19, 17, 0.18);
      --radius-xl: 32px;
      --radius-lg: 22px;
      --radius-md: 16px;
      --content-width: 1180px;
    }
  </style>
</head>
```

- [ ] **Step 3: Add the homepage structure and copy**

Replace the current `<body>` with semantic sections that follow this content structure:

```html
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar" aria-label="Primary">
        <a class="brand" href="#main">
          <span class="brand-mark">時代畫廊</span>
          <span class="brand-text">Stylers Art Gallery</span>
        </a>
        <a class="top-link" href="https://maps.app.goo.gl/ptZwc1iJpUVsR38F8" target="_blank" rel="noopener">Open Map</a>
      </nav>

      <section class="hero-panel">
        <p class="eyebrow">San Francisco Chinatown</p>
        <h1>The only Chinese art gallery in San Francisco’s Chinatown.</h1>
        <p class="lead">
          Stylers Art Gallery presents traditional Chinese calligraphy and paintings, professional mounting and custom framing,
          seal carving, and a curated selection of art objects rooted in long craft traditions.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="https://maps.app.goo.gl/ptZwc1iJpUVsR38F8" target="_blank" rel="noopener">Plan Your Visit</a>
          <a class="button button-secondary" href="#visit">View Hours & Contact</a>
        </div>
      </section>
    </header>

    <main id="main">
      <section class="disciplines">
        <!-- four service panels -->
      </section>

      <section class="landmark">
        <!-- Chinatown landmark story and rarity message -->
      </section>

      <section class="atmosphere">
        <!-- editorial atmosphere band with quote and tactile descriptors -->
      </section>

      <section id="visit" class="visit">
        <!-- address, two phone numbers, daily hours, appointment note -->
      </section>
    </main>

    <footer class="footer">
      <p>Stylers Art Gallery <span>時代畫廊</span></p>
    </footer>
  </div>
</body>
```

Populate the content with the approved details:

```text
Address: 661 Jackson St, San Francisco, CA 94133
English phone: (415) 692-1765
Mandarin or Cantonese phone: (415) 640-6298
Hours: Every day, including weekends and most holidays, 11AM to 3PM
Appointment note: Contact us to arrange an appointment outside of those hours.
```

- [ ] **Step 4: Implement the visual system and responsive layout**

Add CSS in `/Users/weiranye/project/stylersart.github.io/index.html` for:

```css
body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at top, rgba(176, 138, 74, 0.2), transparent 34%),
    linear-gradient(180deg, #f7f0e2 0%, #ead9bb 54%, #f4ebdb 100%);
  font-family: "Avenir Next", "Segoe UI", sans-serif;
}

.hero-panel,
.discipline-card,
.landmark-card,
.visit-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 249, 240, 0.72);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 980px) {
  .disciplines-grid,
  .visit-grid,
  .landmark-layout {
    grid-template-columns: 1fr;
  }
}
```

Extend those styles to cover:
- serif-forward heading stack
- parchment-and-ink section treatments
- cinnabar and gold CTA styling
- mobile and desktop spacing
- visible focus states
- subtle hover states for panels and buttons

- [ ] **Step 5: Add lightweight motion that degrades cleanly**

Use a minimal script at the bottom of `/Users/weiranye/project/stylersart.github.io/index.html` like this:

```html
<script>
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  }, { threshold: 0.2 });

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
</script>
```

Pair it with CSS transitions so hero-adjacent sections softly reveal on scroll, and wrap the motion in a `prefers-reduced-motion` media query that disables transforms and transitions.

- [ ] **Step 6: Review the page source for content accuracy**

Run: `rg -n "692-1765|640-6298|661 Jackson|11AM|appointment|時代畫廊" /Users/weiranye/project/stylersart.github.io/index.html`
Expected: the output shows all confirmed business details exactly once or where intentionally repeated.

### Task 2: Verify Layout And Ship Readiness

**Files:**
- Verify: `/Users/weiranye/project/stylersart.github.io/index.html`

- [ ] **Step 1: Open the built file in a browser-equivalent preview**

Run: `open /Users/weiranye/project/stylersart.github.io/index.html`
Expected: the page renders as a complete marketing homepage instead of the original dummy card.

- [ ] **Step 2: Check the document for basic structural correctness**

Run: `rg -n "<main|<section|<footer|meta name=\"description\"|prefers-reduced-motion" /Users/weiranye/project/stylersart.github.io/index.html`
Expected: the file includes semantic structure, description metadata, and reduced-motion handling.

- [ ] **Step 3: Check links and phone targets**

Run: `rg -n "maps.app.goo.gl|tel:4156921765|tel:4156406298" /Users/weiranye/project/stylersart.github.io/index.html`
Expected: the page contains the Google Maps link and both clickable phone links.

- [ ] **Step 4: Review git diff**

Run: `git diff -- /Users/weiranye/project/stylersart.github.io/index.html /Users/weiranye/project/stylersart.github.io/docs/superpowers/specs/2026-04-05-stylers-art-homepage-design.md /Users/weiranye/project/stylersart.github.io/docs/superpowers/plans/2026-04-05-stylers-art-homepage.md`
Expected: diff shows the homepage replacement plus the design and plan documents.

- [ ] **Step 5: Commit**

```bash
git add /Users/weiranye/project/stylersart.github.io/index.html \
        /Users/weiranye/project/stylersart.github.io/docs/superpowers/specs/2026-04-05-stylers-art-homepage-design.md \
        /Users/weiranye/project/stylersart.github.io/docs/superpowers/plans/2026-04-05-stylers-art-homepage.md
git commit -m "feat: build stylers art homepage"
```
