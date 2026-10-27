# Tecni Center — Feature note (strategy + art direction)

## Goal
Static Astro site that turns Google Maps / local-search traffic in Ibagué into WhatsApp chats and phone calls for a one-person TV and audio repair shop.

## Facts (verified)
- Owner and sole technician: Sr. Yepes. One-person brand.
- Cra. 13 #7-13 B, barrio 20 de Julio, Ibagué, Tolima. Plus Code FV33+2V. Coords 4.4525649, -75.1453621.
- Phone and WhatsApp: +57 316 6412601 (same number, confirmed).
- Hours: Mon–Fri 09:00–18:30, Sat 09:00–15:00, Sun closed.
- Google: 5.0, 25 reviews, 4 photos, no website. Google category: electronics store.
- Google metrics: 2,552 views (+53%), 323 interactions, 457 searches (+501%). Top queries: "televisor" 250, "samsung" 150, "televisores" 39, "televisor samsung" 18.
- Review themes (real): honesty, warranty, professionalism. Quote the originals in Spanish, never paraphrase.
- Brand logos: owner states they are authorized for Samsung, LG, JVC, Bose, JBL and the other major TV/audio brands, plus Chinese brands.

## Constraints
- Stack: Astro, static output, plain CSS, near-zero JS. Fonts self-hosted. Deploy to Cloudflare Pages or Netlify.
- No photos exist. Images are AI-generated.
  - Never present AI images as real photos of the shop or of Sr. Yepes.
  - No AI portrait of him. Use bench scenes, hands, components.
  - Swap in a real phone photo of him and the shop when available.
- No invented testimonials, numbers, certifications, prices or warranty terms.
- Do not claim "authorized service" unless true. Footer note: brands belong to their owners.

## Audience and problem
- Primary: Ibagué household with a broken TV (mostly Samsung). Fears being overcharged, being told it is not repairable, or losing the TV.
- Secondary: owners of sound equipment (Bose, JBL, JVC), and people who need batteries.
- Main objection: "Will I get a fair price and an honest answer?" The reviews answer it directly.
- Primary conversion: WhatsApp with a prefilled message. Secondary: tap-to-call (`tel:`), sticky on mobile.

## Page structure (single page, `/`)
1. Hero: "Su televisor, con diagnóstico honesto." Service-ticket form (brand + symptom) that builds the WhatsApp message. Call button next to it.
2. How it works: 3 steps (write the failure → diagnosis → repair with warranty).
3. Brands: logo strip.
4. Services: TV, sound, batteries.
5. Reviews: real quotes, 5.0 / 25 with a link to Google.
6. Sr. Yepes: one-person shop, direct dealing (illustrated, no fake face).
7. Location: map, hours, "Cómo llegar" (Waze / Google Maps).
8. FAQ (with FAQ schema).
9. Final CTA + footer.

## SEO
`LocalBusiness` JSON-LD with geo and hours, sitemap, title/description targeting "reparación de televisores Samsung Ibagué" and "20 de Julio". Link the site from the Google profile. Per-service pages later.

## Art direction: "La orden de servicio"
- Concept: the site looks like the shop's service-order ticket pinned over a technician's bench. Honest, technical, handmade.
- Memorable element: the hero ticket. Visitors pick brand and symptom, and it fills in the WhatsApp message live.
- Motif: resistor colour-code bands as dividers and the bullet marker.
- Palette:
  - Paper `#F2EEE4`
  - Ink `#16181A`
  - Solder amber `#F0A202` (accent)
  - Board green `#1E5B45` (WhatsApp action)
  - Warning orange `#D8431F` (sparingly)
- Type: Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono (ticket and labels). Scale 1.25.
- Imagery: warm, shallow-depth bench scenes (oscilloscope glow, TV mainboard, screwdrivers). One consistent AI prompt style, labelled as illustration.
- Motion: small, CSS only (ticket stamp, button press), `prefers-reduced-motion` respected.

## Pending data
- Diagnostic fee, warranty length, home service or pickup yes/no, domain name, service list beyond TV/sound/batteries.
- The original Spanish text of the 25 reviews.

## Acceptance checks
Lighthouse mobile ≥ 95 (performance, SEO, accessibility). `tel:` and `wa.me` links tested on a phone. Prefilled message URL-encoded correctly. No console errors. 360px and 1440px layouts reviewed. Contrast AA.

## Next step
Approve direction → scaffold Astro → build hero ticket and the rest of the sections → AI image generation prompts → validation.

## Status (2026-10-26)
Built: Astro site with hero ticket, brands, real reviews with a Google review link, process, services, owner, location with a click-to-load map, FAQ, mobile contact bar, cookie banner (analytics only after consent), legal pages (`/privacidad`, `/cookies`, `/terminos`, `/garantia`), 404, sitemap, robots, security headers (`public/_headers`), OG image.
Verified: build OK, Lighthouse mobile 99 / 100 / 100 / 92 (the SEO link-text issue was fixed afterwards), no console errors on `/`, no horizontal overflow at 390 and 1440 px, ticket message, consent flow and routes tested in Chrome.
Not done: AI images (no image tool in this session), real deploy, GA4 (`PUBLIC_GA_ID`), real phone test of `tel:` and `wa.me`.
Pending data: owner email and ID for the data policy, warranty term (the legal page says it is given in writing), official logo files for JVC/Hisense/TCL/Philips.
Legal texts are templates for Colombia (Ley 1581/2012, Ley 1480/2011): have a lawyer review them.
