# Vol8Hub

**Peer-curated simulator preparation intelligence for Cathay Pacific Airbus pilots.**

vol8hub.com is a community-run resource where active line pilots share recent simulator check experiences to help colleagues prepare for upcoming vol8 sessions. It is not affiliated with, endorsed by, or connected to Cathay Pacific Airways Limited in any way.

---

## What This Is

- A searchable archive of real pilot sim experiences (A320 / A330 / A350 / A350-1000)
- Filterable by fleet type, check type (PC / RT), cycle (P1–P6 / 1R–6R), and year
- Anonymous submission channel for pilots who want to contribute without being identified
- Email notification list for new entries (powered by Beehiiv)

## What This Is Not

- Not an official Cathay Pacific resource
- Not a union publication
- Not a substitute for official company operations manuals, SOPs, or training publications
- Not a social network or job board

---

## Tech Stack

| Layer | Tool |
|---|---|
| Hosting | Cloudflare Pages |
| DNS / Domain | Cloudflare Registrar |
| Version control | GitHub |
| Analytics | Google Analytics 4 |
| Email notifications | Beehiiv |
| Build | Static HTML / CSS / JS (no framework) |

---

## Contributing

Pilots wishing to contribute a recent sim experience can submit anonymously via the Submit page at vol8hub.com/submit.html. All submissions are reviewed before publication. Contributor identity is never disclosed without explicit written consent.

---

## Security

### Identity

The operator of this repository and website chooses to remain anonymous. No real names, addresses, or personal identifiers are attached to this project. WHOIS information for vol8hub.com is redacted via Cloudflare Registrar. Do not attempt to identify or dox the operator.

### Security Headers

All HTML pages in this project must include the following meta tags in the `<head>` block for baseline browser security:

```html
<!-- Security headers -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://subscribe-forms.beehiiv.com https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://www.google-analytics.com;
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
  frame-ancestors 'none';
">
```

### robots.txt

```
User-agent: *
Allow: /
Disallow: /assets/private/
Sitemap: https://vol8hub.com/sitemap.xml
```

### .gitignore

```
.DS_Store
Thumbs.db
*.env
*.log
node_modules/
.cursor/
```

### Cloudflare Settings (required)

- HTTPS: Always Use HTTPS — ON
- HSTS: Enabled
- TLS minimum: 1.2
- Bot Fight Mode: ON
- Hotlink Protection: ON
- Email Address Obfuscation: ON

---

## Legal

All content on vol8hub.com is subject to the Disclaimer, Terms of Service, and Privacy Policy published at vol8hub.com. See `/disclaimer.html`, `/tos.html`, and `/privacy.html`.

© Vol8Hub 2026. All rights reserved.
