// Express based NodeJS Server
// Currently possible to log in and out
// Modify any parts as you want

const express = require('express');
const app = express();
const passport = require('passport');
const passportConfig = require('./passport.js');

/*Renderer*/
app.set('html', require('ejs').renderFile);

/*Routers*/
const contents = require('./router_contents');
const mypage = require('./router_mypage');
const main = require('./router_main');

/*Logger*/
const logger = require('./log.js');

/*Basic Server Settings*/
const port = 8080;

app.listen(port, ()=>{
    logger.log('info', `Express Server starting at ${port}`);
});

// Link paths to the routers
app.use('/contents',contents);
app.use('/mypage',mypage);
app.use('/',main);

// Link the path to the static data
app.use('/thumbnails', express.static('thumbnails'));

// use Session
// in a Express-based server, passport.initialize() must be called to use the passport module
app.use(express.session({ secret: 'Type the secret here'}));
app.use(passport.initialize());
app.use(passport.session()); // This line must be after express.session

passportConfig();

//CSV test
const csv = require('./csv.js');
csv.test();