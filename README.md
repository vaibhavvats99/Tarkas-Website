# Tarkas Website - Premium Floor Wire Protector

A modern, responsive product website for Tarkas Floor Wire Protectors built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Tarkas Website](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### Design & UX
- **Modern, Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode Toggle** - Automatic theme switching with system preference support
- **Premium Glassmorphism UI** - Elegant glass effects and shadows
- **Professional Color Palette** - Custom orange accent (#ff9900) with carefully chosen complementary colors

### Interactive Elements
- **3D Product Viewer** - Interactive 3D models using React Three Fiber
- **Smooth Animations** - Framer Motion powered page transitions and scroll animations
- **Floating Product Effects** - Dynamic 3D elements in hero section
- **Hover States & Micro-interactions** - Enhanced user experience with subtle animations

### Pages & Content
- **Home Page**
  - Hero section with animated tagline "Protect Your Wires, Protect Your Space"
  - Feature highlights with modern card layouts
  - Product showcase with pricing and CTAs
  - Customer testimonials and social proof
  
- **Product Page**
  - High-quality product gallery with 3D viewer toggle
  - Detailed specifications and technical information
  - Customer reviews and ratings
  - Related products recommendations
  
- **About Page**
  - Company story and mission
  - Core values and culture
  - Interactive timeline of company milestones
  - Team member profiles with social links
  
- **Contact Page**
  - Interactive contact form with validation
  - Multiple contact methods (email, phone, live chat)
  - Office location with map placeholder
  - FAQ section with expandable answers

### Technical Features
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- **Performance Optimized** - Next.js App Router with optimized images and fonts
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Mobile-First** - Responsive design starting from mobile breakpoints

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Three.js
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tarkas-website.git
   cd tarkas-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
tarkas-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── product/                 # Product page
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
├── components/                   # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── theme-provider.tsx      # Theme context provider
│   ├── home/                   # Home page components
│   ├── about/                  # About page components
│   ├── contact/                # Contact page components
│   ├── product/                # Product page components
│   └── 3d/                     # 3D components and models
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Orange gradient (#ff9900 to #ff6600)
- **Accent**: #ff9900
- **Dark Mode**: Gray scale (900, 800, 700)
- **Light Mode**: Gray scale (50, 100, 200)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)
- **Gradient Text**: Custom utility class for brand colors

### Components
- **Glassmorphism**: Custom `.glass` utility class
- **Rounded Corners**: Consistent 2xl radius (16px)
- **Shadows**: Layered shadow system for depth
- **Animations**: Consistent timing (300ms) and easing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets accessibility standards
- **Focus Indicators**: Visible focus states for all interactive elements

## 🔧 Customization

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` and optional `layout.tsx`
3. Update navigation in `components/Header.tsx`

### Modifying Theme
1. Update colors in `tailwind.config.js`
2. Modify CSS variables in `app/globals.css`
3. Update theme provider if needed

### Adding Components
1. Create component in appropriate directory
2. Follow naming convention (PascalCase)
3. Include TypeScript types
4. Add proper animations if needed

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: Next.js Image component with lazy loading

## 🔍 SEO Features

- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for rich snippets (ready for implementation)
- **XML Sitemap**: Automated sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@tarkas.com or join our Slack channel.

---

## 🎯 Key Features Highlights

### 🔥 Advanced Features
- **3D Product Visualization** - Interactive product models
- **Real-time Theme Switching** - Seamless dark/light mode
- **Micro-animations** - Enhanced user experience
- **Mobile-first Design** - Optimized for all devices

### 💼 Business Ready
- **Contact Forms** - Lead generation ready
- **SEO Optimized** - Search engine friendly
- **Analytics Ready** - Easy integration with tracking tools
- **Performance Optimized** - Fast loading times

### 🎨 Design Excellence
- **Modern UI/UX** - Contemporary design patterns
- **Consistent Branding** - Professional appearance
- **Accessibility** - Inclusive design practices
- **Cross-browser** - Compatible across all major browsers

---

Built with ❤️ by the Tarkas team# Tarkas-Website
