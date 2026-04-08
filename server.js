import express from 'express';
import session from 'express-session';

import { getQuestion, postQuestion, startTest, getHome } from './controllers/quizController.js';


const app = express();
const port = 3000;

app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', getHome);
app.post('/start', startTest);
app.get('/question/:id', getQuestion);
app.post('/question/:id', postQuestion);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);

});