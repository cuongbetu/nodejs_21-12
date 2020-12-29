const express = require('express');
const morgan = require('morgan');
const path = require('path');
var handlebars  = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes')


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded(
  {
    extended:true
  }
));
app.use(express.json());

//pp.use(morgan('combined'));

// Template string
app.engine('hbs', handlebars({
  extname : ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});