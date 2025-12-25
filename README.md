# Gather Hub

**Gather Hub** is the operational hub for events and activities — from registration and payment to attendance validation and participation proof.

This repository contains the **marketing website and public landing page** for Gather Hub, built using **Tailwind CSS** and **Next.js**, with optional content management powered by **Sanity**.

Gather Hub supports a wide range of use cases, including trainings, workshops, seminars, conferences, community events, and corporate programmes.

---

## Tech Stack

- **Next.js** – React framework for production-ready web applications
- **Tailwind CSS** – Utility-first CSS framework
- **Tailwind Plus** – Commercial UI components and templates
- **Sanity** – Headless CMS (used for blog and content pages)

---

## Getting Started

### 1. Install Dependencies

Install all required npm dependencies:

```bash
npm install
```

---

### 2. Set Up Sanity (Optional)

If you plan to use the blog or content management features, create a new Sanity project:

```bash
npm create sanity@^4.2 -- --env=.env.local --create-project

"Gather Hub Content" --dataset production
```

If prompted:

> **“Would you like to add configuration files for a Sanity project in this Next.js folder?”**
> Choose **“No”**.

---

### 3. (Optional) Import Demo Content

You may import seed data to preview example blog content:

```bash
npx sanity@^4.2 dataset import seed.tar.gz
```

---

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open the site in your browser:

👉 [http://localhost:3000](http://localhost:3000)

---

### 5. Sanity Studio

If Sanity is enabled, you can manage content via the embedded Sanity Studio:

👉 [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Customisation

All site content and layouts can be customised by editing files in the `/src` directory.

Changes are reflected immediately during development.

This repository is intended for:

* Landing page content
* Marketing pages
* Product messaging
* Documentation or blog posts

---

## Branding & Positioning

**Product Name:** Gather Hub
**Domain:** [https://gatherhub.app](https://gatherhub.app)

**Positioning:**

> *The operational hub for events and activities.*

**Key Concepts:**

* Activity-first (not training-specific)
* Ticketing & payments
* Attendance validation (QR / ticket number)
* Participation proof
* Clean operational workflows

---

## License

This project uses a commercial **Tailwind Plus** template and is licensed under the
[Tailwind Plus License](https://tailwindcss.com/plus/license).

Ensure you have a valid Tailwind Plus license before using this code in production.

---

## Learn More

* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Next.js Documentation](https://nextjs.org/docs)
* [Headless UI](https://headlessui.dev)
* [Sanity](https://www.sanity.io)

---

## About

**Gather Hub** is built and maintained by **Developers Hub**.

It is designed to help organisations run purposeful gatherings calmly, reliably, and end-to-end — without spreadsheets or manual tracking.
