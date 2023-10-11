const productsModel = require('../models/products.model');

class ProductsController {
  // [GET] /products
  index = (req, res) => {
    res.render('pages/products.hbs');
  };

  // [GET] /products/:slug
  show = (req, res) => {
    let data = '';
    (async () => {
      const query = await productsModel.find({});
      data = JSON.stringify(query);
      console.log(data);
    })();
    res.render('pages/products.hbs', { data: data });
  };
}

module.exports = new ProductsController();
