# TeddyPups U.A.E. — Technical Clone & Enhancement Plan

## Reference Website Audit Summary
- **Target URL**: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **Brand Identity**: TeddyPups U.A.E. — Premium teacup & teddy bear puppies in Downtown Dubai
- **Core Value Proposition**: Luxury showroom in Downtown Dubai with immediate same-day take home, plus bespoke international imports from certified Korean and European teacup breeders with 24/7 client care.
- **Color Architecture**:
  - `milk`: `#fffdf8` (Warm ivory / cream canvas)
  - `cocoa`: `#2a170e` (Deep editorial espresso heading / text)
  - `cocoa-soft`: `#5a3a28` (Warm chocolate body copy)
  - `toffee`: `#c2622b` (Warm terracotta/toffee primary accent)
  - `toffee-deep`: `#a24a1a` (Hover & active states)
  - `toffee-ink`: `#8e3f15` (Deep accent borders & shadows)
  - `honey`: `#f2be6b` (Muted gold / warm honey highlight & badges)
  - `honey-soft`: `#fbe3b4` (Soft butter/parchment washes)
  - `sky`: `#bfddf5` (Air travel & health guarantee tint)
  - `sky-deep`: `#2f6e9e` (Cool accent contrast)
  - `blush`: `#f9cdbf` (Tender petal tint)
- **Typography Pairing**:
  - **Headings & Display**: `Fraunces` (Editorial, variable serif with soft organic curves)
  - **Body & Controls**: `Figtree` (Ultra-crisp geometric sans-serif)
  - **Playful Accents**: `Shantell Sans` / handwriting cursive ("every puppy is family", "hello, it's me", chapter badges)
- **Authentic Data Discovered**:
  - 15 available puppies with real photographs, video reels, ages, breeds, and specs
  - 5+ gone-home puppies + 20 ticket stubs in the Hall of Fame
  - Actual contact details: `+971 54 167 6733`, `teddypupsadmin@gmail.com`, Downtown Dubai showroom
  - Authentic customer reviews, journey steps, FAQ questions, and letter inquiry format

---

## Page-by-Page Checklist & Route Architecture

| Route | Page / Feature | Key Elements & Reference Fidelity |
|---|---|---|
| `/` | **Home** | Editorial hero with floating puppy quick-tags, "Meet the pups" card grid with tilt & wash effects, "Two ways to meet your puppy" cards, "Your puppy journey" 3-step timeline, "Why families trust TeddyPups" badges, "Happy families & puppies" carousel, "Questions, answered" FAQ preview, newsletter/CTA footer |
| `/puppies` | **Available Puppies Catalogue** | Real-time filter pills (All, In Dubai, Imported, Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu), search bar, live active counts ("15 available puppies"), responsive sketch-frame cards with tilt effects, status badges, video indicators |
| `/puppies/[slug]` | **Puppy Detail Page** | Dynamic route for all 20 puppies. Breadcrumb navigation, chapter tag, high-res interactive photo gallery & video modal, detailed attributes table (Breed, Sex, Age, Origin, Adult Weight Est., Vaccinations, Microchip, Passport), certified breeder notes, "Enquire on WhatsApp" + Interactive Modal Enquiry Form |
| `/how-it-works` | **How It Works** | Interactive tab switcher ("In Dubai — meet in person" vs "Imported — order upon request"), 4-step detailed journey cards, "Delivery & collection" breakdown (Dubai same day vs international cargo), "Why choose us" trust badges |
| `/happy-families` | **Happy Families** | "Our wall of happy endings" header, Sarah M. spotlight quote, photo wall of owners with their puppies, interactive modal view of customer stories |
| `/faq` | **Frequently Asked Questions** | 9 comprehensive accordion questions, search filter, category badges ("sniff out a question - 9 notes on the board"), WhatsApp direct help card |
| `/contact` | **Visit & Contact** | Authentic conversational letter form ("Dear TeddyPups, my name is..."), interactive dropdown of available puppies, phone, WhatsApp direct link, email, Downtown Dubai location card, interactive submit handling with realistic demo toast feedback |
| `/gone-home` | **Gone Home Hall of Fame** | Vintage ticket-stub cards ("one ticket home", "admit one", "home ♥"), displaying puppies who found forever homes |

---

## Unique & Premium Frontend Enhancements
1. **Interactive Image & Video Gallery**: Keyboard-accessible lightbox with zoom, thumbnail carousel, and fluid video player for puppies with reels.
2. **Interactive Letter Enquiry Form**: Faithfully reproduces the vintage fill-in-the-blank letter experience with client-side validation, interactive dropdowns, and instant feedback.
3. **Smooth Filters & Animations**: Restrained framer-motion transitions, subtle card tilt hover, sketch frame wash variations, respecting `prefers-reduced-motion`.
4. **Instant WhatsApp Generator**: Form fields dynamically generate a pre-filled WhatsApp message URL so users can message the real number directly with their selected puppy.
5. **Sticky Navigation & Floating Quick Actions**: Graceful blur navigation bar with quick contact pill and mobile drawer with micro-interactions.

---

## Tech Stack & Project Setup
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict type checking)
- **Styling**: Tailwind CSS with custom reference theme tokens (`toffee`, `cocoa`, `milk`, `honey`, `sky`, `blush`)
- **Icons**: Lucide React
- **Animations**: Tailwind transitions & micro-interactions with reduced motion support
- **Assets**: 100% authentic images and brand logo downloaded from reference site into `/public`
