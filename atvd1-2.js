//Criando variável para armazenar a resposta da pergunta: você é maior de 18 anos?
console.log("Você é maior de 18 anos?");

// Pergunta idade
var idade = prompt("Qual a sua idade?");
// Se for maior ou igual a 18 anos aparecerá a mensagem no console: Que legal! Você já pode ter a carteira de habilitação
if (idade >= 18) {
  console.log("Que legal! Você já pode ter a carteira de habilitação.");
} else {
//Senão: Poxa, que pena! Você ainda não pode ter a carteira de habilitação.
  console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.");
}