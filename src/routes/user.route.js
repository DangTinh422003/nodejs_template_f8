const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/user.controller');

// [GET]  /user/
router.get('/:email', userController.detail);
router.get('/', userController.index);

module.exports = router;
