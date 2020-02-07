const express = require("express");
const app = express();
const cors = require("cors");

const alunos = [
  {
    nome: "jefferson",
    idade: 12
  },
  {
    nome: "Vilma",
    idade: 13
  },
  {
    nome: "Telma",
    idade: 14
  },
  {
    nome: "Vinicius",
    idade: 15
  }
];

app.use(cors());

app.get("/", (req, res) => {
  res.send(alunos);
});

app.listen(3000);
