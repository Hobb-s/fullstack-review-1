const Users = require('../../DB/Models/UsersModel');

const UserController = {
  SignUp: (req, res) => {
    console.log('here is req.body: ', req.body);

    const user = new Users({
      username: req.body.username,
      password: req.body.password
    });

    user.save()
      .then( data => {
        console.log('signup data: ', data);
      })
      .catch( err => {
        console.log('signup err: ', err);
      })
  }
}

module.exports = UserController;