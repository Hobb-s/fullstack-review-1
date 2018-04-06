const Users = require('../../DB/Models/UsersModel');
const bcrypt = require('bcrypt');

const UserController = {
  SignUp: (req, res) => {
    console.log('here is req.body: ', req.body);

    // first generateSalt
    bcrypt.genSalt(10)
      .then( salt => {
        // now that we have salt, hash it
        bcrypt.hash(req.body.password, salt)
          .then( hashedPassword => {
            const user = new Users({
              username: req.body.username,
              password: hashedPassword
            });

            user.save()
              .then( data => {
                console.log('signup data: ', data);
                res.status(200).send('Success');
              })
              .catch( err => {
                res.status(400).send('Signup Failed');
              })
          })
          .catch( err => {
            // 
          });
      })
      .catch( err => {
        // 
      });
  },

  Login: (req, res) => {
    console.log('here is req.params ', req.params);
    Users.find({ username: req.params.username })
      .then( data => {
        if (data.length) {
          bcrypt.compare(req.params.password, data[0].password, (err, result) => {
            result ? 
              res.status(202).send(data[0]._id)
              :
              res.status(200).send('Invalid Password');
          });
        } else {
          res.status(200).send('No User Found');
        }
      })
      .catch( err => {
        console.log('Login Failed ', err);
        res.status(400).send('Login Failed');
      });
  }
}

module.exports = UserController;