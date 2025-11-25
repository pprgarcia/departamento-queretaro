# Apartment for Sale – Querétaro (Rinconada Pirules 2a Sección, México)

**Personal full-stack project** • HTML • TailwindCSS • JavaScript • Supabase • Vercel • Leaflet

Welcome to the source code of my real-estate website built to sell my own apartment in Querétaro, México.  
Created from scratch as a real-world exercise in full-stack development, responsive design, SEO, security, and full compliance with Mexican data-protection law (LFPDPPP).

**Live site:** <https://departamento-queretaro.vercel.app>

## Key Features

- 100 % responsive design (desktop, tablet, mobile)
- Photo gallery with lightbox
- Interactive map using **Leaflet + OpenStreetMap** (zero API cost)
- Secure contact form with data stored in Supabase
- Full privacy notice compliant with **LFPDPPP** (elegant modal)
- Private admin panel (hidden from public repo):
  - “Contacted” checkboxes & bulk delete
  - One-click Excel export
  - Password protection + secret URL

## Security Highlights

- Supabase anon key injected via Vercel environment variable (never hardcoded)
- `.env` file completely removed from Git history
- Admin panel URL and code kept outside the public repository
- Controlled error message shown locally (expected & safe behavior)

## Technologies

| Technology           | Purpose                                      |
|----------------------|----------------------------------------------|
| HTML5 + TailwindCSS  | Layout and modern styling                    |
| JavaScript (ES6+)    | Carousel, mobile menu, lightbox, form logic  |
| Supabase             | Lead database (cloud PostgreSQL)             |
| Vercel               | Hosting + CI/CD + environment variables      |
| Leaflet + OSM        | Free interactive map                         |

## Private Admin Panel

- Secret URL (known only by owner)
- Strong password login
- Full lead table with “contacted” status
- Single or bulk delete
- Direct Excel export

## Legal Compliance

- Complete privacy notice according to **Mexican LFPDPPP**
- Explicit consent required before submitting the form
- ARCO rights guaranteed via email

## How to run locally

```bash
git clone https://github.com/pprgarcia/departamento-queretaro.git
cd departamento-queretaro
# Open public/index.html with Live Server or directly in the browser
```

The contact form only works in production (Vercel) because the Supabase key is injected as an environment variable.
Locally you will see a controlled error message – this is normal and secure.

Future Ideas:

- Direct WhatsApp button from the form
- 360° virtual tour
- Email/SMS notifications on new leads

Author: José Rodríguez García

Full-Stack Developer

• Querétaro, México

<pprgarcia.jr@gmail.com>
