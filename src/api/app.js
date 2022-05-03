const express = require('express');
const cors = require('cors');
const answerRouter = require('../routes/answers');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/answers', answerRouter);

app.get('/', (_req, res) => (
  res.status(200).send('Hello World!!')
));

module.exports = app;