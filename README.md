# 🏥 Al Taj Alfadhi Clinic (عيادة التاج الفضي) — Official Website

[![Live Demo](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&logo=shield)](https://github.com/EmanFatima045/Al-TajFadhaiClinic-website)
[![Language](https://img.shields.io/badge/Language-English%20%7C%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20(RTL)-burgundy?style=for-the-badge)](https://github.com/EmanFatima045/Al-TajFadhaiClinic-website)
[![MOH & SHA](https://img.shields.io/badge/Accreditation-MOH%20%26%20SHA%20Certified-gold?style=for-the-badge)](https://github.com/EmanFatima045/Al-TajFadhaiClinic-website)
[![Mobile Optimized](https://img.shields.io/badge/Mobile-100%25%20Responsive-blue?style=for-the-badge&logo=apple)](https://github.com/EmanFatima045/Al-TajFadhaiClinic-website)

A modern, high-conversion medical website designed for **Al Taj Alfadhi Clinic** located in Sharjah and Dubai, United Arab Emirates. Built with a balanced luxury aesthetic (**Deep Burgundy `#9B0D17`**, **Warm Cream `#FFE7CB`**, and **Champagne Taupe `#BFAA91`**), instant bilingual Arabic (RTL) & English localization, and an authentic **Saudi Sheikh AI Concierge ("TajBot")**.

---

## 🌟 Key Highlights & Features

### 1. 🤖 TajBot — Saudi Sheikh AI Medical Assistant
- **Classy Saudi Sheikh Avatar (`tajbot-sheikh.svg`):** Custom-designed vector robot wearing authentic Saudi royal attire (Thobe, Shemagh, Agal, gold stethoscope, AI visor face).
- **Proactive Welcome Callout:** Automatically greets visitors with an interactive speech bubble 1.8 seconds after landing on the site.
- **Instant Medical Inquiries:** Answers patient questions regarding PRP hair & skin therapies, wound care, stitches, doctor schedules, consultation pricing, and clinic hours.
- **Direct WhatsApp Routing:** Connects patients directly to **Dr. Bushra Sobia (`+971 50 902 4717`)** with pre-filled consultation inquiries.

### 2. 🌐 100% Bilingual & Seamless RTL Engine
- Instant toggle between **English** and **العربية (Arabic)** without page reload.
- Full Right-to-Left (**RTL**) layout mirroring including navigation, breadcrumbs, doctor grids, and chatbot window.
- High-coverage DOM tree walker with normalized string matching for 100% Arabic translation coverage.

### 3. 📱 Mobile & Desktop Multi-Viewport Optimization
- **Dual Floating Actions:**
  - **WhatsApp Direct:** Pinned permanently to the **bottom-left** (`54×54px`).
  - **TajBot Assistant:** Pinned permanently to the **bottom-right** (`58×58px`).
- **Zero Horizontal Overflow:** Guaranteed across iOS, Android, Samsung, iPad, and 4K desktop screens.
- **Touch-Friendly Controls:** Minimum 16px font on form inputs to prevent automatic iOS Safari zoom; swipeable horizontal category filter tabs.
- **Fluid Typography:** Scales gracefully via CSS `clamp()`.

### 4. 📅 Interactive Appointment Booking Engine
- Step-by-step consultation reservation with doctor selection, date picker, and time slot selector.
- Generates a unique patient booking reference ID (`#TAJ-XXXXX`).
- Pop-up modal with an instant **"Confirm via WhatsApp"** button sending a pre-formatted message directly to Dr. Bushra.

### 5. 🧮 Interactive Treatment Cost Calculator
- Real-time procedure estimator for PRP Hair Therapy, PRP Vampire Facial, Minor Surgical Stitches, and Routine Consultations.
- Instant subtotal calculation with zero page refresh.

---

## 📂 Project Structure

```
Al-TajFadhaiClinic-website/
├── index.html              # Homepage (Hero Video, Trust Badges, Services, Doctors, Booking, Reviews, FAQ)
├── about.html              # About Clinic, Accreditation (MOH & SHA), Values & Facility Tour
├── services.html           # Detailed Medical Services & Interactive Filter Tabs
├── doctors.html            # Verified Medical Team & Dr. Bushra Sobia Profile
├── contact.html            # Location Map, Contact Numbers, Operating Hours & Inquiry Form
├── appointment.html        # Dedicated Online Consultation Booking System
├── favicon.svg             # High-Resolution Vector Favicon (Gold & Burgundy Crown Emblem)
├── apple-touch-icon.svg    # Mobile Homescreen Touch Icon for iOS & Android Bookmarks
├── site.webmanifest        # Progressive Web App (PWA) Manifest for Mobile Bookmarks
├── sitemap.xml             # XML Sitemap with Hreflang Tags for Google/Bing Indexing
├── robots.txt              # Search Engine Crawler Directives & Sitemap Reference
├── style.css               # Luxury Design System, Theme Tokens & Responsive Breakpoints
├── app.js                  # Core Application Engine (TajBot, Translation, Booking, Calculator)
├── script.js               # Synchronized Standalone Production Script
├── tajbot-sheikh.svg       # Custom Vector Asset of TajBot in Saudi Sheikh Attire
└── README.md               # Project Documentation & CDN Setup Guide
```

---

## 📞 Clinic Contact Information

- **Senior GP & Aesthetic Physician:** Dr. Bushra Sobia
- **Direct WhatsApp & Mobile:** [`+971 50 902 4717`](https://wa.me/971509024717)
- **Clinic Landline:** `+971 6 543 2190`
- **Location:** King Faisal Street, Al Majaz, Sharjah, UAE
- **Working Hours:**
  - Saturday – Thursday: 9:00 AM – 10:00 PM
  - Friday: 2:00 PM – 10:00 PM

---

## 🚀 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/EmanFatima045/Al-TajFadhaiClinic-website.git
   cd Al-TajFadhaiClinic-website
   ```

2. Open `index.html` in any modern web browser or use VS Code Live Server:
   - **VS Code:** Right-click `index.html` → *"Open with Live Server"*
   - **Python Simple Server:** `python -m http.server 8000`

---

## 🛠️ Deployment Instructions

### Deploying to GitHub Pages
1. Push the code to the `main` branch.
2. Go to your repository on GitHub: `https://github.com/EmanFatima045/Al-TajFadhaiClinic-website`
3. Navigate to **Settings** → **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at: `https://emanfatima045.github.io/Al-TajFadhaiClinic-website/`

---

## ⚡ Content Delivery Network (CDN) & SEO Setup

### 1. Activating CDN on IONOS
If you are hosting this website via **IONOS**:
1. Log in to your [IONOS Control Center](https://www.ionos.com/).
2. Navigate to **Websites & Shops** → Select your domain `altajalfadhiclinic.ae`.
3. In the domain settings, click **Performance & Security** → Select **CDN (Content Delivery Network)**.
4. Turn ON **Web Optimizer & Global Caching** as per the [IONOS CDN Guide](https://www.ionos.com/help//index.php?id=547).

### 2. Built-in CDN Preconnects
All HTML files automatically include pre-connected global CDNs for lightning-fast asset loading:
- **Google Fonts CDN:** Pre-warmed connection to `https://fonts.googleapis.com` and `https://fonts.gstatic.com`.
- **Unsplash CDN:** Global image delivery via `https://images.unsplash.com`.
- **Cloudflare CDN:** Fast edge caching via `https://cdnjs.cloudflare.com`.

### 3. SEO Sitemap & Favicons
- **Sitemap:** Search engine XML sitemap ready at [`sitemap.xml`](file:///c:/Users/Dr%20Bia/Desktop/Al-TajFadhaiClinic-website/sitemap.xml).
- **Robots Directive:** [`robots.txt`](file:///c:/Users/Dr%20Bia/Desktop/Al-TajFadhaiClinic-website/robots.txt) auto-indexes all clinical pages and links directly to the sitemap.
- **Favicon & Apple Touch Icon:** Custom crown emblem vector (`favicon.svg`, `apple-touch-icon.svg`) and PWA webmanifest (`site.webmanifest`).

---

## 📄 License
© 2026 Al Taj Alfadhi Clinic. All rights reserved. Licensed by Sharjah Health Authority (SHA) and UAE Ministry of Health (MOH).
