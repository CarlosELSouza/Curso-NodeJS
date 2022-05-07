const express = require('express')           // carregando o framework (usando const, pq ela sempre vai ter esse valor)
const app = express()                        // função do express que vai carregar todas as funções dele, iniciando na variavel app


app.get("/", function(requisicao, resposta){
    resposta.send('<h1>oie</>') // envia uma (mas só envia uma vez) resposta
})                                          // criando rota, ela precisa saber pra qual URL ela aponta, e o que ela faz (ela precisa desses dois)

app.get('/blog', function(req, res){
    res.send('Rota do blog')
})

app.get('/canal/youtube', function(req, res){
    var canal = req.query['canal']

    if(canal) {
        res.send(canal)
    } else {
        res.send('nenhum canal fornecido')
    }

})

app.get('/variavel/:nome/:sobrenome', function(req,res){    // os dois pontos, servem para receber parâmetros (/:x/:y também pode)
                                               // REQ É O QUE O USUÁRIO MANDA, E O RES É A RESPOSTA DO SERVIDOR (params é do express, a variavel que você coloca na rota, é chamada no params)
    var nome = req.params.nome
    var sobrenome = req.params.sobrenome
    res.send(`Olá, ${nome} ${sobrenome}`)
     
})

app.get('/parametro/:opcional?', function(req, res){        // parâmetros opcionais
    var opcional = req.params.opcional
    if(opcional) {
        res.send('Parametro encontrado')
    } else {
        res.send('Parametro não obrigatório')
    }
    
})

app.listen(3000, function(erro){            // função que sempre vai rodar quando o server for iniciado, ela vai capturar caso algo dê errado e mostrar em tela
    if (erro) {
        console.log('Deu erro')
    } else {
        console.log('Servidor rodando')
    }
})


