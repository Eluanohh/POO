const prompt = require('prompt-sync')();

//classe e o nosso modelo de atributos e funcões para criaçao de um
class Cliente {
    nome; //atributo
    idade;
    cpf;
    agencia;
}

// objeto   uw possui as informacoes da classe de forma individual
let cliente = new Cliente();

cliente.nome = prompt("digite o nome do cliente: ");
cliente.idade = 20;
cliente.cpf = "999.999.999.-01";
cliente.agencia = 101010;

console.log(cliente);