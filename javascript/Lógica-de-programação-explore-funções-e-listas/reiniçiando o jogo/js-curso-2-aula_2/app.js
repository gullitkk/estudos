let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemNaTelaInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemNaTelaInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        exibirTextoNaTela ('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabens!!! Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`; //fizemos essa variavel inves de so colocar a mensagem no exibir tela pois talvez o html n indetificasse, então tivemos que fazer a variavel e la em baixo botamos o nome da variavel para puxar// 
        exibirTextoNaTela ('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled'); //aqui chamamos o documento html, logo apos chamamos um id, por isso usamos o getElementByID, informamos o id, e removemos um atributo que tinham colocado no html o disabled, isso pra quando a gente acertar o numero aparacer o botao disponivel para gente fazer um novo jogo, mas esse botão so vai ficar disponivel se acertar, por isso ele vem por padrão desligado// 
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'o numero secreto e menor');

    } else {
        exibirTextoNaTela ('p', 'o  numero secreto e maior');
    } if (numeroSecreto != chute) {
        tentativas++;
        limpeCampo();
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limpeCampo() {
    let limpeCampo = document.querySelector('input');
    limpeCampo.value = '';
}

function reiniciarJogo() {
    tentativas = 1
    limpeCampo();
    mensagemNaTelaInicial(); 
}











