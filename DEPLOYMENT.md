# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment Setup

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites
- Repository: `https://github.com/EzekielMisgae/website`
- GitHub Pages enabled in repository settings

### Setup Steps

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - Save the settings

2. **Push Changes:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment:**
   - Every push to `main` branch triggers automatic deployment
   - Check the `Actions` tab in your repository to monitor deployment
   - Your site will be available at: `https://ezekielmisgae.github.io/website/`

### Manual Build (Optional)
```bash
npm run build
npm run preview
```

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update repository settings to use the custom domain

## 📝 Notes
- Build artifacts are automatically generated in the `dist/` folder
- The site updates automatically on every push to main branch
- Build status can be monitored in the GitHub Actions tab 