const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json( { mensagem: 'Hello world!' });
});

app.listen(3334);