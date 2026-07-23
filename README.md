# USL Corporation Website — Static Clone (GitHub Pages)

This repository (`adgoldman9/uslcorporation`) hosts a static, faithful clone of the
USL Corporation website, originally built and published on Wix
(`https://uslcorporation.wixsite.com/my-site`). The clone is deployed via GitHub
Pages from the `/docs` folder on the `main` branch.

## Current deployment status

| Item | Status |
|---|---|
| GitHub Pages | **Enabled.** Source: `Deploy from a branch` → `main` / `/docs`. |
| Live temporary URL | `https://adgoldman9.github.io/uslcorporation/` |
| Custom domain (`uslcorporation.com`) | **Not associated.** Intentionally removed — see "Domain cutover" below. |
| Production domain cutover | **NOT DONE. Requires explicit approval from Andrew Goldman before proceeding.** |
| Backup branch | `pre-wix-clone-backup` — snapshot of the repo prior to any clone work. |

## Domain cutover — explicitly gated, not yet authorized

A `CNAME` file containing `uslcorporation.com` was included in the initial `/docs`
build (per the original build spec, anticipating eventual custom-domain use). Once
GitHub Pages was enabled, GitHub auto-detected that file and associated
`uslcorporation.com` as this repo's custom domain — which caused the temporary
`adgoldman9.github.io` preview URL to auto-redirect to `uslcorporation.com`.

**This association has been removed.** The custom domain field in Settings → Pages
is now cleared, and the `CNAME` file was removed from the repo as part of that
action (GitHub deletes it automatically when you clear the custom domain field).
The site is reachable only at the temporary `adgoldman9.github.io/uslcorporation/`
URL until Andrew explicitly approves the production cutover.

**Important discovery during this work:** while checking the above, `https://uslcorporation.com`
was found to currently return a Vercel `404: NOT_FOUND` error page — it is not
currently serving Wix content, GitHub Pages content, or any working page. This is
a pre-existing condition unrelated to this clone project and was not caused by any
action taken here. Andrew should be aware the production domain is currently broken
regardless of the status of this migration.

Cutting the domain over to this GitHub Pages clone (re-adding the custom domain,
confirming Cloudflare DNS records, enabling HTTPS enforcement, and unpublishing/
redirecting the Wix site) is Phase 6 work and will not be performed without
Andrew's explicit sign-off.

## Vercel (`uslcorporation.vercel.app`) disposition

A separate, pre-existing Vercel project is connected to this same GitHub repository
and has its own auto-deploy hook, which fires on every push to `main` (visible as
"Deployments" in the repo sidebar). This is passive, pre-existing behavior — no
Vercel configuration, domain, or connection was created, modified, or removed as
part of this work. Vercel has been left administratively untouched, per instruction.
Its current relationship to `uslcorporation.com` (if any) is unclear given the
Vercel 404 found at that domain — this should be reviewed by Andrew alongside the
domain cutover decision, not resolved unilaterally here.

## Microsoft 365 GCC compatibility

This clone was built to remain fully compatible with USL's Microsoft 365 GCC
environment:

- No changes were made to MX, SPF, DKIM, DMARC, Autodiscover, or any
  Microsoft-verification DNS records.
- No public file upload capability exists on the static site.
- No third-party or unapproved external form processor is used. The original Wix
  contact form is not reproduced; `contact.html` instead provides a `mailto:` link
  and a mandatory on-page warning against submitting CUI/ITAR-controlled data,
  export-controlled files, proprietary drawings, or other sensitive information
  through the public website.
- Cloudflare remains the authoritative DNS provider; nothing here alters that.
- GitHub Pages serves only the public marketing website — no email, identity, or
  internal-system traffic is routed through it.

## DNS ownership register

| Record purpose | Authoritative owner | Touched by this project? |
|---|---|---|
| Apex/www routing for `uslcorporation.com` | Cloudflare (DNS host) | No — read-only observation only (see cutover note above) |
| MX / mail routing | Microsoft 365 GCC | No |
| SPF / DKIM / DMARC | Microsoft 365 GCC | No |
| Autodiscover / MS verification records | Microsoft 365 GCC | No |
| GitHub Pages custom domain association | GitHub repo settings | Was auto-set by the CNAME file, then removed (see above) |

## Page / file map

| Page | File | `<title>` |
|---|---|---|
| About (root) | `docs/index.html` | USL | Aerospace & Defense Engineering and Manufacturing Solutions |
| Aerospace & Defense | `docs/aerospace-defense.html` | Aerospace & Defense | USL |
| Products and Services | `docs/products-services.html` | Products and Services | USL |
| Capabilities | `docs/capabilities.html` | Capabilities | USL |
| Blog | `docs/blog.html` | Blog | USL |
| Blog post | `docs/blog-post-white-paper-cad-on-demand.html` | (title + date only; original post body verified empty on live Wix site) |
| Contact | `docs/contact.html` | Contact | USL |
| 404 | `docs/404.html` | Page Not Found | USL |

Supporting files: `docs/assets/css/style.css`, `docs/assets/js/main.js`,
`docs/assets/images/*` (9 real assets downloaded from the live Wix site),
`docs/robots.txt`, `docs/sitemap.xml`, `docs/.nojekyll`.

Design-token source of truth: `02_Font_Color_Asset_Specification.md` in this folder
— documents exact computed fonts/colors from the live Wix site and the font
substitution plan (Maitree and Black Ops One used directly as Google Fonts;
DIN Neuzeit Grotesk substituted with Barlow; Helvetica/Avenir substituted with the
system sans stack).

## Known limitations / open items

- Tablet and mobile breakpoint screenshots could not be captured in this
  environment (`resize_window` does not actually resize the viewport here) —
  documented in `02_Font_Color_Asset_Specification.md`. Desktop-width screenshots
  of the live GitHub Pages clone have been captured and verified.
- The original Wix contact form is not reproduced (by design — see Contact page
  and Microsoft 365 GCC compatibility section above).
- NAICS codes (336413) and PSC codes (R425, J015) on the Capabilities page were
  verified against the live Wix capability-statement image and are reproduced
  exactly, with no additions or inferred codes.
