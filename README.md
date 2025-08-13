@'
# Cliente-Servidor AJAX com Node + Express

Exemplo didático:
- Servidor Node/Express (rota `/dados` retorna JSON).
- Front-end `requests.html` faz:
  - `fetch` para API externa (exibe em modal)
  - `XMLHttpRequest` para `/dados` (renderiza tabela e total)

## Rodar
```bash
npm install
node server.js
# depois abra http://localhost:3000/requests.html