const productsRouter = require('./products.route');
const contactRouter = require('./contact.route');

const route = (app) => {
  app.use('/products', productsRouter);
  app.use('/contact',contactRouter)

  app.get('/', (req, res) => {
    res.render('pages/home.hbs');
  });
};

module.exports = route;
