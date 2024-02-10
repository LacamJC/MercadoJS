const express = require('express')
const app = express()
const rotas = require('./routes/router')
const port = 3000
const bodyParser = require('body-parser')

const Produto = require('./api/Produto.js')
const produtos_lista = []
const path = require('path')

const multer = require('multer')
const upload = multer({dest : path.join(__dirname, 'public/uploads')})
app.use(upload.single('fotoProduto'))

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(__dirname+'/public'))



app.use('/', rotas)
app.set('views engine', 'ejs')

app.post('/CadastrarProduto', (req,res) =>{
    console.log("Cadastrando Produto")
    const produto = new Produto(req.body.nomeProduto, req.body.precoProduto, req.body.descricaoProduto, req.body.quantidadeProduto, (req.file?req.file.filename : 'default.png'))

    console.log(produto)
    produtos_lista.push(produto)
    console.log(produtos_lista)
    res.render('../views/produtos.ejs', {produtos_lista : produtos_lista})
})


app.listen(port, function(req, res) {
    console.log(`App listening in port ${port}`)
})