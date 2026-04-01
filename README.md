# 💹 Finance Tracker — Personal Analytics Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Recharts](https://img.shields.io/badge/Recharts-22b5bf?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A sleek, high-performance financial management application built with React. This project focuses on real-time data processing and interactive visualization of personal income and expenses.
## 📸 Preview
<img width="2447" height="781" alt="image" src="https://github.com/user-attachments/assets/0ff434eb-b0e6-47aa-a7f1-74fd389a964d" />



---

## 🚀 Key Features

* **Transactional Logic:** Toggle between `Income` and `Expense` types with real-time balance updates.
* **Data Visualization:** Integrated **Recharts** donut chart that dynamically updates as you add or remove transactions.
* **Smart Calculations:** Automatic balance summary with color-coded indicators (Profit/Loss).
* **CRUD Operations:** Full capability to add and delete transactions using unique IDs.
* **Premium UI:** Modern dark theme featuring **Glassmorphism**, responsive Flexbox layouts, and smooth CSS transitions.

## 🛠 Tech Stack

-   **Frontend Library:** React.js (Functional Components & Hooks)
-   **Charts/Analytics:** [Recharts](https://recharts.org/)
-   **Styling:** Modern CSS3 (Custom Variables, Flexbox, Backdrop-filters)
-   **Build Tool:** Vite

## 💻 Technical Implementation Details

### 1. Optimized State Management
Instead of using multiple `useEffect` hooks to synchronize totals, this project utilizes **Derived State**. The balance and chart data are calculated directly during the render phase, ensuring high performance and data integrity:

