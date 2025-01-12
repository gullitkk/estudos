let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio.';

function consoleBotao() {
    console.log ('O botão foi clicado');
}

function alertBotao() {
    console.log ('Eu amo JS');
}

function promptBotao () {
    let cidade = prompt ('Diga um nome de alguma cidade do Brasil');
    alert (`Estive em ${cidade} e lembrei de você`);
}

function somaBotao () {
    let numerosInteiros1 = parseFloat(prompt ('Escolha um numero inteiro')); // parse float e usado pra garantir que numeros sejam tratados como numeros e na hora da soma ele não apenas junte os 2 numeros e sim o some// 
    let numerosInteiros2 = parseFloat(prompt ('Escolha outro numero inteiro'));
    let resultado = numerosInteiros1 + numerosInteiros2;
    alert(`${numerosInteiros1} + ${numerosInteiros2} = ${resultado}`)
}