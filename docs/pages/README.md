# Pages Documentation Index

This directory contains detailed documentation for each page component in the application.

## 📚 Available Documentation

| Page | Documentation File | Description |
|------|-------------------|-------------|
| **Profile** | [Profile.md](./Profile.md) | User profile page with progress indicator and action buttons |
| **EditProfile** | [EditProfile.md](./EditProfile.md) | Profile editing form with multiple sections |
| **Settings** | [Settings.md](./Settings.md) | Settings page with sections and items |
| **Dashboard** | [Dashboard.md](./Dashboard.md) | Main dashboard container and route mapping |
| **Discover** | [Discover.md](./Discover.md) | Swipeable profile cards for browsing matches |

## 📋 Documentation Structure

Each documentation file includes:

1. **Overview** - Purpose and route information
2. **File Structure** - Component files and organization
3. **How to Import** - Import statements and examples
4. **Dependencies** - Enums, types, constants, interfaces
5. **Implementation** - Full component code examples
6. **How It Renders** - Step-by-step rendering logic
7. **Adding New Features** - Guide for extending functionality
8. **Troubleshooting** - Common issues and solutions
9. **Related Files** - Links to related code files

## 🚀 Quick Start

### Reading Documentation

1. Find the page you want to understand
2. Open the corresponding `.md` file
3. Follow the sections in order:
   - Start with "Overview" to understand the purpose
   - Check "Dependencies" to see what's needed
   - Review "Implementation" for code examples
   - Use "How It Renders" to understand the flow

### Implementing a Page

1. Read the page's documentation
2. Check required dependencies (enums, constants, interfaces)
3. Follow the implementation examples
4. Refer to "Adding New Features" for customization

## 📝 Common Patterns

### Constants-Driven Pages

Pages like **Settings** and **EditProfile** use constants to define their structure:

```typescript
// Constants define sections and items
const sections = getAllSections();

// Render dynamically
{sections.map(({ section, title, items }) => (
    <div key={section}>
        <h2>{title}</h2>
        {items.map(item => <ItemComponent item={item} />)}
    </div>
))}
```

### Redux Integration

Most pages access user data from Redux:

```typescript
import { useAppSelector } from '@store/hooks';

const { user } = useAppSelector((state) => state.auth);
```

### Navigation

Pages use React Router for navigation:

```typescript
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types';

const navigate = useNavigate();
navigate(Routes.PROFILE);
```

## 🔗 Related Documentation

- [PROJECT_DOCUMENTATION.md](../../PROJECT_DOCUMENTATION.md) - Complete project documentation
- [BACKEND_API_SPEC.md](../../BACKEND_API_SPEC.md) - Backend API specification
- [README.md](../../README.md) - Project overview and setup guide

## 📞 Need Help?

If you can't find what you're looking for:

1. Check the main [PROJECT_DOCUMENTATION.md](../../PROJECT_DOCUMENTATION.md)
2. Review the page's source code in `src/pages/`
3. Check related constants in `src/constants/`
4. Review type definitions in `src/types/`

---

**Last Updated**: February 9, 2026  
**Version**: 1.0.0
