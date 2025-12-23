# Mojito Website

A modern, interactive React-based website for Mojito, a premium cocktail bar located in Mumbai. This single-page application showcases the bar's menu, ambiance, and artistry through smooth animations and responsive design.

**Hero Section**

<img width="1914" height="859" alt="image" src="https://github.com/user-attachments/assets/5f0b9169-2be5-4fc5-805c-6e70244e3d5f" />

**Cocktail Section**

<img width="1918" height="872" alt="image" src="https://github.com/user-attachments/assets/9c408897-1e82-462f-bbe6-f9894aefff18" />

**About Section**

<img width="1917" height="879" alt="image" src="https://github.com/user-attachments/assets/e53aa4a8-0f80-4285-8faa-f8fb4200487a" />

**The Art Section**

<img width="1914" height="864" alt="image" src="https://github.com/user-attachments/assets/99e1b94f-fc43-4360-9f7e-3f1f42c82bb1" />

<img width="1905" height="865" alt="image" src="https://github.com/user-attachments/assets/4183f339-be95-45ca-a68f-7fd030f7f45d" />







## 🌟 Features

### Core Sections
- **Hero Section**: Dynamic video background with animated title and call-to-action
- **Cocktails**: Display of popular cocktails and mocktails with pricing
- **About**: Gallery showcasing the bar's atmosphere and customer ratings
- **The Art**: Highlighting bartending expertise and signature techniques
- **Menu**: Interactive cocktail slider with detailed recipes and descriptions
- **Contact**: Store information, opening hours, and social media links

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by GSAP for professional-grade transitions
- **Video Integration**: Background video with scroll-triggered playback
- **Accessibility**: Screen reader support and semantic HTML
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Animations**: GSAP 3.14.2 (@gsap/react 2.1.2)
- **Responsive Design**: react-responsive 10.0.1
- **Linting**: ESLint 9.39.1
- **Development**: Hot module replacement, fast refresh

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/          # Static images (logos, backgrounds, etc.)
│   ├── videos/          # Background video files
│   └── fonts/           # Custom fonts
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Landing section with video
│   │   ├── Cocktails.jsx # Popular drinks list
│   │   ├── About.jsx    # Gallery and ratings
│   │   ├── Art.jsx      # Bartending features
│   │   ├── Menu.jsx     # Interactive cocktail menu
│   │   ├── Contact.jsx  # Store details and contact
│   │   └── Navbar.jsx   # Navigation component
│   ├── constants/       # Static data and configurations
│   │   └── index.js     # Menu items, store info, etc.
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # This file
```

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with gradient accents
- **Typography**: Custom font (Modern Negra Demo) for branding
- **Visual Effects**: Noise texture overlays, leaf decorations
- **Interactive Elements**: Hover effects, smooth scrolling
- **Mobile-First**: Responsive grid layouts and touch-friendly navigation

## 📊 Data Structure

The application uses static data stored in `constants/index.js`:

- **Navigation Links**: Section anchors for smooth scrolling
- **Cocktail Lists**: Popular drinks with pricing and details
- **Mocktail Lists**: Non-alcoholic beverage options
- **Store Information**: Address, contact details, opening hours
- **Social Media**: Links to Instagram, Twitter, Facebook
- **Features**: Key selling points and bartending highlights

## 🔧 Customization

### Adding New Cocktails
1. Add cocktail data to `constants/index.js` in the `allCocktails` array
2. Include image in `public/images/` directory
3. Update the component if needed for new fields

### Modifying Store Information
Update the `storeInfo`, `openingHours`, and `socials` objects in `constants/index.js`

### Styling Changes
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Animation configurations in component `useGSAP` hooks

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. Serve these files from your web server.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- Any static site hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

**JSM Cocktail**
- Address: 456, Prakash Pour, #404,Mumbai, India -400060
- Phone: ((555) 123-456
- Email: prakashpour@mojitomocktail.com

Follow us on social media:
- [Instagram](https://instagram.com/)
- [Twitter](https://twitter.com/)
- [Facebook](https://facebook.com/)

## 🙏 Acknowledgments

- GSAP for powerful animation capabilities
- Tailwind CSS for utility-first styling
- React ecosystem for robust frontend development
- Vite for lightning-fast development experience

---

*Crafted with passion for the art of mixology* 🍸
