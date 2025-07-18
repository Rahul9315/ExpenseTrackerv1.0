# 💸 ExpenseTracker v1.0

A beautifully crafted cross-platform **React Native** app to manage personal finances. This app allows users to track income and expenses, visualize spending, and store everything securely using **Supabase** and a custom **Express backend on Render**.

---

## 🌟 Features

- 💰 Add, edit, and delete income/expenses
- 📈 Real-time balance calculation
- 🔐 User authentication via Supabase
- ☁️ Cloud sync using Supabase DB + Express API
- 📱 Expo-powered Android/iOS build
- 🧠 Clean, intuitive UI using React Native Elements (RNEUI)

---

## 🧑‍💻 Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React Native, JSX, React Navigation |
| Backend   | Express.js, Render Hosting |
| Auth & DB | Supabase                           |
| Build     | Expo SDK 53, EAS CLI                |
| Language  | JavaScript                         |

---

## 📸 Screenshots

| Home | Add Expense | Dashboard |
|------|-------------|-----------|
| ![Home](./screenshots/home.png) | ![Add](./screenshots/add.png) | ![Dash](./screenshots/dashboard.png) |


---


## ⚙️ Installation

```bash
git clone https://github.com/your-username/ExpenseTrackerv1.0.git
cd ExpenseTrackerv1.0/frontend_mobile/my-app
npm install --legacy-peer-deps
```

---

## 🔐 Environment Variables

Create a .env file in your project root:
```bash
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_KEY=your-anon-key
EXPO_PUBLIC_API_URL_RENDER=https://your-express-api.onrender.com
```
Also add these environment variables on the Expo.dev dashboard under your project settings.


---

## ▶️ Running Locally

```bash
npx expo start --tunnel
```
Scan the QR with Expo Go on Android or iOS


