const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
});

const productsModel = mongoose.model('product',productSchema)
module.exports = productsModel;

