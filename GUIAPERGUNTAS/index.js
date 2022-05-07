const express = require('express')
const app = express()

app.set('view engine', 'ejs') // Falando pro express, que o motor HTML (quem vai montar a página) que eu vou usar é o EJS

app.listen(3000, ()=> {
    console.log('App rodando')
})

app.get('/', (req, res) =>{
    res.render('index') // Vou montar a tela usando o EJS, função render do express (NÃO PRECISA DO .EJS, O RENDER OLHA DIRETO NA PASTA VIEWS)
})