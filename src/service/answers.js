const model = require('../model/answer');

const addAnswer = async (answer) => {
  const newAnswers = await model.addAnswer(answer);

  return newAnswers;
}

module.exports = {
  addAnswer,
};
