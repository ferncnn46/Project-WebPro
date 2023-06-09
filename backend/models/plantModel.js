const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true  
  },
  category: {
    type: String,    
    required: true,

  },
  description: {
    type: String,
    required: true,
    unique: true  

  },
  image: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

module.exports = mongoose.model('Plants', plantSchema);