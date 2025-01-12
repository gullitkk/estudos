alert('Ola, caso queira saber seu imc responda as perguntas a seguir');
let pesoDoUsuario = prompt('Quanto voce pesa?')
let alturaDoUsuario = prompt('Qual e a sua altura?');
function calculoImc(altura, peso ) {
    return peso/ (altura ** 2); // ** singnifica exponencial e 2 e o expoente, então eu to elevando altura a 2// 
    
}
let imcDoUsuario = calculoImc(alturaDoUsuario, pesoDoUsuario)
alert(`seu imc atual e de ${imcDoUsuario.toFixed (2)} e a sua classificação e ${ 
    imcDoUsuario < 18.5 ? 'abaixo do peso':
    imcDoUsuario < 25 ? 'normal':
    imcDoUsuario < 30 ? 'sobre peso' : 'obeso'
}`); 
// lembrete: quando terminar uma condicional usando a interrogação tem que usar os 2 pontos pq se não n vai, caso ja tenha botado n precisa repitir// 
//to fixed ele diz quantas casas decimais que vai ser dito quando tem mt casas decimas, nesse caso eu to dizendo para ele falar apenas 2// 