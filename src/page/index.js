import axios from "axios";

axios
  .get("http://localhost:3000/")
  .then(response => {
    criaListaDinamica(response.data);
  })
  .catch(error => {
    console.log(error);
  });

function criaListaDinamica(alunos) {
  const ul = document.getElementById("alunos");
  alunos.map(aluno => {
    let li = document.createElement("li");
    li.innerHTML = `Nome: ${aluno.nome}`;
    ul.appendChild(li);
  });
}
