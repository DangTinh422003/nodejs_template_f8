const express = require('express');
const router = express.Router();

// [GET]  /login/
router.get('/', (req, res) => {
  res.render('pages/login.hbs');
});

module.exports = router;
