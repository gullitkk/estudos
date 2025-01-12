function olaNoConsole() {
    console.log('Ola mundo');
}
olaNoConsole();

function nomeNoConsole (nome) {
    console.log(`Ola ${nome}`)
}
nomeNoConsole ('alice');

function numeroDobro (numero) {
    console.log(numero *2)
}
numeroDobro(5);

function mediaNumeros (a, b, c) {
    return (a + b + c) /3
}
let media = mediaNumeros(4, 4, 4);
console.log (media);

function maiorDosNumeros (a, b) {
    return a > b ? a : b
}
let maiorNumero = maiorDosNumeros(4, 2);
console.log (maiorNumero);

function numeroPorEleMesmo (a) {
    console.log(a*a);
}
numeroPorEleMesmo (5); 