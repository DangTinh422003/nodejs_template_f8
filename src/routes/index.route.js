const productsRouter = require('./products.route');
const contactRouter = require('./contact.route');
const userRouter = require('./user.route');
const loginRouter = require('./login.route');

const route = (app) => {
  app.use('/products', productsRouter);
  app.use('/contact', contactRouter);
  app.use('/user', userRouter);
  app.use('/login', loginRouter);

  app.get('/', (req, res) => {
    res.render('pages/home.hbs');
  });
};

module.exports = route;
