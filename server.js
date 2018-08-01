/*
* import module
*/

// Class
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const sassMiddleware = require('node-sass-middleware')

// Modules
const frontRoute = require('./routes/front');
const apiRoute = require('./routes/api');


/*
* server configuration
*/

// variable
const app = express();
const port = process.env.PORT || 3000;

// client folder
app.set( 'views', __dirname + '/www/views' );

// Render engine
app.engine( 'html', ejs.renderFile );
app.set( 'view engine', 'ejs' );

app.use(sassMiddleware({
  src: __dirname + '/www/assets/sass',
  dest:  __dirname + '/www/assets/css',
  debug: false,
  outputStyle: 'compressed'
}));

app.use( express.static(path.join(__dirname, 'www')) );

// road
app.use('/', frontRoute);
app.use('/api', apiRoute);

/*
* server start
*/
app.listen(port, ()=> console.log(`server running on the port ${port}`));