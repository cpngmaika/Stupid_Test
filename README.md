# Mental Health Quiz System (AI-Powered)

A Node.js/EJS web application that allows users to take various mental health assessments (depression, anxiety, stress) while leveraging the power of **Google Gemini AI** to generate insightful and dynamic analysis of the results.

## ✨ Key Features
- Modern **Tailwind CSS** interface with glassmorphism-style UI.
- Progress bar to track quiz completion.
- Flexible quiz system powered by dynamic configuration files.
- Direct integration with **Gemini 3 Flash Preview API** for AI-generated feedback.

## 🚀 Installation Guide

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
````

2. **Set up API Key:**

   * Create a `.env` file in the root directory (or copy from `.env.example`).
   * Add your Google Gemini API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the application:**

   ```bash
   node server.js
   ```

   *Note: You can also use `npm start` if configured with environment file flags.*

4. Open your browser and go to: **[http://localhost:3000](http://localhost:3000)**

## 🛠️ Tech Stack

* **Node.js & Express** – Backend server framework
* **EJS** – Template engine for dynamic HTML rendering
* **Tailwind CSS** – UI styling (via CDN)
* **@google/genai** – Official Google SDK for interacting with Gemini
* **dotenv** – Secure environment variable management

## 📝 Customization

You can easily add new quizzes by creating a new object block inside `config/questions.js`.
The routing system and UI will automatically adapt to the new test type.

````

---
