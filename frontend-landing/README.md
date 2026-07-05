# Pulse Smartwatch — Landing Page (Next.js)

A responsive product landing page built with Next.js (App Router) and TypeScript.

## Sections

- **Header** — brand name + nav links (sticky).
- **Hero / Product Image** — SVG product illustration (`public/product.svg`) via `next/image`.
- **Product Description** — overview copy.
- **Key Features** — 4 feature cards in a responsive CSS Grid.
- **Footer** — contact email, phone, address.

## Responsive techniques

- CSS Grid for the hero layout and the features grid (`auto-fit`/`minmax` for automatic reflow).
- Flexbox for the header and footer layouts.
- Media queries at `900px` (hero stacks to one column) and `600px` (header nav wraps, footer stacks, headings shrink).

## Setup & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
