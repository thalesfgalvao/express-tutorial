const express = require('express');
const app = express();
const port = 3000;

app.get('/usuarios/:email/:senha', (req, res) => {
  const usuarios = [
    {
      id: 1,
      email: 'joao',
      senha: '123a',
      nome: 'Joao',
    },
    {
      id: 2,
      email: 'maria',
      senha: '1234a',
      nome: 'Maria',
    },
  ];
  const usuario = usuarios.find(
    (user) => req.params.email === user.email && req.params.senha === user.senha
  );
  res.send(usuario);
});

app.get('/carros/', (req, res) => {
  const carros = [
    {
      id: 1,
      nome: 'Ferrari',
    },
    {
      id: 2,
      nome: 'Audi',
    },
  ];
  const carro = carros.find((car) => car.nome === req.query.nome);
  res.send(carro);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
