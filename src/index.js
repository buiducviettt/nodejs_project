const express = require('express');
const { engine } = require('express-handlebars'); // ✅ Import đúng cách
const morgan = require('morgan');
const path = require('path'); // Đảm bảo đã import dòng này
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Sử dụng middleware để phục vụ file static
app.use(morgan('combined'));
// ✅ Cấu hình template engine đúng cú pháp
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/resource/views');
console.log('View folder:', app.get('views'));
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
