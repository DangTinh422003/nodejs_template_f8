const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  role : String,
  email : String,
});

const userModel = mongoose.model('user',userSchema)
module.exports = userModel;

