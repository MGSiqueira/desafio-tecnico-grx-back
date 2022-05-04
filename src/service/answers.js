const model = require('../model/answers');

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
