alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute; //tiramos o promt daqui e deixamos apenas uma variavel vazia pra armazenar os chutes pois vamos criar um loop usando o while// 
let tentativas = 1; //uma variavel pra armazenar a quantidade de tentativas que o jogador precisou// //o igual a 1 pois todo mundo ja começa com 1 tentativa//

while (chute!=numeroSecreto) { //while seria um loop, a tradução seria equivalente ao enquanto// 
    chute = prompt('escolha um numero entre 1 a 10');
    if (chute==numeroSecreto) {
        alert(`Parabens você ganhou o jogo com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) { 
            alert('o numero e menor que ' +chute);
        } else{
            alert('o numero e maior que ' +chute);
        }
        //tentativas = tentativas + 1; o comando abaixo faz basicamente isso, soma 1 tentativa. botamos esse comando dentro do else de erro// 
        tentativas++
        
    } 
} 
   