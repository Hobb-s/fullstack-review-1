const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.route('/user/signup')
  .post(UserController.SignUp)

router.route('/user/login/:username/:password')
  .get(UserController.Login)

module.exports = router;