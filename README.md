# Aly Abdelrahman | ECM Consultant & Software Engineer Portfolio

Live Production: [alydevs.com](https://alydevs.com)

A high-performance, statically generated portfolio and technical blog built to showcase enterprise architecture, ECM consulting (IBM FileNet, CMOD, Datacap, FileTrail), and full-stack engineering. 

## 🏗️ System Architecture & Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Hardware-accelerated viewport interactions & cursor tracking)
- **Content Engine:** `react-markdown` + `remark-gfm` (Static Site Generation for zero-latency routing)
- **Contact API:** Formspree
- **Deployment:** Vercel

## 🚀 Local Development

The codebase requires no external databases or backend APIs to run locally. Content is managed entirely via the local file system.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/AlyAbokhdra/Aly-Abdelrahman-Portfolio.git](https://github.com/AlyAbokhdra/Aly-Abdelrahman-Portfolio.git)
   cd Aly-Abdelrahman-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to view the application.

## 📝 Content Management Workflow

### Adding a Technical Blog Post
The blog engine uses Next.js `generateStaticParams` to pre-compile Markdown files into static HTML at build time.
1. Create a new `.md` file in the `/content/blog/` directory.
2. Include the required YAML frontmatter at the top of the file:
   ```yaml
   ---
   title: "Your Post Title"
   date: "Aug 28, 2026"
   excerpt: "A brief summary of the post."
   readTime: "5 min read"
   ---
   ```
3. Write your content below the frontmatter. The engine supports standard Markdown, tables (`remark-gfm`), and code blocks.

### Updating Certifications
The certifications grid is driven by a scalable TypeScript array to prevent file I/O overhead.
1. Open `config/certificates.ts`.
2. Append your new certificate object to the exported array:
   ```typescript
   {
     id: "unique-id",
     name: "Certification Name",
     issuer: "Issuing Organization",
     brief: "Short description.",
     image: "/images/certs/filename.png",
     link: "[https://verification-link.com](https://verification-link.com)"
   }
   ```
3. Drop the corresponding compressed image into `public/images/certs/`.

## 🚢 Deployment

This repository is configured for automated CI/CD via Vercel. Pushing to the `main` branch automatically triggers a production build and deployment.

```bash
git add .
git commit -m "Update content"
git push origin main
```