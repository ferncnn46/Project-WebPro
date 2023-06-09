const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique : true
  },
  plantInCollection: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }]
});

module.exports = mongoose.model('Collection', collectionSchema);
