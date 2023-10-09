const newsRouter = require('./news.route');

const route = (app) => {
  app.use('/news', newsRouter);

  app.get('/', (req, res) => {
    res.render('pages/home');
  });
};

module.exports = route;
