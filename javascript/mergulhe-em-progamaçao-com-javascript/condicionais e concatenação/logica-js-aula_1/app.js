alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto) //colocamos um console.log aqui para quem abrir o console ter uma colinha// 
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert (`Isso ai! Você descobriu o número secreto ${(numeroSecreto)}`); //alteramos de console log para alert pois queremos interagir com o usuario// //no final da frase tem o numero secreto, mas caso algum dia eu queira alterar o numero secreto ia ficar estranho, pois o numero secreto seria o outro mas a frase continuaria dizendo q o numero secreto e 5, pra isso vamos usar o template string, pra usar ele devemos tirar a frase em aspas simples e colocar a crase (`), depois botamos um sifão ($) antes do numero secreto que vai ser alterado junto ao numero secreto e deixamos entre chaves// 
} else { // seria equievalente ao "senão" caso o if não esteja certo o else que vai assumir // 
    alert ('errou!!');
}