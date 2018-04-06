const mongoose = require('mongoose');
const { Schema } = require('mongoose');

mongoose.connect('mongodb://localhost/reactmongo');

const sampleSchema = new Schema({
  name: String,
  secret: String
})

const sampleModel = mongoose.model('sample', sampleSchema);

const sampleModelInstance = new sampleModel({ name: 'TESTONE', secret: 'TESTWO'});

sampleModelInstance.save()
  .then(() => {
    console.log('mongo queries connected!');
  })
  .catch( err => {
    console.log('error connecting mongo queries');
  });

  module.exports = mongoose;
