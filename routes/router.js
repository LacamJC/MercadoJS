const express = require('express')
const router = express.Router()

router.get('/', function(req,res) {
    res.render('../views/index.ejs')
})

router.get('/produtos', function(req,res) {
    res.render('../views/produtos.ejs')
})

module.exports = router