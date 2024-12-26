const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных с API' });
  }
});


app.get('/categories', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении категорий' });
  }
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Сервер запущен на http://158.255.5.185:${port}`);
});
