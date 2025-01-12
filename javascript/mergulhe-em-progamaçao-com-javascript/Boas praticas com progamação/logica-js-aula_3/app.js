alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()*100 + 1); //aqui a gente tirou aquele numero fixo e botamos um math random para o computador criar numeros aleatorios o math random deve começar com letra maiuscula e pra ele fazer o numero tem que ter um paranteses logo apos o random, mas o math random so cria numeros entre 0 e 1 ou seja apenas numeros 0.alguma coisa para isso multiplicamos por 10 para ele andar uma casa pro lado e adicionamos + 1 para evitar o zero outro problema seria o resto da casa decimal para isso a gente bota o parseInt antes do math random, e para contar toda multiplicação adicionamos tudo ao paranteses menos o parse int// //logo apos de testamos aumentamos a multiplicação para 100 pois queremos que ele ande 2 casas logo trazendo numeros de 0 a 99, mas como temos o +1 seria de 1 a 100//
console.log(numeroSecreto);
let chute; //tiramos o promt daqui e deixamos apenas uma variavel vazia pra armazenar os chutes pois vamos criar um loop usando o while// 
let tentativas = 1; //uma variavel pra armazenar a quantidade de tentativas que o jogador precisou// //o igual a 1 pois todo mundo ja começa com 1 tentativa//

while (chute!=numeroSecreto) { //while seria um loop, a tradução seria equivalente ao enquanto// 
    chute = prompt('escolha um numero entre 1 a 100');
    if (chute==numeroSecreto) {
        break; //colocamos um break pra caso o jogador acerte o jogo pare//
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
let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabens você ganhou o jogo com ${tentativas} ${palavrasTentativas}`); //criamos uma variavel chamada palavras tentativas, depois a gente disse que ela e igual ao resultado do codigo acima, codigo esse que faz a mesma função do if e else, o ponto de ? equivalente as chaves, as palavras entre aspas indica o resultado e os : indica o else// //esse codigo faz a mesma coisa que o codigo de baixo, mas ele e mais otimizado// 

// if(tentativas > 1 ) {
//  alert(`Parabens você ganhou o jogo com ${tentativas} tentativas`); (a gente trouxe o alert pra baixo pois se deixamos ele la o break ia parar o jogo e o alerta n ia aparecer)
// } else { 
//   alert(`Parabens você ganhou o jogo com ${tentativas} tentativa`); 
//  }

