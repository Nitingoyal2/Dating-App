# 💜 Prosto - Love Made Simple

<p align="center">
  <img src="public/favicon.svg" alt="Prosto Logo" width="120" height="120" />
</p>

<p align="center">
  <strong>Dating made simple. No complications, just love.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#documentation">Documentation</a>
</p>

---

## ✨ Features

- 🎨 **Beautiful UI** - Modern, clean interface with smooth animations
- 📱 **Mobile-First Design** - Optimized for mobile with responsive layout
- 🔐 **Authentication** - Secure login, register, and password recovery
- 🛡️ **Protected Routes** - Route guards for authenticated content
- 🌙 **Theme Support** - Light/dark theme ready
- ⚡ **Fast Performance** - Built with Vite for lightning-fast dev experience
- 🔄 **State Management** - Redux Toolkit for predictable state
- 📝 **TypeScript** - Full type safety throughout the app

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white) | Build Tool |
| ![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white) | State Management |
| ![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white) | Routing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nitingoyal2/Dating-App.git
   cd Dating-App/dating-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Layout      # Main app layout (phone frame)
│   └── AuthLayout  # Auth pages layout
├── pages/          # Page components
│   ├── Splash/     # Loading screen
│   ├── Home/       # Landing page
│   ├── Login/      # Login form
│   ├── Register/   # Registration form
│   ├── ForgotPassword/
│   └── Dashboard/  # Main app (protected)
├── routes/         # Routing configuration
├── store/          # Redux state management
│   └── slices/     # Redux slices
├── types/          # TypeScript types & enums
└── utils/          # Utilities
    └── svg/        # SVG icon components
```

---

## 📖 Documentation

For detailed documentation, see **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)**

This includes:
- Complete folder structure explanation
- Application flow diagrams
- Component documentation
- Redux state management guide
- How to add new features
- Code examples and patterns

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#6C5CE7` | Main brand color |
| Secondary Purple | `#a855f7` | Gradients, accents |
| Pink Accent | `#ec4899` | Highlights |

---

## 🔒 Route Protection

| Route | Access |
|-------|--------|
| `/` | Public |
| `/login` | Non-authenticated only |
| `/register` | Non-authenticated only |
| `/forgot-password` | Non-authenticated only |
| `/dashboard` | Authenticated only |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💜 Made with Love

Built with ❤️ for people looking for meaningful connections.

**Prosto** - Because love should be simple.

---

<p align="center">
  <strong>Prosto - Love Made Simple</strong>
</p>
