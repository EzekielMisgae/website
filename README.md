# Ezekiel M. Alene - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring smooth animations and a beautiful dark mode design.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with gradient accents and glass morphism effects
- **Dark Mode**: Dark theme enabled by default with elegant color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Contact Integration**: Direct email and phone contact options
- **Performance Optimized**: Built with Vite for fast development and optimal production builds

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4.x with custom configurations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
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

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx         # Reusable button component
│   │   ├── lib/
│   │   │   └── utils.js               # Utility functions
│   │   ├── App.jsx                    # Main application component
│   │   ├── index.css                  # Global styles and Tailwind imports
│   │   └── main.jsx                   # Application entry point
│   ├── public/                        # Static assets
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── postcss.config.js             # PostCSS configuration
│   └── vite.config.js                # Vite configuration
```

## 🎨 Customization

### Colors & Themes

The website uses a custom color scheme defined in `src/index.css` with CSS variables. You can customize the colors by modifying the CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... other color variables */
}
```

### Animations

Custom animations are defined in `tailwind.config.js`:

- `fade-in`: Smooth fade-in effect
- `fade-up`: Fade in with upward movement
- `slide-up`: Slide up animation
- `float`: Floating animation for decorative elements
- `glow`: Glowing effect for interactive elements

### Content

Update the personal information in `src/App.jsx`:

- Name and branding
- Skills and technologies
- Project information
- Contact details

### Adding Your Photo

1. **Add your photo**: Place your professional photo in the `public` folder (e.g., `public/your-photo.jpg`)
2. **Update the code**: In `src/App.jsx`, find the photo placeholder section and:
   - Comment out the placeholder div
   - Uncomment the img tag
   - Update the `src` path to match your photo filename

Example:
```jsx
<img 
  src="/your-photo.jpg" 
  alt="Ezekiel M. Alene" 
  className="w-full h-full object-cover rounded-2xl"
/>
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Sections

1. **Hero**: Introduction with animated title and call-to-action buttons
2. **About**: Personal information and education background
3. **Skills**: Technology stack with animated progress bars
4. **Projects**: Featured projects with technologies and links
5. **Contact**: Contact information and direct communication options

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages or your preferred hosting service.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure your DNS settings to point to your hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ezkielmisgae@gmail.com
- **Phone**: +251975325354
- **Location**: Addis Ababa, Ethiopia

---

Built with ❤️ by Ezekiel M. Alene
