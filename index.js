const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usuarios = [];

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).send(usuario);
});

app.get('/usuarios', (req, res) => {
  res.status(200).send(usuarios);
});

app.put('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex((user) => user.id === ~~req.params.id);
  const usuario = req.body;
  usuarios.splice(index, 1, usuario);
  res.status(200).send(usuario);
});

app.delete('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex((user) => user.id === ~~req.params.id);
  usuarios.splice(index, 1);
  res.status(204).send({ mensagem: 'Usuário deletado com sucesso' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
