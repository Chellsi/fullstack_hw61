import express from 'express';
const router = express.Router();

// Імітація бази даних статей
const validArticleIds = ['456', '789', '101'];

// GET /articles - отримати всі статті
router.get('/', (req, res) => {
  res.status(200).send('Get articles route');
});

// POST /articles - створити нову статтю
router.post('/', (req, res) => {
  // Валідація вхідних даних
  if (!req.body || !req.body.title || req.body.title.trim() === '') {
    return res.status(400).send('Bad Request');
  }
  
  res.status(201).send('Post articles route');
});

// GET /articles/:articleId - отримати статтю за ID
router.get('/:articleId', (req, res) => {
  const { articleId } = req.params;
  
  // Перевірка наявності статті
  if (!validArticleIds.includes(articleId)) {
    return res.status(404).send('Not Found');
  }
  
  res.status(200).send(`Get article by Id route: ${articleId}`);
});

// PUT /articles/:articleId - оновити статтю за ID
router.put('/:articleId', (req, res) => {
  const { articleId } = req.params;
  
  // Перевірка наявності статті
  if (!validArticleIds.includes(articleId)) {
    return res.status(404).send('Not Found');
  }
  
  // Валідація вхідних даних
  if (!req.body || !req.body.title || req.body.title.trim() === '') {
    return res.status(400).send('Bad Request');
  }
  
  res.status(200).send(`Put article by Id route: ${articleId}`);
});

// DELETE /articles/:articleId - видалити статтю за ID
router.delete('/:articleId', (req, res) => {
  const { articleId } = req.params;
  
  // Перевірка наявності статті
  if (!validArticleIds.includes(articleId)) {
    return res.status(404).send('Not Found');
  }
  
  res.status(204).send();
});

export default router;