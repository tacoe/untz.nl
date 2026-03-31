# untz.nl

This repository is a Vite app -- the source for `untz.nl`.

## Workflow

Use the app from the repo root:

```sh
npm install
npm run dev
```

Other commands:

```sh
npm run build
npm run preview
```

## Deployment

GitHub Pages should be configured to use **GitHub Actions** as its source.

Each push to `main` runs [`.github/workflows/deploy-pages.yml`](/Users/taco/Dropbox/Source/untz.nl/.github/workflows/deploy-pages.yml), builds the site to `dist/`, and deploys that artifact to GitHub Pages. The custom domain is included via [`public/CNAME`](/Users/taco/Dropbox/Source/untz.nl/public/CNAME).

