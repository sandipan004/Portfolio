# 🚀 Portfolio Website - Sandipan Dafadar

A modern, responsive portfolio website for showcasing Machine Learning projects, skills, and professional experience. Built with clean HTML, CSS, and JavaScript with smooth animations and interactive features.

![Portfolio Preview](assets/preview.png)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, scroll animations, and dynamic navigation
- **Performance Optimized** - Fast loading with lazy loading and optimized assets
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - ES6+, Intersection Observer, Event Listeners
- **Google Fonts** - Playfair Display & DM Sans

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # Interactive features and animations
├── assets/
│   ├── profile.jpg    # Profile image
│   ├── resume.pdf     # Downloadable resume
│   ├── favicon.svg    # Site favicon
│   └── preview.png    # Preview image for README
├── README.md          # Project documentation
└── LICENSE           # MIT License

```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Content

#### Update Personal Information
Edit `index.html` and replace:
- Your name and title
- Social media links (GitHub, LinkedIn, Twitter, Email)
- About section content
- Skills, experience, projects, and certifications

#### Add Your Images
Replace the following in the `assets/` folder:
- `profile.jpg` - Your profile photo (recommended: 400x400px)
- `resume.pdf` - Your resume/CV
- `favicon.svg` - Your site favicon

#### Customize Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #0d9488;        /* Main theme color */
    --primary-light: #14b8a6;  /* Lighter variant */
    --accent: #22d3ee;         /* Accent color */
    /* ... other variables */
}
```

### 3. Test Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

Visit `http://localhost:8000` in your browser.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/portfolio`

3. **Update Meta Tags**
   Edit `index.html` and update the Open Graph URL:
   ```html
   <meta property="og:url" content="https://yourusername.github.io/portfolio">
   ```

### Deploy to Netlify

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Using Netlify UI**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop your project folder
   - Your site will be live instantly!

3. **Continuous Deployment**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or use Vercel Dashboard**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Deploy with one click

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory as root (.)
   - Configure as single-page app: No
   - Don't overwrite index.html

3. **Deploy**
   ```bash
   firebase deploy
   ```

## 📝 Customization Guide

### Adding New Sections

1. Add HTML section in `index.html`:
```html
<section id="new-section" class="section">
    <h2 class="section-title">New Section</h2>
    <!-- Your content -->
</section>
```

2. Add navigation link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

3. Add styles in `css/style.css`
4. Add scroll animations in `js/script.js`

### Changing Fonts

Replace Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Update CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adding Analytics

Add Google Analytics to `index.html` before `</head>`:
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

### Adding Contact Form

The portfolio includes contact buttons. To add a working form:

1. Use [Formspree](https://formspree.io/):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

2. Or use [EmailJS](https://www.emailjs.com/) for client-side email sending

## 🎨 Color Schemes

Try these alternative color schemes by updating CSS variables:

### Professional Blue
```css
--primary: #2563eb;
--primary-light: #3b82f6;
--accent: #60a5fa;
```

### Creative Purple
```css
--primary: #7c3aed;
--primary-light: #8b5cf6;
--accent: #a78bfa;
```

### Energetic Orange
```css
--primary: #ea580c;
--primary-light: #f97316;
--accent: #fb923c;
```

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths in `index.html`
- Ensure images are in the `assets/` folder
- Verify image file names match exactly

### Animations Not Working
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked
- Verify browser supports Intersection Observer

### Mobile Menu Not Opening
- Check if `script.js` is loaded
- Verify the mobile menu toggle button has correct ID
- Check browser console for errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📧 Contact

**Sandipan Dafadar**
- Email: sandipandafadar04@gmail.com
- LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- GitHub: [github.com/yourusername](https://github.com/yourusername)
- Twitter: [twitter.com/yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- Font families from [Google Fonts](https://fonts.google.com/)
- Icons from inline SVG
- Inspiration from modern portfolio designs

---

⭐ **Star this repo if you found it helpful!** ⭐

Made with ❤️ and lots of ☕
