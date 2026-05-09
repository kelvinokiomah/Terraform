# 🚀 Frontend Application

This project is a modern frontend application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. It includes reusable components such as a Navbar and Job Cards, and a landing page setup.

---

## 📁 Project Structure


├── .env.local              # Environment variables (not committed)
├── app-globals.css        # Global styles
├── app-layout.tsx         # Root layout component
├── app-page.tsx           # Landing page
├── app-jobs-page.tsx      # Jobs listing page
├── components-Navbar.tsx  # Navigation bar component
├── components-JobCard.tsx # Job card UI component
├── public-logo.svg        # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS config
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts

---

## 🛠️ Tech Stack

- **Next.js** – React framework for SSR and routing
- **TypeScript** – Type safety and improved development experience
- **Tailwind CSS** – Utility-first styling
- **PostCSS** – CSS processing

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>


npm install
NEXT_PUBLIC_API_URL=http://localhost:3000
npm run dev
http://localhost:3000

 Features

✅ Landing page (app-page.tsx)
✅ Jobs listing page (app-jobs-page.tsx)
✅ Reusable Navbar component
✅ Job Card UI component
✅ Fully styled with Tailwind CSS
✅ TypeScript support

npm run dev     # Start development server
npm run build   # Build production app
npm run start   # Run production build
npm run lint    # Lint code

🚀 Deployment
You can deploy easily using:

Vercel (recommended for Next.js)
Azure Static Web Apps
Netlify

📄 Notes

.env.local is ignored by Git for security reasons
Modify next.config.js for custom Next.js settings
Tailwind styles can be customized via tailwind.config.js

🤝 Contributing

Create a new branch
Make your changes
Commit and push
Open a Pull Request


📧 Contact
For questions or support, please reach out to the project maintainer.

