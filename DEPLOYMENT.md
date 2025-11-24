# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Steps

### 1. Repository Setup
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages Configuration
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically trigger on the next push

### 3. Custom Domain Setup (Optional)
1. In your repo settings under **Pages**
2. Add your custom domain in the "Custom domain" field
3. Enable "Enforce HTTPS"
4. Update your domain's DNS settings:
   - Add a CNAME record pointing to: `yourusername.github.io`
   - Or add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### 4. Update Vite Config
Make sure to update the `base` path in `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/your-actual-repo-name/' : '/',
```

## Deployment
- Every push to the `main` branch triggers automatic deployment
- Check the **Actions** tab to monitor deployment status
- Your site will be available at: `https://yourusername.github.io/your-repo-name/`
- Or at your custom domain if configured

## Local Development
```bash
npm install
npm run dev
```

## Manual Build (for testing)
```bash
npm run build
npm run preview
```