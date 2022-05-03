const router = require('express').Router();
const controller = require('../controller/answers');

router.post('/', controller.addAnswer);

module.exports = router;
