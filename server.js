import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

import {
  getQuestion,
  postQuestion,
  startTest,
  getHome,
} from "./controllers/quizController.js";

dotenv.config();

const app = express();
const port = 3000;

// ===== AI setup =====
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "quiz-secret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.set("view engine", "ejs");

// ===== Quiz routes =====
app.get("/", getHome);
app.post("/start", startTest);
app.get("/question/:id", getQuestion);
app.post("/question/:id", postQuestion);

// ===== AI routes =====
app.post("/ask", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    res.json({ result: response.text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/ask", async (req, res) => {
  try {
    const { prompt } = req.query;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    res.json({ result: response.text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== Start server =====
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
