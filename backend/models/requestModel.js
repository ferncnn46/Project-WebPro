const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  Message: {
    type: String,
    required: true
  },
  Reference: {
    type: String,
    required: true
  }
}, { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);
