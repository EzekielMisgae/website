# Render Deployment Guide

## 🚀 Automatic Deployment Setup

This portfolio is configured for automatic deployment to Render using the `render.yaml` configuration file.

### Prerequisites
- Render account: [https://render.com](https://render.com)
- GitHub repository connected to Render

### Setup Steps

1. **Connect Repository to Render:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Static Site"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration

2. **Automatic Configuration:**
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `./dist`
   - Node Version: 18
   - All settings are configured in `render.yaml`

3. **Deploy:**
   - Every push to `main` branch triggers automatic deployment
   - Monitor deployment in Render dashboard
   - Your site will be available at: `https://your-site-name.onrender.com`

### Manual Build (Local Testing)
```bash
npm install
npm run build
npm run preview
```

### Custom Domain (Optional)
To use a custom domain:
1. Go to your site settings in Render dashboard
2. Add your custom domain in the "Custom Domains" section
3. Configure DNS settings with your domain provider

## 📝 Notes
- Build artifacts are automatically generated in the `dist/` folder
- The site updates automatically on every push to main branch
- Build status can be monitored in the Render dashboard
- Free tier includes 750 build hours per month 