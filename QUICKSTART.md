# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Super Quick Setup

### 1. Download or Clone
```bash
# Clone from GitHub
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Or download ZIP and extract
```

### 2. Customize Your Info

#### Update Personal Details (index.html)
- Line 10: Update meta description
- Line 17: Update Open Graph URL
- Line 43-46: Update social media links
- Line 50: Update name in heading
- Line 51: Update subtitle/title
- Line 89-116: Update About section
- Line 153-254: Update Skills
- Line 262-323: Update Experience
- Line 331-475: Update Projects
- Line 483-580: Update Certifications
- Line 595-596: Update contact email and LinkedIn

#### Add Your Assets
1. Replace `assets/profile.jpg` with your photo (400x400px)
2. Add `assets/resume.pdf` with your resume
3. (Optional) Customize `assets/favicon.svg`

### 3. Test Locally

Open `index.html` in your browser, or use:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Visit: http://localhost:8000

### 4. Deploy (Choose One)

#### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Then enable GitHub Pages in repository settings
```

#### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Done! ✨

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

## 📋 Customization Checklist

### Must Do
- [ ] Update name and title
- [ ] Add profile photo
- [ ] Update About section
- [ ] Add your skills
- [ ] Add experience/work history
- [ ] Add projects (with GitHub links)
- [ ] Add certifications
- [ ] Update all social media links
- [ ] Add resume PDF
- [ ] Update contact email

### Should Do
- [ ] Customize colors in CSS
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Add custom domain

### Nice to Have
- [ ] Add more projects
- [ ] Create project screenshots
- [ ] Add testimonials section
- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add dark/light theme toggle

## 🎨 Quick Color Customization

Edit `style.css` at the top:

```css
:root {
    --primary: #0d9488;        /* Your brand color */
    --primary-light: #14b8a6;  /* Lighter variant */
    --accent: #22d3ee;         /* Accent color */
}
```

Try these combinations:

**Blue:**
```css
--primary: #2563eb;
--primary-light: #3b82f6;
--accent: #60a5fa;
```

**Purple:**
```css
--primary: #7c3aed;
--primary-light: #8b5cf6;
--accent: #a78bfa;
```

**Orange:**
```css
--primary: #ea580c;
--primary-light: #f97316;
--accent: #fb923c;
```

## 🔧 Common Issues

### Images not loading?
- Check file paths match exactly (case-sensitive)
- Ensure images are in `assets/` folder
- Try using relative paths: `assets/profile.jpg`

### Layout looks broken?
- Make sure `css/style.css` is linked correctly
- Check browser console for errors
- Clear browser cache (Ctrl+Shift+R)

### Animations not working?
- Check `js/script.js` is linked
- Open browser console to check for errors
- Try a different browser

### Mobile menu not opening?
- Verify JavaScript file is loaded
- Check browser console for errors
- Test on actual mobile device

## 📱 Testing

Before deploying, test:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android tablet)
- ✅ Mobile (iPhone, Android phone)
- ✅ All links work
- ✅ Download resume works
- ✅ Images load
- ✅ Animations smooth
- ✅ Mobile menu works

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. Check `DEPLOYMENT.md` for deployment help
3. Open an issue on GitHub
4. Google the error message
5. Check browser console for errors

## 🎉 You're Done!

Your portfolio is ready! Share it:
- Add to resume
- Share on LinkedIn
- Tweet about it
- Add to GitHub profile
- Include in email signature

---

**Pro Tip:** Keep your portfolio updated with new projects and skills!

Made with ❤️ by Sandipan Dafadar
