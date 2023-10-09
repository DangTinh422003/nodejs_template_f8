const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/products_management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('\nConnect to DB successfully !!!');
  } catch (error) {
    console.log('\nConnect to DB failed !!!');
    console.log(error);
  }
};

module.exports = { connect };
