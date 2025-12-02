# Bachira E-Commerce Landing Page

![Bachira Landing Page Preview](https://surushtodzhibekov.github.io/bachira)

A modern, responsive e-commerce landing page built with React, TypeScript, and Tailwind CSS based on the Figma design.

## Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Styled with Tailwind CSS for beautiful, responsive design
- 💪 TypeScript for type-safe code
- 📱 Fully responsive design that works on all devices
- 🎯 Modern React with functional components and hooks
- 🎨 Manrope font family for clean, modern typography
- 🌈 Brand color: #3C9379 (Green)

## Design

This landing page is implemented from a Figma design and includes:

- **Hero Section**: Main landing area with navigation and call-to-action
- **Brands Section**: Showcasing e-commerce partnerships
- **Categories Section**: Browse product categories (Fashion, Skincare, Shoes, Electronic)
- **Why Choose Section**: Feature highlights (Free Delivery, Trusted Platform, Here For You)
- **Products Section**: Popular products from all brands
- **Footer**: Comprehensive footer with links and contact information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/surushTodzhibekov/bachira.git
cd bachira
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to be deployed on GitHub Pages. Follow these steps:

### 1. Update `vite.config.ts`

Ensure your `vite.config.ts` includes the base path:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/bachira/", // Replace 'bachira' with your repository name if different
});
```

### 2. Deploy

Run the build command and push to GitHub:

```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under "Source", select **GitHub Actions**
4. The site will be available at: `https://surushTodzhibekov.github.io/bachira/`

### Automated Deployment (Optional)

Create a `.github/workflows/deploy.yml` file for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Project Structure

```
bachira/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Hero.tsx       # Hero section with navigation
│   │   ├── Brands.tsx     # Brand partnerships
│   │   ├── Categories.tsx # Product categories
│   │   ├── Features.tsx   # Why Choose section
│   │   ├── Products.tsx   # Popular products
│   │   └── Footer.tsx     # Footer with links
│   ├── App.tsx       # Main App component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles with Tailwind directives
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Components

- **Hero**: Main landing section with navigation, headline, and CTA button
- **Brands**: Display of e-commerce partnerships and collaborations
- **Categories**: Product category cards (Fashion, Skincare, Shoes, Electronic)
- **Features**: "Why Choose Bachira" with key benefits
- **Products**: Grid of popular products with prices
- **Footer**: Comprehensive footer with links and contact information

## Customization

### Colors

The main brand color is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3C9379', // Main brand green
    // ... other shades
  }
}
```

### Content

Update the content in each component file located in `src/components/`:

- Product data in `Products.tsx`
- Category information in `Categories.tsx`
- Feature descriptions in `Features.tsx`
- Brand names in `Brands.tsx`

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling

## License

This project is open source and available under the [MIT License](LICENSE).
