const express = require("express");
const app = express();

const alunos = [
  {
    nome: "Aluno1",
    idade: 12
  },
  {
    nome: "Aluno2",
    idade: 13
  },
  {
    nome: "Aluno3",
    idade: 14
  },
  {
    nome: "Aluno4",
    idade: 15
  }
];

app.get("/", (req, res) => {
  res.send(alunos);
});

app.listen(3000);
