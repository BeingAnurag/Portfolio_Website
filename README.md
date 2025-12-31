# Portfolio Website

A modern, high-performance portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features smooth animations, responsive design, and optimized for deployment on Vercel.

## ✨ Features

- **Modern React Architecture** - Functional components with hooks
- **TypeScript** - Type-safe development for better code quality
- **Smooth Animations** - Framer Motion for fluid, professional animations
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Fast Build System** - Vite for lightning-fast HMR and optimized production builds
- **Dark Theme** - Elegant dark mode design throughout
- **Optimized Performance** - Lazy loading, code splitting, optimized assets
- **Vercel Ready** - Pre-configured for seamless deployment

## 📋 Sections

- **Hero** - Eye-catching landing section with parallax effects
- **Work Grid** - Portfolio showcase with project cards
- **Skills & Tools** - Technical expertise and tool proficiency
- **Leadership** - Professional background and accomplishments
- **Contact** - Get in touch section with social links
- **Navigation** - Smooth scrolling with active section highlighting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install root dependencies
npm install

# Navigate to client directory and install dependencies
cd client
npm install
```

### Development

```bash
cd client
npm run dev
```

The site will be available at `http://localhost:5173` with hot module replacement enabled.

### Build for Production

```bash
cd client
npm run build
```

This creates an optimized production build in `dist/` directory, ready for deployment.

### Preview Production Build

```bash
cd client
npm run preview
```

## 📦 Project Structure

```
Portfolio_Website/
├── client/                    # React Vite application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── Hero.tsx      # Landing section with parallax
│   │   │   ├── WorkGrid.tsx  # Project portfolio grid
│   │   │   ├── SkillsAndRecent.tsx  # Skills showcase
│   │   │   ├── Leadership.tsx # Professional background
│   │   │   ├── Contact.tsx   # Contact section
│   │   │   └── Layout.tsx    # Main layout wrapper
│   │   ├── assets/           # Images and static assets
│   │   ├── App.tsx           # Root component with routing logic
│   │   ├── App.css           # Component styles
│   │   ├── index.css         # Global styles
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static files
│   ├── vite.config.ts        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── tsconfig.json         # TypeScript configuration
│   ├── package.json          # Dependencies
│   └── index.html            # HTML entry point
└── package.json              # Root package configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint
- **CSS Processing**: PostCSS

## 📝 Customization

### Edit Portfolio Projects

Open `client/src/components/WorkGrid.tsx` and modify the `PROJECTS` array to showcase your own work:

```tsx
const PROJECTS = [
  {
    id: 1,
    title: "Your Project Title",
    category: "YOUR CATEGORY",
    tools: ["TOOL1", "TOOL2"],
    year: "2024",
    image: "https://your-image-url.jpg",
    description: "Your project description"
  },
  // Add more projects...
];
```

### Customize Colors

Edit `client/tailwind.config.js` to customize the color scheme:

```js
theme: {
  colors: {
    'cinema-black': '#000000',
    'cinema-accent': '#FFFFFF',
    // Add your colors...
  }
}
```

### Update Skills

Modify the skills section in `client/src/components/SkillsAndRecent.tsx` to list your technical expertise.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/dist`
4. Deploy!

The site will be live with automatic deployments on every push to main.

### Other Platforms

The project can be deployed to any static hosting platform that supports Node.js builds:
- Netlify
- GitHub Pages
- AWS Amplify
- Firebase Hosting

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please reach out through the Contact section on the website.

---

**Built with ❤️ for modern web**
