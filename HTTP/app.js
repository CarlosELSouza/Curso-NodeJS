var http = require('http') // módulo HTTP, do Node

http.createServer(function(requisicao, resposta) {
    resposta.end('<h1>Salve</h1>')
}).listen(3000) // função create Server do módulo HTTP  // o listen seleciona uma porta pra ele rodar
// se não tiver a função de requisição e resposta, o server não vai fazer nada

console.log('Rodou!')