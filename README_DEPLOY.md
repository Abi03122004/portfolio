Deployment guide for your static portfolio (HTML/JS)

Options (choose one):

A) GitHub Pages (free) — good for static sites, simple.
B) Netlify (free tier) — drag-and-drop or connect repo, supports redirects and serverless functions.
C) Vercel (free tier) — easy Git integration, fast CDN.

Prerequisites:
- Git installed locally (optional but recommended)
- A GitHub account for GitHub Pages / Netlify/Vercel can connect to GitHub

1) Prepare the repo locally (optional but recommended)

Open PowerShell in the project folder and run:

```powershell
cd 'c:\Users\abine\OneDrive\Desktop\portfoloi'
# initialize git if not already
git init
git add .
git commit -m "Initial portfolio"
```

If you already have a GitHub repository, add it as the remote and push:

```powershell
# replace <your-repo-url> with the GitHub HTTPS/SSH URL
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

2) GitHub Pages (deploy from `main` or `gh-pages` branch)

- Create a GitHub repo (via github.com)
- Push your code (see commands above)
- On GitHub repo -> Settings -> Pages -> Source -> Select `main` branch (root) -> Save
- GitHub will build and publish at: `https://<your-username>.github.io/<repo-name>/`

Notes:
- I added `.nojekyll` to prevent GitHub Pages from ignoring files with underscores.

3) Netlify (recommended for quick deploy with CI/CD)

Option 1 — Drag & Drop:
- Go to https://app.netlify.com/drop
- Drag your project folder (or the `index.html`) into the drop area
- Netlify deploys immediately and gives a public URL

Option 2 — Connect GitHub repo:
- Sign into Netlify and click "New site from Git"
- Connect your GitHub account and choose the repo
- Build settings for static site: leave defaults (no build command), `publish directory` = `/` or blank

4) Vercel

- Sign into https://vercel.com and click "Add New" -> "Project"
- Import your GitHub repo and follow prompts
- For static HTML, there is no build step; Vercel deploys automatically

5) Quick checks after deploy
- Visit the site URL provided by the provider
- Verify contact form loads and the "View Messages" button works
- If EmailJS email notifications: ensure Public Key and template/service IDs are set correctly

6) If you want, I can:
- Initialize the git repo here for you and create the initial commit
- Provide exact `git` commands to create a GitHub repo using the `gh` CLI (if you have it)
- Walk through Netlify or Vercel connect step-by-step

Tell me which provider you'd like and whether I should initialize git locally for you now.