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

| Technology | Version | Purpose |
|------------|---------|---------||
| ![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white) | 19.2.0 | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white) | 5.9.3 | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white) | 7.2.4 | Build Tool |
| ![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11-764ABC?logo=redux&logoColor=white) | 2.11.2 | State Management |
| ![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?logo=reactrouter&logoColor=white) | 7.13.0 | Routing |
| ![Ant Design](https://img.shields.io/badge/Ant_Design-6.2-0170FE?logo=antdesign&logoColor=white) | 6.2.3 | UI Components |
| ![Axios](https://img.shields.io/badge/Axios-1.13-5A29E4?logo=axios&logoColor=white) | 1.13.4 | HTTP Client |
| ![Redux Persist](https://img.shields.io/badge/Redux_Persist-6.0-764ABC?logo=redux&logoColor=white) | 6.0.0 | State Persistence |

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
│   ├── Layout/     # Main app layout (phone frame)
│   ├── AuthLayout/ # Auth pages layout
│   ├── DashboardLayout/ # Dashboard container
│   ├── Button/     # Custom buttons
│   ├── Spinner/    # Loading spinner
│   ├── ConfirmModal/ # Confirmation dialogs
│   ├── SuccessScreen/ # Success/celebration screen
│   ├── ThemeToggle/ # Theme switcher
│   ├── AntdProvider/ # Ant Design theme provider
│   ├── CommonSelector/ # Selector/dropdown component
│   ├── DashboardCard/ # Dashboard card component
│   └── Common*/    # Common form components
├── pages/          # Page components
│   ├── Splash/     # Loading screen
│   ├── Home/       # Landing page
│   ├── LoginSetup/ # Login with OTP
│   ├── ProfileSetup/ # 9-step registration
│   ├── ForgotPassword/ # Password recovery
│   ├── Dashboard/  # Main app (protected)
│   ├── Discover/   # Swipe profiles
│   ├── Profile/    # User profile
│   ├── EditProfile/ # Edit profile
│   ├── Settings/   # App settings
│   ├── TermsOfService/ # Terms of Service
│   ├── PrivacyPolicy/ # Privacy Policy
│   └── NotFound/   # 404 page
├── routes/         # Routing configuration
├── store/          # Redux state management
│   └── slices/     # Redux slices
├── services/       # API services
│   ├── api/        # API endpoints
│   └── interceptor.ts # Axios config
├── interfaces/     # TypeScript interfaces
├── types/          # TypeScript enums
├── constants/      # App constants & messages
├── data/           # Static data
├── hooks/          # Custom hooks
├── assets/         # Images & media
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

### Additional Documentation

- **[BACKEND_API_SPEC.md](./BACKEND_API_SPEC.md)** - Backend API specification with endpoints and examples
- **[docs/pages/](./docs/pages/)** - Detailed documentation for individual pages (Dashboard, Discover, Profile, EditProfile, Settings)

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
| `/profile-setup` | Public |
| `/forgot-password` | Non-authenticated only |
| `/terms-of-service` | Public |
| `/privacy-policy` | Public |
| `/dashboard` | Authenticated only |
| `/discover` | Authenticated only |
| `/profile` | Authenticated only |
| `/edit` | Authenticated only |
| `/settings` | Authenticated only |
| `/matches` | Authenticated only |
| `/chat` | Authenticated only |

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
