# Günlük İyi İşler

A platform for sharing and discovering daily acts of kindness.

## 🚀 Live Demo

Visit the live site: [Günlük İyi İşler](https://gunluk-iyi-isler.netlify.app)

## ✨ Features

- Share good deeds and acts of kindness
- Browse and search through shared deeds
- Categorize deeds (Community, Animals, Environment)
- Multi-language support (Turkish and English)
- Responsive design
- Social sharing capabilities

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- i18next
- Zustand
- shadcn/ui

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gunluk-iyi-isler.git
```

2. Navigate to the project directory:
```bash
cd gunluk-iyi-isler
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

### Manual Deployment to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
- Go to [Netlify](https://app.netlify.com)
- Create a new site from Git
- Connect to your GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`

### Automatic Deployment

The project is configured for continuous deployment with GitHub Actions:
1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Build the project
   - Run tests
   - Deploy to Netlify

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.