import dotenv from 'dotenv';
dotenv.config({ override: true });
import tests from '../config/questions.js';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const getHome = (req, res) => {
    res.render('index', { tests });
};

export const startTest = (req, res) => {
    const testType = req.body.testType;
    if (!tests[testType]) {
        return res.redirect('/');
    }

    req.session.testType = testType;
    req.session.currentQuestion = 1;
    req.session.answers = [];

    res.redirect('/question/1');
};

export const getQuestion = (req, res) => {
    const id = parseInt(req.params.id);
    const testType = req.session.testType;

    if (!testType || !tests[testType]) {
        return res.redirect('/');
    }

    const currentTest = tests[testType];
    const questions = currentTest.questions;

    if (isNaN(id) || id < 1 || id > questions.length) {
        return res.redirect('/');
    }

    if (!req.session.currentQuestion) {
        req.session.currentQuestion = 1;
        req.session.answers = [];
    }

    if (id > req.session.currentQuestion) {
        return res.redirect(`/question/${req.session.currentQuestion}`);
    }

    const question = questions.find(q => q.question === id);
    res.render('question', { id, question, total: questions.length, testTitle: currentTest.title });
};

export const postQuestion = async (req, res) => {
    const id = parseInt(req.params.id);
    const answer = req.body.answer;
    const testType = req.session.testType;

    if (!testType || !tests[testType]) {
        return res.redirect('/');
    }

    const currentTest = tests[testType];
    const questions = currentTest.questions;

    console.log(`Câu ${id}: Chọn đáp án ${answer}`);

    if (!req.session.answers) {
        req.session.answers = [];
    }

    const questionObj = questions.find(q => q.question === id);
    if (questionObj) {
        const answerText = questionObj[answer] || answer;
        req.session.answers.push(`Câu ${id} - ${questionObj.title}: ${answer} (${answerText})`);
    }

    if (id === req.session.currentQuestion) {
        req.session.currentQuestion += 1;
    }

    if (id < questions.length) {
        res.redirect(`/question/${id + 1}`);
    } else {
        try {
            const prompt = `Dưới đây là các câu trả lời trắc nghiệm của Client về ${currentTest.title}:\n\n${req.session.answers.join('\n')}\n\nHãy tổng hợp, nhận định, đánh giá mức độ của Client. Trả lời bằng tiếng Việt. Format kết quả bằng HTML, bao gồm các tiêu đề (h2, h3), đoạn văn (p) và danh sách (ul/li) (KHÔNG bọc kết quả trong thẻ \`\`\`html).`;

            console.log("Đang nộp cho Gemini...", prompt);
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: prompt,
            });


            res.send(`
              <!DOCTYPE html>
              <html lang="vi">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Kết quả ${currentTest.title}</title>
                  <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body class="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30">
                  <div class="max-w-3xl mx-auto px-4 py-12">
                      <div class="text-center mb-10">
                          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${currentTest.color}">Hoàn thành xuất sắc!</h1>
                          <p class="text-slate-400 mt-2">Bạn đã hoàn thành xong ${questions.length} câu hỏi của ${currentTest.title}.</p>
                      </div>

                      <div class="relative group">
                          <div class="absolute -inset-1 bg-gradient-to-r ${currentTest.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                          <div class="relative bg-slate-800 ring-1 ring-white/10 rounded-2xl p-8 backdrop-blur-xl">
                              <div class="flex items-center space-x-3 mb-6">
                                  <div class="h-8 w-1 bg-gradient-to-b ${currentTest.color} rounded-full"></div>
                                  <h2 class="text-xl font-semibold text-white">Kết quả phân tích từ AI</h2>
                              </div>
                              
                              <div class="prose prose-invert prose-p:text-slate-300 prose-headings:text-slate-100 prose-a:text-cyan-400 max-w-none">
                                  ${response.text.replace(/\`\`\`html/g, '').replace(/\`\`\`/g, '')}
                              </div>
                          </div>
                      </div>

                      <div class="mt-10 text-center">
                          <a href="/" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:ring-cyan-500 shadow-lg">
                              <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                              Trở về Trang chủ
                          </a>
                      </div>
                  </div>
              </body>
              </html>
            `);
        } catch (error) {
            console.error(error);
            res.send(`
              <!DOCTYPE html>
              <html lang="vi">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Lỗi</title>
                  <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body class="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center">
                  <div class="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl max-w-lg text-center">
                      <h1 class="text-2xl font-bold text-red-500 mb-4">Đã xảy ra lỗi AI</h1>
                      <p class="text-slate-400 mb-6">${error.message}</p>
                      <a href="/" class="px-6 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition">Quay lại</a>
                  </div>
              </body>
              </html>
            `);
        }
    }
};
