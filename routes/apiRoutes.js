const router = require('express').Router();
const axios = require('axios');


router.get('/books/search', (req,res)=>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.q}`).then(response=>console.log(response.data.items)).catch(err=>console.log(err))
})

module.exports = router;