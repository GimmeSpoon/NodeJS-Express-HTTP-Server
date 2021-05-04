/*This is the entry point of the server.*/
const express = require('express');
const app = express();

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

app.use('/contents',contents);
app.use('/mypage',mypage);
app.use('/',main);

app.use(express.static('popcon'));
app.use('/thumnails', express.static('thumbnails'));

//CSV test
const csv = require('./csv.js');
csv.test();