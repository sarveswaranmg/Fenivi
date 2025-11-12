# Fenivi — Frontend (Vite + React + Tailwind + Firebase)

A modern marketing + knowledge hub frontend built with Vite, React, Tailwind CSS, GSAP and Firebase (Auth, Firestore, Storage). This repository contains the Fenivi web app used to publish articles, manage content via an admin dashboard, and present articles on a responsive landing site.

---

## Key Features
- Responsive landing pages and Knowledge Hub with snap-scroll sections
- Admin dashboard to create articles with:
  - Title, Author, Place, Published Date
  - Description (content), Thumbnail (single) and Gallery (up to 10 images)
- Firestore-backed articles and Firebase Storage for image hosting
- Article detail page with metadata and gallery
- GSAP animations for smooth interactions and loading screens

---

## Tech Stack
- React (JSX) + Vite
- Tailwind CSS
- Firebase (Auth, Firestore, Storage)
- GSAP (animations)
- React Router

---

## Prerequisites
- Node.js (v16+ recommended)
- npm
- A Firebase project (Firestore, Storage, Authentication enabled)

---

## Local Setup (Windows)
1. Clone the repo
   - git clone <[repo-url](https://github.com/sarveswaranmg/Fenivi.git)>
   - cd Fenivi\fenivi

2. Install dependencies
   - npm install

3. Create environment file
   - Place a `.env.local` file inside the `fenivi/` folder (project root used by Vite).
   - Add the following env keys (no surrounding quotes):
