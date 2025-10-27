import express from 'express';
import usersRouter from './routes/users.js';
import articlesRouter from './routes/articles.js';

const app = express();
const PORT = 3000;

// Middleware для парсингу JSON
app.use(express.json());

// Кореневий маршрут
app.get('/', (req, res) => {
  res.status(200).send('Get root route');
});

// Підключення роутерів
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// Обробка неіснуючих маршрутів (404)
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Глобальна обробка помилок (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Запуск сервера
const server = app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});

// Експорт для тестів
export { server, app };