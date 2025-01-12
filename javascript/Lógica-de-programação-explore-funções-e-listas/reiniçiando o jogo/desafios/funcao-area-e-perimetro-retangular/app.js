alert("Deseja medir a area e perimetro de uma sala retangular? reponda as perguntas a seguir");
let baseRetangulo = prompt('qual o tamanho da base do retangulo?');
let alturaRetangulho = prompt('qual e a altura desse retangulo?');
let areaRetangulo = calculoAreaRetangulo(baseRetangulo, alturaRetangulho);
let perimetroRetangulo = calculoPerimetroRetangulho(baseRetangulo, alturaRetangulho);

function calculoAreaRetangulo(base, altura) {
    return base * altura;
}

function calculoPerimetroRetangulho(base, altura) {
    return (base ** 2) + (altura ** 2);
}

alert(`A area da sala retangular e igual a ${areaRetangulo} e o perimetro e igual a ${perimetroRetangulo}`);