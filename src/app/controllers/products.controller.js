const productsModel = require('../models/products.model');

class ProductsController {
  // [GET] /news
  index = (req, res) => {
    res.render('pages/products');
  };

  // [GET] /news/:slug
  show = (req, res) => {
    (async () => {
      const query = await productsModel.find({});
      console.log(query);
    })();
    res.send('oke');
  };
}

module.exports = new ProductsController();
