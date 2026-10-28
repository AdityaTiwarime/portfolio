# Aditya Tiwari, portfolio

My personal site: projects, experience, skills and downloadable resumes.

**Live:** `<ADD-YOUR-VERCEL-URL-HERE>`

## What's on it

- **Career trace:** the hero draws my education and work as spans on a timeline, like a distributed-trace
  view. Each span is a button that jumps to the matching section.
- **Projects:** filterable (Software / Data and AI) and expandable rows, each with its key result, details,
  tech stack and links to the code and live app.
- **Experience, skills, education and recognition.**
- **Resumes:** four PDFs (Software Engineer, AI Software Engineer, Data Scientist, Data Analyst).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 7 tests: trace maths, filtering, expanding, links, resume downloads
npm run build      # production build in dist/
```

## Update the content

All text lives in [`src/data.ts`](src/data.ts). Add a project to the `projects` array and it appears on the
site; replace a PDF in `public/resumes/` to update a resume.

## Built with

React 18, TypeScript (strict), Vite, Vitest and Testing Library. Plain CSS with light and dark themes,
keyboard-accessible controls and reduced-motion support. GitHub Actions runs the typecheck, tests and
build on every push.

## Use of AI tools

This site was built with help from an AI assistant (Claude, by Anthropic), used for code generation and
design. The content comes from my own projects and resume, and the code was tested before publishing.
