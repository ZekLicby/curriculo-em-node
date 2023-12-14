//server.js
const express = require('express');
const bodyParser = require('body-parser');
const curriculoRoutes = require('./routes/Routes.js');

const app = express();

app.use(bodyParser.json());

app.use('/api/curriculos', curriculoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
