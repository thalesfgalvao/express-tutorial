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
  res.send(usuario);
});

app.get('/usuarios', (req, res) => {
  res.send(usuarios);
});

app.put('/usuarios', (req, res) => {
  const index = usuarios.findIndex((user) => user.id === ~~req.params.id);
  const usuario = req.body;
  usuarios.splice(index, 1, usuario);
  res.send(usuario);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
