const router = require('express').Router();
const controller = require('../controller/answers');

router.post('/', controller.addAnswer);
router.get('/', controller.getAnswers);

module.exports = router;
