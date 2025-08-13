// ============================================================================
// server.js
// Objetivo geral: Criar um servidor web com Node.js e Express que:
//  1. Sirva arquivos estáticos (HTML, CSS, JS) para o navegador.
//  2. Disponibilize rotas que retornam dados no formato JSON.
//  3. Atenda ao modelo cliente-servidor, permitindo que o front-end consuma dados.
// ============================================================================


// -----------------------------------------------------------------------------
// [Importação de módulos essenciais]
// Cada require abaixo importa uma biblioteca que fornece funcionalidades específicas.
// -----------------------------------------------------------------------------

// Importa o framework Express, que simplifica a criação de servidores HTTP
const express = require('express');

// Importa o body-parser, que interpreta o corpo (body) de requisições HTTP
// e o transforma em objetos JavaScript para uso dentro do servidor.
const bodyParser = require('body-parser');

// Importa o módulo 'path', nativo do Node.js, usado para manipular caminhos de arquivos.
// Aqui, é útil para trabalhar com diretórios de forma compatível entre sistemas operacionais.
const path = require('path');

// -----------------------------------------------------------------------------
// [Instanciando o servidor Express]
// express() retorna um "app", que é a aplicação/servidor propriamente dita.
// -----------------------------------------------------------------------------
const app = express();


// -----------------------------------------------------------------------------
// [Servindo arquivos estáticos]
// app.use(express.static(...)) diz ao Express para disponibilizar publicamente
// todos os arquivos que estiverem na pasta especificada (ex.: HTML, CSS, JS, imagens).
// Isso é fundamental para que o navegador consiga carregar a interface.
// -----------------------------------------------------------------------------
app.use(express.static('public'));

// -----------------------------------------------------------------------------
// [Middlewares para interpretar o corpo das requisições HTTP]
// Esses middlewares são executados antes das rotas, preparando os dados
// enviados pelo cliente para que possamos usá-los facilmente no servidor.
// -----------------------------------------------------------------------------

// Interpreta o corpo das requisições com conteúdo JSON.
// Exemplo: { "nome": "Mateus" } → req.body = { nome: "Mateus" }
app.use(bodyParser.json());

// Interpreta dados de formulários enviados via método POST com codificação padrão HTML.
// 'extended: true' permite objetos complexos no corpo da requisição.
app.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------------------------------------
// [Rota de teste]
// Objetivo: confirmar que o servidor está respondendo corretamente.
// Quando alguém acessar GET /teste, o servidor responde com um JSON simples.
// -----------------------------------------------------------------------------
app.get('/teste', (req, res) => {
  // Define explicitamente o cabeçalho Content-Type como JSON
  res.set('Content-Type', 'application/json');
  
  // Envia um objeto convertido para string JSON como resposta
  res.send(JSON.stringify({ mensagem: 'Requisição deu certo' }));
});

// -----------------------------------------------------------------------------
// [Rota que retorna dados estáticos]
// Objetivo: simular uma API que fornece dados para o front-end.
// GET /dados → retorna um array com informações de vendedores e valores vendidos.
// -----------------------------------------------------------------------------
app.get('/dados', (req, res) => { //endpoint para dados: /dados, onde o cliente sabe que vai encontrar um certo tipo de info
  // Define o tipo de conteúdo da resposta como JSON
  res.set('Content-Type', 'application/json');
  
  // Envia um array JavaScript convertido para JSON
  res.send(JSON.stringify([
    { vendedor: 'Fulano',   valorVendido: 1000.0 },
    { vendedor: 'Beltrano', valorVendido: 1200.0 },
    { vendedor: 'Sicrano',  valorVendido: 1100.0 }
  ]));
});

// -----------------------------------------------------------------------------
// [Inicializando o servidor]
// app.listen(PORT, ...) coloca o servidor "escutando" na porta especificada.
// Enquanto o processo estiver ativo, ele responderá requisições nessa porta.
// -----------------------------------------------------------------------------

// Define a porta onde o servidor vai escutar requisições
const PORT = 3000;

// Inicia o servidor e exibe mensagens no terminal
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Abra http://localhost:${PORT}/requests.html`);
});