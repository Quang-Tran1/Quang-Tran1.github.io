# Quang-Tran1.github.io

Personal site at [quangtran.me](https://quangtran.me), built with Vite + React.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. The custom domain is set by `public/CNAME`.

In the repo settings, **Pages → Build and deployment → Source** must be set to
**GitHub Actions**.
