const fs = require('fs');
const { answerPoints } = require('../helper/answerPoints');

const getAnswers = () => {
  const json = fs.readFileSync('answers.json', 'utf-8');
  if (json === '') return false;
  return JSON.parse(json);
};

const addAnswer = (answer) => {
  const newObj = answerPoints(answer);
  const json = getAnswers();

  const fullObj = json ? [...json, newObj] : [newObj];
  console.log(fullObj);
  const stringifiedAnswer = JSON.stringify(fullObj);
  fs.writeFileSync('answers.json', stringifiedAnswer)
};

module.exports = {
  getAnswers,
  addAnswer
};
