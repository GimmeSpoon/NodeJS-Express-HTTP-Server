const express = require('express');
const router = express.Router();

/* Routes every request through /contents */
router.get('/',(req, res)=>{
    res.render('contentsmain.html');
});

module.exports = router;