# 💸 ExpenseTracker v1.0

A beautifully crafted cross-platform **React Native** app to manage personal finances. This app allows users to track income and expenses, visualize spending, and store everything securely using **Supabase** and a custom **Express backend on Render**.

---

## 🌟 Features

- 💰 Add and delete income/expenses
- 📈 Real-time balance calculation
- 🔐 User authentication via Supabase
- ☁️ Cloud sync using Supabase DB + Express API
- 📱 Expo-powered Android/iOS build
- 🧠 Clean, intuitive UI 

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
| ![Home](![WhatsApp Image 2025-07-18 at 11 47 05 AM (2)](https://github.com/user-attachments/assets/9dd350ca-3f31-4867-a698-933176a622a0)
) | ![Add](![WhatsApp Image 2025-07-18 at 11 47 05 AM](https://github.com/user-attachments/assets/30e4e67b-5a33-4472-a7d0-8801b1e30ad2)
) | ![Dash](![WhatsApp Image 2025-07-18 at 11 47 05 AM (1)](https://github.com/user-attachments/assets/1684dc42-e26b-42f8-b6b2-687652c97fc5)
) |


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

---

##  📦 Build for Android

```bash
eas build -p android --profile preview
```

To build .apk directly (for local testing only):

```bash
eas build -p android --profile preview --platform android --local
```

Install EAS CLI globally first:
```bash
npm install -g eas-cli
```

---

## 📁 Backend (Express on Render)

- API deployed on Render.com
- Use EXPO_PUBLIC_API_URL_RENDER to access the API from your mobile app






