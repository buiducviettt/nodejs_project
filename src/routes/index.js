const NewsController = require('../app/controllers/NewsController');
const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  // app.get('/news', (req, res) => {
  //   console.log('this is a Q of news:', req.query.q);
  //   res.render('news');
  // });
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
  });
}
module.exports = route;
