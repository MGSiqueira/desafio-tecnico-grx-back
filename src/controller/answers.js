const service = require('../service/answers');

const addAnswer = async (req, res) => {
  try {
    const newAnswers = await service.addAnswer(req.body)
    return res.status(200).json(newAnswers);
  } catch (err) {
    return console.error(err.message);
  }
};

module.exports = {
  addAnswer,
};
