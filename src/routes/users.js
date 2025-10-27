import express from 'express';
const router = express.Router();

// Імітація бази даних користувачів
const validUserIds = ['123', '456', '789'];

// GET /users - отримати всіх користувачів
router.get('/', (req, res) => {
  res.status(200).send('Get users route');
});

// POST /users - створити нового користувача
router.post('/', (req, res) => {
  // Валідація вхідних даних
  if (!req.body || !req.body.name || req.body.name.trim() === '') {
    return res.status(400).send('Bad Request');
  }
  
  res.status(201).send('Post users route');
});

// GET /users/:userId - отримати користувача за ID
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  
  // Перевірка наявності користувача
  if (!validUserIds.includes(userId)) {
    return res.status(404).send('Not Found');
  }
  
  res.status(200).send(`Get user by Id route: ${userId}`);
});

// PUT /users/:userId - оновити користувача за ID
router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  
  // Перевірка наявності користувача
  if (!validUserIds.includes(userId)) {
    return res.status(404).send('Not Found');
  }
  
  // Валідація вхідних даних
  if (!req.body || !req.body.name || req.body.name.trim() === '') {
    return res.status(400).send('Bad Request');
  }
  
  res.status(200).send(`Put user by Id route: ${userId}`);
});

// DELETE /users/:userId - видалити користувача за ID
router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  
  // Перевірка наявності користувача
  if (!validUserIds.includes(userId)) {
    return res.status(404).send('Not Found');
  }
  
  res.status(204).send();
});

export default router;