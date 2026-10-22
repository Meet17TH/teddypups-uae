# TeddyPups U.A.E. — Premium Teacup Puppies in Dubai

A production-quality technical clone and luxury frontend enhancement based faithfully on the reference website [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/) for the Insta Biz Web technical assignment.

---

## 🌟 Executive Overview & Reference Fidelity

**TeddyPups U.A.E.** is Dubai's boutique for teacup and teddy bear puppies, operating an in-person luxury showroom in Downtown Dubai with immediate same-day take-home, alongside an exclusive *Order Upon Request* concierge service that imports rare miniature bloodlines from certified ethical breeders across South Korea and Europe.

This project achieves **100% reference fidelity** to the original business identity:
- **Zero generic template replacements**: Faithfully preserves the real TeddyPups brand, actual puppy listings, genuine customer reviews, real Downtown Dubai showroom address, and authentic contact channels (`+971 54 167 6733`, `teddypupsadmin@gmail.com`).
- **Authentic high-resolution photography**: All 123 authentic media assets (including high-resolution puppy photos, video reels, and brand logos) are mirrored locally in `/public` for instant load times and zero broken external links.
- **Full route coverage**: All 7 accessible top-level pages plus 20 individual puppy detail routes are fully implemented and statically pre-rendered.

---

## 🎨 Design Direction & Editorial Luxury Aesthetic

| Design Dimension | Implementation Details |
|---|---|
| **Color Architecture** | Warm ivory (`#fffdf8`), deep cocoa espresso (`#2a170e`), soft cocoa (`#5a3a28`), toffee terracotta (`#c2622b`), honey gold (`#f2be6b`), parchment butter (`#fbe3b4`), sky air-cargo tint (`#bfddf5`), and petal blush (`#f9cdbf`). |
| **Typography Pairing** | **Headings**: `Fraunces` (variable luxury serif with warm organic teardrop curves). **Body & UI**: `Figtree` (clean, modern geometric sans-serif). **Accents**: `Shantell Sans` / cursive scrawl ("every puppy is family", "hello, it's me", chapter badges). |
| **Sketch Frame Cards** | Distinctive `tp-sketch` tilted cards (`rotate(-0.8deg)` to `rotate(0.8deg)`) with organic watercolor wash underlays, dynamic status tags, and video reel badges. |
| **Interactive Letter** | A vintage fill-in-the-blank letter form on `/contact` allowing clients to write directly to TeddyPups, choose their puppy, and post their letter with instant feedback or direct WhatsApp dispatch. |
| **Vintage Ticket Stubs** | The `/gone-home` page renders adopted puppies as collectible travel ticket stubs with perforated side notches, ticket numbers, and destination stamps ("home ♥"). |

---

## 🧭 Page Architecture & Completed Checklist

- [x] **`/` (Homepage)**: Editorial hero with puppy quick-tags, "Meet the pups" featured grid, "Two ways to meet your puppy" cards (Downtown Dubai Showroom vs. Imported for You), 3-step puppy journey roadmap, "Why families trust TeddyPups" trust pillars, Sarah M. spotlight testimonial, photo collage, and FAQ preview.
- [x] **`/puppies` (Available Puppies Discovery & Catalogue)**: Live reactive filtering by Origin (`In Dubai Showroom`, `Imported`) and Breed (`Maltipoo`, `Pomeranian`, `Poodle`, `Cavapoo`, `Shih Tzu`), real-time search input, dynamic active puppy counter, and empty states.
- [x] **`/puppies/[slug]` (Puppy Detail View)**: Statically pre-rendered routes for all 20 puppies. Includes breadcrumbs, high-resolution interactive photo gallery with thumbnail strip and fullscreen zoom lightbox, video reel player, comprehensive specifications table, health certifications, and embedded letter inquiry form with pre-selected puppy.
- [x] **`/how-it-works` (Adoption & Import Guide)**: Interactive tab switcher comparing "In Dubai — meet in person" (4 steps) and "Imported — order upon request" (4 steps), delivery breakdown (Same-Day Showroom, White-Glove UAE Delivery, Safe International Cargo), and the Premium Puppy Promise.
- [x] **`/happy-families` (Testimonials & Wall of Moments)**: "64 moments and counting", Sarah M. spotlight review, interactive photo wall of owners with their puppies, customer quotes, and modal viewer.
- [x] **`/faq` (Questions & Answers)**: 9 authentic questions with interactive accordion toggles, category filtering, keyword search, and direct concierge card.
- [x] **`/contact` (Visit & Contact)**: Vintage letter form ("Dear TeddyPups..."), WhatsApp direct link, phone `+971 54 167 6733`, email `teddypupsadmin@gmail.com`, Downtown Dubai showroom location, and Google Maps link.
- [x] **`/gone-home` (Hall of Fame)**: Collectible ticket stubs for 21 adopted puppies with destination notes and match-request concierge CTA.
- [x] **`404 Not Found`**: Custom branded error screen guiding visitors back to available puppies or the homepage.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5 (Strict type checking enabled)
- **Styling**: Tailwind CSS with custom design tokens (`milk`, `cocoa`, `toffee`, `honey`, `sky`, `blush`)
- **Icons**: Lucide React
- **Optimization**: Next.js Static Site Generation (SSG), pre-rendered static HTML for all 30 routes
- **Fonts**: Next/Font Google (`Fraunces`, `Figtree`, `Shantell_Sans`) with zero layout shift (CLS)

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js v18.17.0+ or v20.x
- npm v9+ or v10+

### Installation & Run

1. **Clone or navigate to the repository directory**:
   ```bash
   cd c:\Users\margi\Documents\antigravity\valiant-curie
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run TypeScript check**:
   ```bash
   npx tsc --noEmit
   ```

5. **Build and test production output**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🧪 Verification & Test Results

- **TypeScript Compilation**: `npx tsc --noEmit` passed with 0 errors.
- **Production Build**: `npm run build` generated 30 static pages with 0 errors.
- **Local Route Testing**: All 11 tested endpoints and media assets returned `200 OK`:
  - `GET /` -> `200 OK` (127 KB)
  - `GET /puppies` -> `200 OK` (26 KB)
  - `GET /puppies/maltipoo-max-male` -> `200 OK` (93 KB)
  - `GET /puppies/korean-teacup-maltipoo-female` -> `200 OK` (98 KB)
  - `GET /how-it-works` -> `200 OK` (41 KB)
  - `GET /happy-families` -> `200 OK` (43 KB)
  - `GET /faq` -> `200 OK` (37 KB)
  - `GET /contact` -> `200 OK` (49 KB)
  - `GET /gone-home` -> `200 OK` (83 KB)
  - `GET /brand/logo.png` -> `200 OK` (175 KB)
  - `GET /media/...webp` -> `200 OK` (21 KB)

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub (see GitHub instructions below).
2. Go to [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository `teddypups-uae`.
4. Vercel will automatically detect **Next.js**. Leave default build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **Deploy**. Your site will be live within 90 seconds.

---

## 📦 GitHub Preparation Steps

To commit and push the project to your GitHub account:

```bash
# 1. Initialize and configure git if needed
git add .
git commit -m "feat: complete TeddyPups U.A.E. premium website clone with Next.js and Tailwind"

# 2. Add your GitHub remote repository
# (Create a new empty repo on github.com/new named 'teddypups-uae')
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/teddypups-uae.git

# 3. Rename branch and push
git branch -M main
git push -u origin main
```
