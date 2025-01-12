alert("Deseja medir a area e perimetro de uma sala circular? reponda a pergunta a seguir");;
let raioUsuario = prompt('qual e o raio da sala?');
let area = calcularAreaCirculo(raioUsuario);
let perimetro = calcularPerimetroCirculo(raioUsuario);

function calcularAreaCirculo(raio) {
    return Math.PI * (raio ** 2); // math.pi e o pi// 
}

function calcularPerimetroCirculo (raio) {
    return 2 * raio * Math.PI
}
 alert(`a area da sala circular e igual a ${area.toFixed (2)} e o perimetro e igual a ${perimetro.toFixed (2)}`);

