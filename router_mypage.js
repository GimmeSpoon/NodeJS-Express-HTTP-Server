const express = require('express');
const router = express.Router();

/* Routes every request through /contents */
router.get('/uploads',(req, res)=>{
    res.render('');
});

module.exports = router;