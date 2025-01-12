alert ('Bem vindo ao nosso site');

let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert ('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

nome = prompt ('qual e o seu nome');
idade = prompt ('qual a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
} else {
    alert('não pode dirigir, espere mais um pouco')
}