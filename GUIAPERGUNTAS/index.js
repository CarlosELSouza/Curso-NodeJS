const express = require('express')
const app = express() //criando uma instância do express

app.set('view engine', 'ejs') // Falando pro express, que o motor HTML (quem vai montar a página) que eu vou usar é o EJS

app.listen(3000, ()=> {
    console.log('App rodando')
})

app.get('/:nome/:lang', (req, res) =>{
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = true

    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        msg: exibirMsg
    }) // Vou montar a tela usando o EJS, função render do express (NÃO PRECISA DO .EJS, O RENDER OLHA DIRETO NA PASTA VIEWS)
})
