# Erhan Nie Portfolio

Clean bilingual engineering portfolio website for Erhan Nie, built with Next.js, TypeScript, Tailwind CSS, and the App Router. The site is static/content-based only, includes a 12-project engineering archive, and is deployed on Vercel free hosting.

Public site:

```text
https://erhan-nie-portfolio.vercel.app/
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, usually `http://localhost:3000`.

## Build

```bash
npm run build
```

## Profile Photo

Place your graduation portrait at:

```text
public/images/profile.jpg
```

The homepage is already configured to use `/images/profile.jpg`. Until that file exists, the site falls back to a local placeholder image.

## Deploy To Vercel For Free

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a free account if needed.
3. Click **Add New Project** and import the GitHub repository.
4. Use the default Next.js settings.
5. Deploy.
6. After deployment, copy the public Vercel URL.
7. If the public URL changes, replace `https://erhan-nie-portfolio.vercel.app` in:
   - `app/layout.tsx`
   - `app/sitemap.ts`
   - `public/robots.txt`

You can also set this Vercel environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-public-vercel-url.vercel.app
```

For `public/robots.txt`, update the sitemap URL manually because it is a static file.

## Prepare Google Indexing

1. Deploy the site to Vercel.
2. Copy the public Vercel URL.
3. Add the site in [Google Search Console](https://search.google.com/search-console).
4. Submit the sitemap:

```text
https://erhan-nie-portfolio.vercel.app/sitemap.xml
```

5. Use URL Inspection in Google Search Console.
6. Request indexing for the homepage.

## Content Editing

General bilingual website text is stored in:

```text
data/content.ts
```

The 12-project archive is stored in:

```text
data/projects.ts
```

English is the default language. The language switcher in the top-right corner toggles the whole site between English and Chinese without displaying both languages at the same time.

## Verification Files

Keep this file in the repository and deployed site so Google Search Console ownership remains valid:

```text
public/googlef412d99ace2b1ab5.html
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  sitemap.ts
data/
  content.ts
  projects.ts
components/
  CategoryIcon.tsx
  EngineeringLogo.tsx
  EngineeringPattern.tsx
  ProjectArchive.tsx
  SectionDivider.tsx
public/
  googlef412d99ace2b1ab5.html
  images/
    profile.jpg
    profile-placeholder.svg
  robots.txt
next.config.ts
tailwind.config.ts
package.json
README.md
```

## Notes

- No database is used.
- No authentication is used.
- No paid backend, paid API, or paid service is required.
- Phone number and WeChat are intentionally not displayed publicly.
- GPA is intentionally not shown.
