let numeroSecreto = gerarNumeroAleatorio() //aqui temos uma variavel pra armazenar o numero secreto e ela ta linkada a função responsavel por gerar esse numero//
function exibirNaTela(tag, texto) { //essa função e como se fosse um rascunho, quando tem muitas coisas parecidades mas que muda uma palavra ou outra pode fazer isso, generalizar numa função aqui demos o nome da função, e botamos entre os primeiros paranteses tag,texto que seria pra puxar a tag e o texto, logo criamos uma variavel chamado campo e chamos o documento html e especificamos aoende queremos mudar com o querryselector mas no lugar de botar a tag so botamos tag, em baixo botamos o a variavel com o inner html e aonde botariamos o texto so botamos a palavra texto// 
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

exibirNaTela ('h1', 'Jogo do numero secreto'); //aqui a gente so chama a função pelo nome e dentro dos parantes colocamos a tag que queremos chamar e o texto//
exibirNaTela ('p', 'escolha um numero entre 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value //aqui criamos uma variavel chute que seria pra armazenar os chutes do usuario, e atribuimos ela ao input que seria aoende o usuario escolhe o numero, pra isso usamos o document,querry, colocamos o nome da tag e no final botamos o .value pois so queremos o valor//
    console.log(numeroSecreto == chute); //aqui estamos comparando o chute com o numero secreto criando um booleano, ou seja tal sentença e true ou false, ou e igual ou não//
}

function gerarNumeroAleatorio () { //função usada para gerar numero aleatorio// 
    return parseInt(Math.random() *10 + 1 );  //o return e usada para esse numero gerado retornar e ser armazenado a variavel da linha 1, precisa disso pois o js ler linha por linha então como a variavel ja tinha passado esse numero ia ser gerado e mandado pro nada//
} 
