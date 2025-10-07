# GitHub Pages Deployment Guide - Custom Domain (arihantfood.in)

## Project Configuration

This project is configured to automatically deploy to GitHub Pages with a custom domain (arihantfood.in) whenever you push to the `main` branch.

## Deployment URL

Once deployed and DNS is configured, your site will be available at:
**https://arihantfood.in**

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. Under **Custom domain**:
   - Enter: `arihantfood.in`
   - Check the box "Enforce HTTPS" (after DNS propagates)
6. Save the changes

### 2. Configure DNS Settings

You need to configure your domain's DNS settings with your domain registrar:

#### For Root Domain (arihantfood.in):

Add the following **A records**:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### For WWW subdomain (optional):

Add a **CNAME record**:

```
Type: CNAME
Host: www
Value: <your-github-username>.github.io
```

**Important**: DNS changes can take up to 24-48 hours to propagate fully.

### 3. Push Your Changes

```bash
git add .
git commit -m "Configure GitHub Pages deployment with custom domain"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once DNS propagates, your site will be live at https://arihantfood.in

## Configuration Files

### Files Created/Modified:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`vite.config.ts`** - Set base path to '/' for custom domain
3. **`public/.nojekyll`** - Tells GitHub Pages not to use Jekyll processing
4. **`public/CNAME`** - Contains the custom domain name

### How It Works:

- **Development**: Run `npm run dev` - site runs on `http://localhost:8080/`
- **Production Build**: Run `npm run build` - creates optimized build in `dist/` folder
- **Auto Deploy**: Every push to `main` branch triggers automatic deployment via GitHub Actions
- **Custom Domain**: The CNAME file ensures your site is served from arihantfood.in

## Manual Build and Preview

To test the production build locally:

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Troubleshooting

### Issue: DNS not resolving to your site
- Wait 24-48 hours for DNS propagation
- Verify A records are correctly configured
- Use a DNS checker tool like `https://dnschecker.org/`

### Issue: "Domain's DNS record could not be retrieved" in GitHub
- This is normal immediately after adding DNS records
- Wait for DNS propagation
- Check your DNS settings with your domain registrar

### Issue: GitHub Actions workflow not running
- Check that GitHub Pages is set to "GitHub Actions" in repository settings
- Verify the workflow file exists at `.github/workflows/deploy.yml`
- Check the Actions tab for any error messages

### Issue: HTTPS not working
- HTTPS may take a few minutes to provision after DNS is configured
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- GitHub will automatically provision an SSL certificate via Let's Encrypt

### Issue: Assets not loading
- The `.nojekyll` file in public folder should be present
- Check browser console for any path errors
- Verify base path is set to '/' in vite.config.ts

## Verify DNS Configuration

You can verify your DNS configuration is correct using command line tools:

```bash
# Check A records
nslookup arihantfood.in

# Check CNAME (if using www)
nslookup www.arihantfood.in
```

Expected results:
- A records should resolve to the GitHub Pages IP addresses
- CNAME should resolve to your-username.github.io

## Support

For more information, see:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Important Notes

1. **First Deployment**: After the first successful deployment, verify the CNAME file still exists in your repository. GitHub might need you to re-add the custom domain in settings.

2. **HTTPS**: GitHub automatically provisions SSL certificates for custom domains. This can take a few minutes after DNS is configured.

3. **Redirects**: You can configure www to redirect to apex domain (or vice versa) using your DNS settings.

4. **Email**: These DNS changes won't affect your email if you have email services configured on this domain (email uses MX records).
