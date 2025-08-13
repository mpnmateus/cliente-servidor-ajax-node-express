# 🌐 Cliente-Servidor AJAX com Node.js + Express

> Aplicação **didática** desenvolvida para demonstrar conceitos de **requisições cliente-servidor** utilizando **Node.js**, **Express**, e requisições AJAX com `fetch` e `XMLHttpRequest`.

---

## 📸 Visão Geral

Este projeto é composto por:

- Um **servidor HTTP** simples em Node.js, criado com o framework **Express**, que:
  - Fornece **arquivos estáticos** (HTML, imagens, CSS).
  - Expõe **rotas JSON** para consumo pelo cliente.
- Um **front-end** que realiza requisições AJAX:
  - `fetch()` para consumir uma **API externa**.
  - `XMLHttpRequest` para consumir **dados internos do servidor**.

---

## 🛠 Tecnologias Utilizadas

| Ferramenta | Descrição |
|------------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | Ambiente de execução JavaScript no servidor. |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Framework minimalista para criação de servidores em Node.js. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | Linguagem utilizada no lado do cliente e do servidor. |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estrutura do conteúdo da página web. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Estilização e layout da aplicação. |

---

## 📂 Estrutura de Pastas

req-cliente-servidor/
├─ node_modules/ # Dependências (ignorado no Git)
├─ public/
│ ├─ requests.html # Página principal do cliente
│ └─ servidor_logo.png # Logo exibido no HTML
├─ package.json # Configuração do projeto Node.js
├─ package-lock.json # Controle de versões das dependências
└─ server.js # Código do servidor Express


---

## 🚀 Como Executar o Projeto

> **Pré-requisitos:**  
> - [Node.js](https://nodejs.org/) instalado  
> - [npm](https://www.npmjs.com/) (vem junto com o Node.js)

1. **Clone este repositório**
   ```bash
   git clone https://github.com/<seu-usuario>/cliente-servidor-ajax-node-express.git```


2. **Clone este repositório**

	```bash 
	cd cliente-servidor-ajax-node-express```

3. **Instale as dependências**
	```bash
	npm install```

4. **Inicie o servidor**
	```bash
	node server.js```

5. **Abra no navegador**

http://localhost:3000/requests.html

## 🔍 Funcionalidades

- Servidor Express
	- Rota /teste → retorna um JSON { mensagem: "Requisição deu certo" }.
	- Rota /dados → retorna um array de vendas (vendedor + valor).

- Front-end

	- Faz requisições AJAX para:

		- API externa → exibe dados em modal.

		- Servidor interno (/dados) → gera uma tabela dinâmica e calcula o total vendido.

## 📖 Conceitos Trabalhados
- Cliente-Servidor: Comunicação entre front-end e back-end.

- AJAX: Atualização de partes da página sem recarregar o navegador.

- fetch API: Requisições modernas com Promises.

- XMLHttpRequest: API clássica de requisições assíncronas.

- Express static middleware: Servindo arquivos estáticos no Node.js.

- Rotas REST simples: GET com JSON de resposta.

- Manipulação do DOM: Atualização dinâmica de tabelas e exibição de modais.

## 📜 Licença
Este projeto é de uso educacional.
Sinta-se à vontade para estudar, modificar e reutilizar para fins de aprendizado.
