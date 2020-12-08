const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mentorSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mid: {
    type: Number
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Mentor', mentorSchema);