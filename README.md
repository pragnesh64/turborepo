# Turborepo Monorepo with Bun

A complete Turborepo monorepo setup using Bun as the package manager, featuring two React applications and shared packages.

## 📁 Structure

```
my-monorepo/
├── apps/
│   ├── salesBot/          # React + Vite + TypeScript app
│   └── adminPanel/        # React + Vite + TypeScript app
├── packages/
│   ├── shared-components/ # Shared MUI component library
│   └── shared-hooks/      # Shared React hooks
├── turbo.json             # Turborepo configuration
├── package.json           # Root package with workspace config
└── tsconfig.json          # Base TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

1. Install all dependencies:

```bash
bun install
```

## 📦 Packages

### @shared-components

MUI-based component library with:
- **Button** - Wrapper around MUI Button
- **Input** - MUI TextField with react-hook-form support
- **Card** - Simple MUI Card wrapper

### @shared-hooks

Custom React hooks including:
- **useAxios** - Returns configured axios instance
- **useFetch** - React Query wrapper for data fetching
- **useToggle** - Boolean toggle hook

## 🎯 Apps

### salesBot (Port 3000)

Sales bot application with:
- Login page using shared components
- Dashboard with API integration demo
- Full routing setup

### adminPanel (Port 3001)

Admin panel application with:
- Login page using shared components
- Dashboard with API integration demo
- useToggle hook demonstration
- Full routing setup

## 🛠️ Available Commands

### Development

Run all apps in development mode:
```bash
bun run dev
```

Run specific app:
```bash
cd apps/salesBot
bun run dev
```

### Build

Build all packages and apps:
```bash
bun run build
```

### Clean

Clean all build artifacts:
```bash
bun run clean
```

## 🔧 Features

✅ Turborepo for monorepo management  
✅ Bun workspaces  
✅ TypeScript with strict mode  
✅ Hot Module Replacement (HMR)  
✅ Path aliases for shared packages  
✅ React Router for navigation  
✅ React Query for data fetching  
✅ React Hook Form for form management  
✅ MUI for UI components  
✅ Zustand for state management  

## 📝 Usage Examples

### Importing Shared Components

```typescript
import { Button, Input, Card } from '@shared-components';

function MyComponent() {
  return (
    <Card>
      <Input label="Name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Importing Shared Hooks

```typescript
import { useAxios, useFetch, useToggle } from '@shared-hooks';

function MyComponent() {
  const axios = useAxios();
  const [isOpen, toggle] = useToggle(false);
  
  const { data, isLoading } = useFetch({
    queryKey: ['users'],
    queryFn: () => axios.get('/users'),
  });
  
  return <div>...</div>;
}
```

## 🌐 Environment Variables

Create a `.env` file in each app to configure:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📚 Tech Stack

- **Package Manager**: Bun
- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router v7
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Monorepo Tool**: Turborepo
