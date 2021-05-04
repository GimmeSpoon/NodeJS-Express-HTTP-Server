const express = require('express');
const router = express.Router();

/* Routes every request through /contents */
router.get('/',(req, res)=>{
    res.render('index.html');
});

router.get('/login',(req, res)=>{
    res.render('login.html');
});

router.get('/register',(req, res)=>{
    res.render('register.html');
});

router.get('/aboutus',(req, res)=>{
    res.render('AboutUs.html');
});

router.get('/forgotid',(req, res)=>{
    res.render('forgotid.html');
});

router.get('/forgotpassword',(req, res)=>{
    res.render('forgotid.html');
});

module.exports = router;