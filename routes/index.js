const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes)

router.use((req,res)=>{
    res.sendFile(path.join(__dirname, '../book-search/build/index.html'));
})


module.exports = router