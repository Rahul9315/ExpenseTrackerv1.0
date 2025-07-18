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

Home:
![WhatsApp Image 2025-07-18 at 11 47 05 AM](https://github.com/user-attachments/assets/28eb65a7-0968-4f6a-a552-982d142a1985)

Dashboard:
![WhatsApp Image 2025-07-18 at 11 47 05 AM (1)](https://github.com/user-attachments/assets/26fe02a8-bc8b-4f61-afaf-028117b42936)

Add Screen:
![WhatsApp Image 2025-07-18 at 11 47 05 AM (2)](https://github.com/user-attachments/assets/c3e2cabe-9f40-4660-b973-56d789c2a7ec)

 
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






