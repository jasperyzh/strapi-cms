# 🚀 Strapi CMS for Astro Landing Page

This Strapi instance provides content management for the Astro landing page. Follow the setup instructions below to create the required content types and start managing your content.

## 🏁 Quick Start

Start your Strapi application with autoReload enabled:

```
npm run develop
```

This will launch the Strapi admin panel at [http://localhost:1337/admin](http://localhost:1337/admin).

## 📝 Content Type Setup Guide

Follow these steps to configure your Strapi CMS to work with the Astro landing page:

### 1. Create Collection Types

#### Hero Section
- Go to Content-Type Builder → Create new collection type → "Hero"
- Add fields:
  - Title (Text)
  - Description (Text, Long text)
  - Primary Button Text (Text)
  - Primary Button URL (Text)
  - Secondary Button Text (Text)
  - Secondary Button URL (Text)
  - Image (Media, Single image)

#### About Section
- Create collection type → "About"
- Add fields:
  - Title (Text)
  - Description (Text, Long text)
  - Content (Rich text)
  - Image (Media, Single image)
  - Stats (JSON)
    - *Example format: `[{"number":"500+","label":"Workshops Completed"},{"number":"5,000+","label":"Professionals Trained"},{"number":"98%","label":"Satisfaction Rate"}]`*

#### Experience Section
- Create collection type → "Experience"
- Add fields:
  - Title (Text)
  - Description (Text, Long text)
  - Testimonials (Component, Repeatable)

#### Pricing Section
- Create collection type → "Pricing"
- Add fields:
  - Title (Text)
  - Description (Text, Long text)
  - Plans (Component, Repeatable)

#### CTA Section
- Create collection type → "CTA"
- Add fields:
  - Title (Text)
  - Description (Text, Long text)
  - Button Text (Text)
  - Button URL (Text)

#### Site Configuration
- Create single type → "Site-Config"
- Add fields:
  - Site Name (Text)
  - Site Description (Text, Long text)
  - Logo (Media, Single image)
  - Favicon (Media, Single image)
  - Social Links (JSON)
    - *Example format: `[{"platform":"Twitter","url":"https://twitter.com"},{"platform":"LinkedIn","url":"https://linkedin.com"}]`*

### 2. Create Components

#### Testimonial Component
- Go to Content-Type Builder → Create new component → Category: "Sections", Name: "Testimonial"
- Add fields:
  - Name (Text)
  - Role (Text)
  - Content (Rich text)
  - Avatar (Media, Single image)

#### Plan Component
- Create new component → Category: "Sections", Name: "Plan"
- Add fields:
  - Title (Text)
  - Price (Text)
  - Description (Text, Long text)
  - Features (JSON)
    - *Example format: `["Feature 1", "Feature 2", "Feature 3"]`*
  - Is Popular (Boolean)
  - Button Text (Text)

### 3. Configure Permissions

1. Go to Settings → Roles → Public
2. In the Permissions tab, enable "find" and "findOne" for all content types
3. Save your changes

## 🖥️ Using the Admin Panel

1. Create content for each section in the Content Manager
2. Upload images through the Media Library
3. Configure your site settings in the Site-Config section

## 🔄 API Endpoints

The Astro frontend will access these endpoints:

- `/api/hero`
- `/api/about`
- `/api/experience?populate=testimonials.avatar`
- `/api/pricing?populate=plans`
- `/api/cta`
- `/api/site-config?populate=logo,favicon`

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [Content Type Builder Guide](https://docs.strapi.io/user-docs/content-type-builder)
- [Roles & Permissions Guide](https://docs.strapi.io/user-docs/users-roles-permissions)
- [Media Library Guide](https://docs.strapi.io/user-docs/media-library)

---

## 🚀 Strapi CLI Commands

### `start`

Start your Strapi application with autoReload disabled.

```
npm run start
```

### `build`

Build your admin panel.

```
npm run build
```
