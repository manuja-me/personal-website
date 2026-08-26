# Security Policy & Hardening Guide

This document outlines the security controls, header configurations, vulnerability disclosure guidelines, and DNS security records implemented for **manuja.dev**.

---

## 1. Vulnerability Disclosure Policy (RFC 9116)

If you discover a security vulnerability in this project or infrastructure, please report it responsibly:

- **Security Contact:** [manuja.public@gmail.com](mailto:manuja.public@gmail.com)
- **Designated Location:** `/.well-known/security.txt`
- **Preferred Language:** English (`en`)
- **Policy:** We appreciate ethical vulnerability disclosures and will respond within 48 hours.

---

## 2. Implemented Security Headers

The application implements defense-in-depth security policies via HTML `<meta>` tags and static host headers (`public/_headers`):

| Header | Configuration / Value | Purpose |
|---|---|---|
| **Content-Security-Policy (CSP)** | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; font-src 'self' https://cdn.jsdelivr.net; img-src 'self' data: https:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';` | Mitigates XSS, injection, and unauthorized data exfiltration. |
| **Strict-Transport-Security (HSTS)** | `max-age=31536000; includeSubDomains; preload` | Forces HTTPS and prevents SSL-stripping / MitM attacks. |
| **X-Frame-Options** | `DENY` | Prevents iframe embedding and clickjacking attacks. |
| **X-Content-Type-Options** | `nosniff` | Disables MIME type sniffing. |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Protects sensitive URL path data from leaking on cross-origin requests. |
| **Permissions-Policy** | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=()` | Blocks unauthorized access to sensitive device APIs. |
| **Cross-Origin-Opener-Policy (COOP)** | `same-origin` | Isolates top-level browsing context from cross-origin windows. |

---

## 3. Email & DNS Authentication (DMARC, SPF, DKIM)

To protect the domain `manuja.dev` from email spoofing, phishing, and domain abuse, configure the following DNS records in your DNS provider (Cloudflare, Namecheap, Route53, etc.):

### DMARC Record
- **Type:** `TXT`
- **Host / Name:** `_dmarc` (or `_dmarc.manuja.dev`)
- **Value:**
  ```text
  v=DMARC1; p=reject; sp=reject; pct=100; rua=mailto:manuja.public@gmail.com; aspf=r; adkim=r;
  ```
  *(Note: If transitioning from monitoring mode, start with `p=none` or `p=quarantine`, then enforce `p=reject`)*

### SPF Record (If domain does not send emails)
- **Type:** `TXT`
- **Host / Name:** `@` (or `manuja.dev`)
- **Value:**
  ```text
  v=spf1 -all
  ```
  *(If using an email provider like Google Workspace / Proton, replace `-all` with the provider's `include:` SPF rule)*

---

## 4. Edge CDN & GitHub Pages Hardening

When using Cloudflare or a reverse proxy in front of GitHub Pages:
1. Enable **Always Use HTTPS** and **HTTP Strict Transport Security (HSTS)** with `max-age=31536000`, `includeSubDomains`, and `preload`.
2. Enable **Automatic HTTPS Rewrites**.
3. Under Cloudflare Rules → Transform Rules, inject any custom edge security headers defined in `public/_headers`.
