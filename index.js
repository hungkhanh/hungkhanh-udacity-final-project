const express = require('express');
require('dotenv').config()

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello world, my name is Hung Pham</h1>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
})