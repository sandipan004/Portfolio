# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to various hosting platforms.

## Table of Contents
- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Firebase Hosting](#firebase-hosting)
- [Custom Domain Setup](#custom-domain-setup)

---

## GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally

### Steps

1. **Create a GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: Portfolio website"
   
   # Create main branch
   git branch -M main
   
   # Add remote repository (replace with your username)
   git remote add origin https://github.com/yourusername/portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   
3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/portfolio`
   - It may take a few minutes for the site to go live

4. **Update Your Links**
   - Edit `index.html` and update the Open Graph meta tag:
     ```html
     <meta property="og:url" content="https://yourusername.github.io/portfolio">
     ```

### Custom Domain (Optional)
1. Create a file named `CNAME` in your repository root:
   ```
   yourdomain.com
   ```
2. In GitHub Settings > Pages, add your custom domain
3. Configure your domain's DNS settings (see Custom Domain section below)

---

## Netlify

### Method 1: Drag and Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your entire project folder onto the Netlify dashboard
4. Your site is live instantly!

### Method 2: Git Integration (Recommended)

1. **Connect Repository**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose GitHub/GitLab/Bitbucket
   - Select your repository

2. **Configure Build Settings**
   - Build command: (leave empty)
   - Publish directory: `.` or `/`
   - Click "Deploy site"

3. **Access Your Site**
   - Netlify provides a random URL like `random-name-123.netlify.app`
   - Site deploys automatically on every git push!

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   # For testing
   netlify deploy
   
   # For production
   netlify deploy --prod
   ```

### Custom Domain on Netlify
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

---

## Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site is live!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Navigate to your project directory
   cd portfolio
   
   # Deploy
   vercel
   
   # For production
   vercel --prod
   ```

4. **Access Your Site**
   - Vercel provides a URL like `portfolio-username.vercel.app`
   - Automatic deployments on every push

### Custom Domain on Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS as instructed

---

## Firebase Hosting

### Prerequisites
- Google account
- Node.js and npm installed

### Steps

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   cd portfolio
   firebase init hosting
   ```
   
   Configure as follows:
   - Use an existing project or create new
   - Public directory: `.` (current directory)
   - Single-page app: **No**
   - Don't overwrite index.html: **Yes**

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Access Your Site**
   - Your site will be at: `https://your-project.web.app`

### Custom Domain on Firebase
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow verification steps
4. Configure DNS settings

---

## Custom Domain Setup

### DNS Configuration for Different Providers

#### For GitHub Pages
Add these DNS records at your domain provider:

**For apex domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

#### For Netlify
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

#### For Vercel
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Firebase
Follow the specific instructions in Firebase Console when adding custom domain.

### SSL/HTTPS
All mentioned platforms provide free SSL certificates automatically:
- **GitHub Pages**: Automatic with custom domains
- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic
- **Firebase**: Automatic

---

## Post-Deployment Checklist

- [ ] Site loads correctly on desktop and mobile
- [ ] All links work (internal and external)
- [ ] Images load properly
- [ ] Download resume link works
- [ ] Social media links are correct
- [ ] Contact email is correct
- [ ] Meta tags are updated with correct URL
- [ ] Favicon displays correctly
- [ ] SSL certificate is active (HTTPS)
- [ ] Test on different browsers
- [ ] Run Lighthouse audit for performance

---

## Updating Your Site

### GitHub Pages / Netlify / Vercel (Git-based)
```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push

# Site updates automatically!
```

### Firebase
```bash
# Make your changes
firebase deploy
```

### Netlify (Drag & Drop)
- Simply drag and drop the updated folder again
- Or connect to Git for automatic updates

---

## Monitoring and Analytics

### Add Google Analytics

1. Get your tracking ID from [Google Analytics](https://analytics.google.com/)
2. Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Platform Analytics
- **Netlify**: Built-in analytics (paid feature)
- **Vercel**: Built-in analytics (free tier available)
- **Firebase**: Firebase Analytics integration

---

## Troubleshooting

### Site Not Loading
- Check if deployment was successful
- Verify DNS settings (allow 24-48 hours for propagation)
- Clear browser cache
- Check browser console for errors

### Images Not Showing
- Verify file paths are correct
- Check if images are in the repository
- Ensure image file names match exactly (case-sensitive)

### 404 Errors
- Check file paths in links
- Ensure all files are committed to Git
- Verify publish directory is correct

### SSL Issues
- Wait for SSL certificate provisioning (can take up to 24 hours)
- Verify custom domain is added correctly
- Force HTTPS in platform settings

---

## Need Help?

- **GitHub Pages**: [Documentation](https://docs.github.com/en/pages)
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **Vercel**: [Documentation](https://vercel.com/docs)
- **Firebase**: [Documentation](https://firebase.google.com/docs/hosting)

---

**Happy Deploying! 🎉**
