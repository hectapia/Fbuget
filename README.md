# 📱 Fbudget (Android Edition)

**Fbudget** is a lightweight, offline-first financial project manager designed for Android. It allows users to create projects, track detailed expenses with categories, and visualize budget health using interactive charts—all without needing an internet connection.

## 🚀 Features
* **Mobile Optimized:** Touch-friendly UI built with Bootstrap 5 and custom CSS.
* **Offline Database:** Uses a "Serverless" architecture (`db.js`) to save data directly to the device's storage.
* **Visual Analytics:** Interactive Doughnut Charts (Chart.js) to visualize spending by category (Materials, Labor, etc.).
* **Project Logic:** Real-time calculation of remaining budgets.
* **Native Android:** Built with **Capacitor**, running natively on Android devices.

## 🛠️ Tech Stack
* **UI:** HTML5, CSS3, Bootstrap 5, Chart.js
* **Logic:** Vanilla JavaScript (ES6+)
* **Mobile Engine:** Capacitor.js (Android Platform)
* **Data:** LocalStorage (JSON-based persistence)

---

## 💻 Development Setup

To run this app on your computer or an Android emulator, follow these steps.

### 1. Prerequisites
* [Node.js](https://nodejs.org/) installed.
* [Capacitor](https://capacitorjs.com/) installed.
* [Android Studio](https://developer.android.com/studio) installed (for the emulator/compiling).

### 2. Installation
Clone the project and install the JavaScript dependencies:
```bash
npx cap sync
npx cap open android
```