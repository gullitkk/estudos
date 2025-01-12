let dolarUsuario = prompt('Ola, você deseja converter seu dinheiro em dolar para real? se sim prencha o campo abaixo com o valor em dolar que você deseja converter que vamos fazer uma expectativa de quantos reais voltara pra você, considerando que o dolar hoje ta R$6,10')
let dolar = 6.10
let realUsuario = dolarForReal(dolarUsuario, dolar)
alert(`usando ${dolarUsuario} dolars hoje você consegue ${realUsuario.toFixed (2)} reais`)

function dolarForReal(real, dolar) {
    return dolar * real;
}