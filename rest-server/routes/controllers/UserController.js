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
        res.status(201).send('Success');
      })
      .catch( err => {
        console.log('signup err: ', err);
        res.status(400).send('Signup Failed!');
      });
  },

  Login: (req, res) => {
    console.log('here is req.params ', req.params);
    Users.find({ username: req.params.username })
      .then( data => {
        if (data.length) {
          console.log('data is... ', data);
          if (data[0].password === req.params.password) {
            console.log('successful login: ', data[0]);
            // 202: accepted
            res.status(202).send(data[0]._id);
          }
          // 200: request is valid, but not matching/passing
          res.status(200).send('Incorrect Password');
        }
        res.status(400).send('No User Found!');
      })
      .catch( err => {
        console.log('Login Failed ', err);
        res.status(400).send('Login Failed');
      });
  }
}
