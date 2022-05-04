const service = require('../service/answers');

const getAnswers = async (_req, res) => {
  try {
    const answersList = service.getAnswers();
    if (answersList !== false) return res.status(200).json(answersList);
    return res.status(204).json([]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).end();
  };
};

const addAnswer = async (req, res) => {
  try {
    const newAnswers = await service.addAnswer(req.body);
    return res.status(200).json(newAnswers);
  } catch (err) {
    console.error(err.message);
    return res.status(500).end();
  };
};

module.exports = {
  getAnswers,
  addAnswer
};
