let numerosSorteados = []; //pra voce criar uma lista precisa usar os colchete, ai eu to criando uma lista chamada numeros sorteados// 
let numeroLimite = 10 //um limite de quantos numeros a lista pode armazenar// 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //tiramos o return e criamos uma variavel chamada numero escolho, ou seja inves de ele mandar o numero aleatorio pro numero secreto agora ele vai mandar pro numero escolhdo//
    let quantidadeDeNumerosSorteados = numerosSorteados.length //. length verifica o tamanho da lista, aqui eu to criando uma variavel e dando a ela o valor que seria o tamanho da lista// 

    if (quantidadeDeNumerosSorteados == numeroLimite) { // o numero limite e a mesma quantidade de numeros disponiveis para ser gerados aleatoriamentes, por isso que estamos usando uma string aqui e no math.random, por que caso eu queria aumentar a quantidade de numeros disponiveis e so eu alterar na variavel//
        numerosSorteados = []; // indicando que caso a lista tenha a mesma quantidade do numero limite ela fica sem nada, ou seja reseta// 
    }

    if (numerosSorteados.includes(numeroEscolhido)) { //aqui o .includes serve pra conferir se tal elemento ja pertence a lista, ou seja ele ta conferindo se o numero escolhida ja pertence aos sorteados//
        return gerarNumeroAleatorio() // se sim ele gera um novo numero//
    } else {
        numerosSorteados.push(numeroEscolhido); // o push adiciona tal elemento a lista// 
        console.log(numerosSorteados);
        return numeroEscolhido; //se não ele retorna esse numero e joga pros numeros sorteados
        
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







