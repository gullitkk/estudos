let titulo = document.querySelector ('h1'); //criei uma variavel chamada titulo que seria do html agora pra ligar os 2 igualei a um document que seria basicamente falar sobre o documento do html e usei o querySelector pra especificar oque eu queria mudar, que no caso e o h1//
titulo.innerHTML = 'jogo do numero secreto'; //chamei a variavel titulo e botei .innerHTML, que a tradução seria tipo dentro do html então como eu ja tinha feito a ligção acima ele ja puxou o codigo// 

let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'escolha um numero entre 1 a 10'

function verificarChute() { //function cria uma funçao pro corpo ou seja oque tiver dentro de function vai ter uma função que e ligada a partir de alguma coisa no nosso caso estamos usando um botao e estamos conectando com o verificarChute()//
    console.log('o botao foi acionado')
}