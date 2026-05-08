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

The `main` branch is the global Vercel production version. This `china-mirror` branch is prepared for static export so Tencent CloudBase can host an identical static mirror.

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

## Deploy Identical China Mirror To Tencent CloudBase

Use this section for the mainland China mirror only. The Vercel site remains the global version:

```text
https://erhan-nie-portfolio.vercel.app/
```

Recommended CloudBase setup:

1. Log in to Tencent Cloud.
2. Open CloudBase Webify or CloudBase Static Website Hosting.
3. Create a new web application or static website.
4. Connect the GitHub repository if Git deployment is supported.
5. Select the `china-mirror` branch.
6. Select a static site option. If CloudBase asks for a framework, choose Next.js only if it supports static output; otherwise choose static website/custom build.
7. Use this build command:

```bash
npm install && npm run build
```

8. Use this output directory:

```text
out
```

9. Deploy.
10. Copy the Tencent CloudBase default HTTPS domain.
11. Test the Tencent CloudBase link from mainland China.
12. Keep the Vercel link as the global version.
13. Use the Tencent CloudBase link as the mainland China mirror.

The static export keeps the same content, layout, images, bilingual language switch, project archive, SEO metadata, sitemap, and robots file. The current canonical URL intentionally remains the Vercel URL because Vercel is the primary public site.

### Manual CloudBase Upload

If Git deployment does not work:

1. Run the build locally:

```bash
npm run build
```

2. Find the static output folder:

```text
out/
```

3. Compress or upload the contents of `out/`.
4. Upload those contents to CloudBase Static Website Hosting.
5. Make sure `index.html` is at the root of the hosting directory.
6. Test the default CloudBase domain.

Do not upload the `out` folder itself as the root folder unless CloudBase specifically asks for a folder. The files inside `out/` should become the website root.

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
