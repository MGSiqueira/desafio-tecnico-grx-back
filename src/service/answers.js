const model = require('../model/answer');

const getAnswers = () => {
  return model.getAnswers();
};

const addAnswer = async (answer) => {
  const newAnswers = await model.addAnswer(answer);

  return newAnswers;
};

module.exports = {
  getAnswers,
  addAnswer
};
