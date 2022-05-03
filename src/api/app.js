const express = require('express');
const answerRouter = require('../routes/answers');

const app = express();
app.use(express.json());

app.use('/answers', answerRouter);

app.get('/', (_req, res) => (
  res.status(200).send('Hello World!!')
));

module.exports = app;