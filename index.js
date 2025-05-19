const express = require('express');
const app = express();
const port = 3000;
const path = require('path');// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.json());

// Rota GET para verificar o funcionamento da API
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pag.html');
});

app.get('/api/status', (req, res) => {
    res.json({ message: 'API funcionando corretamente!' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});