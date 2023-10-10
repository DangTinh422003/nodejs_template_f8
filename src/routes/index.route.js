const productsRouter = require('./products.route');

const route = (app) => {
  app.use('/products', productsRouter);

  app.get('/', (req, res) => {
    res.render('pages/home');
  });
};

module.exports = route;
