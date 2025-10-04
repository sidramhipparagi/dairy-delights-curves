# GitHub Pages Deployment Guide

## Project Configuration

This project is now configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

## Deployment URL

Once deployed, your site will be available at:
**https://sidramhipparagi.github.io/dairy-delights-curves/**

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/sidramhipparagi/dairy-delights-curves
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. Save the changes

### 2. Push Your Changes

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once done, your site will be live!

## Configuration Files

### Files Created/Modified:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`vite.config.ts`** - Updated base path for production builds
3. **`public/.nojekyll`** - Tells GitHub Pages not to use Jekyll processing

### How It Works:

- **Development**: Run `npm run dev` - site runs on `http://localhost:8080/`
- **Production Build**: Run `npm run build` - creates optimized build in `dist/` folder
- **Auto Deploy**: Every push to `main` branch triggers automatic deployment via GitHub Actions

## Manual Build and Preview

To test the production build locally:

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Troubleshooting

### Issue: 404 errors after deployment
- Make sure the base path in `vite.config.ts` matches your repository name
- Current setting: `base: '/dairy-delights-curves/'`

### Issue: GitHub Actions workflow not running
- Check that GitHub Pages is set to "GitHub Actions" in repository settings
- Verify the workflow file exists at `.github/workflows/deploy.yml`

### Issue: Assets not loading
- The `.nojekyll` file in public folder should be present
- Check browser console for any path errors

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain name
2. Update `vite.config.ts`: change `base: '/dairy-delights-curves/'` to `base: '/'`
3. Configure your domain's DNS settings to point to GitHub Pages

## Support

For more information, see:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

