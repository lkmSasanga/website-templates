# Restaurant Landing Page Template #01

A production-ready, premium restaurant landing page template built with Next.js, TypeScript, and Tailwind CSS. Designed for high conversion and visual appeal, perfect for YouTube tutorials and real-world restaurant websites.

## ✨ Features

- **Modern Design**: Dark, premium fine dining aesthetic with elegant micro-interactions
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation, visible focus states
- **Performance Optimized**: Next.js Image optimization, minimal JavaScript, optimized for Lighthouse
- **Easy Customization**: Two simple files to customize - `src/lib/config.json` for brand/colors and `src/lib/siteData.ts` for content
- **Production Ready**: Clean code, TypeScript, ESLint configured

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd restaurant-landing-template-01
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
restaurant-landing-template-01/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Landing page
│   │   ├── menu/
│   │   │   └── page.tsx         # Full menu page
│   │   ├── reserve/
│   │   │   └── page.tsx         # Reservation page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── AppShell.tsx         # Layout wrapper (header + footer)
│   │   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Hero.tsx             # Hero section with CTAs
│   │   ├── TrustBar.tsx         # Rating and badges
│   │   ├── FeaturedDishes.tsx   # Featured dishes grid
│   │   ├── MenuHighlights.tsx   # Menu categories with tabs
│   │   ├── Gallery.tsx           # Image gallery
│   │   ├── Testimonials.tsx     # Customer testimonials
│   │   ├── LocationHours.tsx    # Address, hours, map
│   │   ├── ReservationCta.tsx   # Call-to-action section
│   │   └── Button.tsx           # Reusable button component
│   └── lib/
│       ├── config.json          # ⭐ BRAND & COLOR CUSTOMIZATION
│       ├── siteData.ts          # ⭐ CONTENT CUSTOMIZATION
│       ├── theme.ts             # Theme utilities
│       └── utils.ts             # Utility functions
├── public/
│   └── images/                  # Place your images here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Customization Guide

### Quick Customization via `config.json` (Recommended)

**For brand name, colors, and theme settings**, edit `src/lib/config.json`:

```json
{
  "brand": {
    "name": "Your Restaurant Name",
    "tagline": "Your Tagline",
    "cuisine": "Cuisine Type",
    "location": "Location"
  },
  "colors": {
    "primary": {
      "500": "#f59e0b",  // Main accent color
      "600": "#d97706",  // Hover states
      "700": "#b45309"   // Active states
    },
    "gradient": {
      "from": "#f59e0b",  // Gradient start
      "via": "#d97706",   // Gradient middle
      "to": "#b45309"     // Gradient end
    }
  },
  "theme": {
    "style": "dark",
    "accentColor": "amber",
    "buttonStyle": "gradient"
  }
}
```

**What you can customize in `config.json`:**
- ✅ **Brand name** - Changes throughout the site
- ✅ **Color scheme** - Primary colors and gradients (used in buttons, badges, etc.)
- ✅ **Theme settings** - Visual style preferences
- ✅ **Feature toggles** - Show/hide sections (trust bar, gallery, etc.)

### Content Customization via `siteData.ts`

**For all content** (menu items, dishes, testimonials, etc.), edit `src/lib/siteData.ts`:

#### 1. Brand Information (also in config.json)
```typescript
brand: {
  name: "Your Restaurant Name",
  tagline: "Your Tagline",
  cuisine: "Cuisine Type",
  location: "Location",
}
```

#### 2. Contact Information
```typescript
contact: {
  phone: "+1 (555) 123-4567",
  email: "hello@yourrestaurant.com",
  address: "123 Main Street, City, State ZIP",
  mapLink: "https://maps.google.com/?q=your+address",
}
```

#### 3. Opening Hours
```typescript
hours: {
  monday: { open: "12:00 PM", close: "10:00 PM" },
  tuesday: { open: "12:00 PM", close: "10:00 PM" },
  // ... other days
  sunday: { open: "12:00 PM", close: "9:00 PM" },
}
```

#### 4. Hero Section
```typescript
hero: {
  headline: "Your Headline",
  subheadline: "Your Subheadline",
  ctaPrimary: "Reserve a Table",
  ctaSecondary: "View Menu",
}
```

#### 5. Featured Dishes
```typescript
featuredDishes: [
  {
    name: "Dish Name",
    description: "Dish description",
    price: "$XX",
    tags: ["Tag1", "Tag2"],
    image: "/images/dish-image.jpg", // Optional
  },
  // ... more dishes
]
```

#### 6. Menu Categories
```typescript
menuCategories: [
  {
    name: "Category Name",
    items: [
      {
        name: "Item Name",
        description: "Item description",
        price: "$XX",
        tags: ["Optional", "Tags"],
      },
    ],
  },
]
```

#### 7. Testimonials
```typescript
testimonials: [
  {
    name: "Customer Name",
    quote: "Testimonial text",
    role: "Role/Title",
    rating: 5, // Optional
  },
]
```

#### 8. Gallery Images
```typescript
galleryImages: [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  // ... more images
]
```

#### 9. Social Media Links
```typescript
socials: {
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  twitter: "https://twitter.com/yourhandle",
  yelp: "https://yelp.com/biz/yourrestaurant",
}
```

### Adding Images

1. Place your images in the `public/images/` directory
2. Reference them in `siteData.ts` using paths like `/images/your-image.jpg`
3. If an image is missing, the component will show a placeholder gradient

### Styling Customization

The template uses Tailwind CSS. To customize colors and styling:

1. Edit `tailwind.config.ts` to extend the theme
2. Modify CSS variables in `src/app/globals.css`
3. Update component classes directly if needed

## 📄 Pages

### Landing Page (`/`)
Complete restaurant landing page with all sections:
- Hero with CTAs
- Trust bar (ratings, badges)
- Featured dishes
- Menu highlights
- Gallery
- Testimonials
- Location & hours
- Reservation CTA

### Menu Page (`/menu`)
Full menu display with all categories and items.

### Reservation Page (`/reserve`)
Reservation form (front-end only, no backend). Includes:
- Form validation
- Success message on submit
- Contact information fallback

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Import from GitHub
- **Railway**: Deploy from GitHub
- **Any Node.js hosting**: Build with `npm run build` and serve with `npm start`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: System font stack (no external fonts)
- **Images**: Next.js Image component

## 📝 License

MIT License - feel free to use this template for personal or commercial projects.

## 🙏 Credits

Built with ❤️ for the restaurant industry. Perfect for YouTube tutorials and real-world restaurant websites.

## 🎯 Quick Customization Checklist

1. **Brand Identity** → Edit `src/lib/config.json`:
   - Change `brand.name` to your restaurant name
   - Update `brand.tagline`, `brand.cuisine`, `brand.location`

2. **Colors** → Edit `src/lib/config.json`:
   - Modify `colors.primary` for button colors
   - Update `colors.gradient` for gradient effects
   - Adjust `colors.background` and `colors.text` if needed

3. **Content** → Edit `src/lib/siteData.ts`:
   - Update contact information
   - Modify menu items and dishes
   - Add your testimonials
   - Update gallery images

4. **Images** → Add to `public/images/`:
   - `hero.jpg` - Hero section background
   - Dish images matching names in `siteData.ts`
   - Gallery images

---

**Need help?** 
- **Brand/Colors**: Check `src/lib/config.json` - Easy JSON editing for brand name and color scheme
- **Content**: Check `src/lib/siteData.ts` - All menu items, dishes, testimonials, etc.
