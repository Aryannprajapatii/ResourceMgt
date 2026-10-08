 # Resource Usage & Billing System

A modular vanilla JavaScript web application designed to manage shared resources (such as Meeting Rooms, Car Parking, and Gym Equipment), track active usage sessions, prevent overuse past capacity, and generate accurate bills based on custom hourly pricing rules.

---

## 📂 1. Explanation of Data Structures Used

- **Resources Array (`model.js`):** 
  - The core state of the application is managed using an array of objects representing different resources. 
  - Each resource object contains properties like `id`, `name`, `maxCapicity`, `currentUser`, `firstHourCost`, `additionalHourCost`, `activeSession` (an array tracking current users), and `billDetail` (storing the latest generated bill).
- **Active Sessions Array (`activeSession`):** 
  - Inside each resource, active users are tracked using an array of objects containing `userNo`, `time` (readable string), and `startTime` (timestamp in milliseconds) to facilitate precise duration calculation upon exit.

---

## ⚙️ 2. Overview of the Logic and Approach

- **Modular Architecture:** The project is broken down into clean, single-responsibility ES6 modules:
  - **`model.js`**: Holds the initial data store.
  - **`schema.js`**: Central UI renderer (`renderUI`) that injects dynamic resource cards into the DOM.
  - **`resourceCard.js`, `activeCard.js`, `billCard.js`**: Component  for displaying resource , active user lists, and billing history.
  - **`handleStartbtn.js`**: Validates available capacity, increments user count, records timestamps, and pushes data to `activeSession`.
  - **`handleExit.js`**: Computes total duration from start to exit, rounds up fractional hours to the next full hour (`Math.ceil`), calculates the total bill in INR based on first-hour and additional-hour rates, updates the bill state, and frees up the slot.
- **Dynamic UI Refresh:** Every state change (starting or ending usage) triggers a re-render (`renderUI()`) to keep the interface synchronized with the underlying data model.

---

## 🚀 3. Steps on How to Run and Test the Code

Since this project uses **ES6 Modules (`type="module"` in HTML)**, it requires a local development server (like VS Code Live Server) to avoid CORS policy issues when importing JS files.

1. **Clone or Download** this repository/folder to your local machine.
2. Open the project folder in **VS Code**.
3. Install the **Live Server** extension in VS Code (if not already installed).
4. Right-click on `index.html` and select **"Open with Live Server"**.
5. **Testing the App in Browser:**
   - Click **"Start Usage"** on any resource card to allocate a slot. Notice the active user count and start time appear instantly.
   - Click **"Exit"** next to any active user to check out. The system will calculate the duration, round it up, generate the bill, and free up the slot automatically.

---

## 💡 4. Technical Assumptions & Details

- **Currency:** All billing calculations are strictly handled in Indian Rupees (₹).
- **Rounding Logic:** Any usage duration exceeding a full hour is rounded up to the next complete hour for billing purposes (e.g., 1 hour 10 minutes is billed as 2 hours).
- **In-Memory Storage:** Data persists in memory during the browser session. Refreshing the page resets the state back to the initial mock data in `model.js`.