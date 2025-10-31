# Deployment Instructions

## GitHub Setup

1. Create a new repository on GitHub (don't initialize with README)
2. Run these commands to connect and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Netlify Deployment

### Via Netlify Dashboard:

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your repository (`prompt-generator-app`)
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** (leave default or set to 20.x)
7. Click "Deploy site"

### Build Settings (already configured in netlify.toml):
- Build command: `npm run build`
- Publish directory: `dist`

### Automatic Deployments:
- Netlify will automatically deploy whenever you push to the `main` branch
- Pull requests will get preview deployments
- Site URL will be generated automatically (e.g., `your-app-name.netlify.app`)

## Custom Domain (Optional)

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Environment Variables (if needed)

If you need environment variables:
1. Go to "Site settings" → "Environment variables"
2. Add any required variables

