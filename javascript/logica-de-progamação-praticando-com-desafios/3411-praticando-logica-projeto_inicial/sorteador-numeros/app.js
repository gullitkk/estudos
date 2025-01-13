function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);//colocamos o parse int antes para garantir que vai ser trado como numero e não como string//

    let numerosSorteados = [];
    let numero;

    for (i = 0; i != quantidadeDeNumeros; i++) { // for e um loop, esse loop ta dizendo enquanto i for diferente de quantidade de numeros ele vai continuar gerando numeros aleatorios// 
        numero = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        numerosSorteados.push(numero);

        while (numerosSorteados.includes(numero)) {
           numero = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        }
    }
    exibirTextonaTela(`<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label >`);
    alterarClasse();
}   
function gerarNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //function pra gerar numeros aleatorios entre um valor minimo e maximo, peguei no site do js// 
}

function exibirTextonaTela(texto) {
    let campo = document.getElementById('resultado');
    campo.innerHTML = texto
} 
function alterarClasse() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}
function reiniciar() {
    document.getElementById('quantidade').value=''; 
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    alterarClasse();
    exibirTextonaTela('<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label >');
}