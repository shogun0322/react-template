# ⚡ React + Vite + TypeScript Template

Modern React template powered by **Vite**, **TypeScript**, and **ESLint**  
with **absolute imports**, **auto-sorted imports**, and a clean developer experience out of the box.

---

## ✨ Features

- ⚡ Vite – fast dev server & build
- ⚛️ React 18
- 🧠 TypeScript
- 📏 ESLint (React + TypeScript)
- 🔀 Auto import sorting (`simple-import-sort`)
- 🧭 Absolute imports with `@/`
- 💾 Project-level VS Code settings
- 🧼 Consistent & team-friendly code style

---

## 📦 Tech Stack

- React
- Vite
- TypeScript
- ESLint
- eslint-plugin-simple-import-sort

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourname/react-template.git
cd react-template
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

---

## 🗂 Project Structure

```txt
src/
├─ components/
├─ hooks/
├─ pages/
├─ styles/
├─ utils/
├─ main.tsx
├─ App.tsx
```

---

## 🧭 Absolute Imports (`@/`)

This template supports absolute imports pointing to the `src` directory.

### Example
```ts
import Button from '@/components/Button';
import useAuth from '@/hooks/useAuth';
```

---

## 🔀 Auto Sort Imports (on Save)

Imports are automatically sorted when saving a file.

### Import order
1. React & external packages  
2. Absolute imports (`@/`)  
3. Relative imports (`./`, `../`)

---

## 📏 ESLint

Run ESLint manually:
```bash
npx eslint src --fix
```

---

## 📄 License

MIT License  
Free to use, modify, and distribute.
