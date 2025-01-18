// função para tocar som//
function tocarSom (id) {
    document.getElementById(id).play(); // .play da play em algum audio//
}
// criei uma const e igualei ela a tudo q tiver a class tecla ou seja todas as teclas//
const teclasSoms = document.querySelectorAll('.tecla'); 

for (let i = 0; i < teclasSoms.length; i++) { // criei um for para que eu consiga interagir com as teclas que estou clickando// 
    const instrumento = teclasSoms[i].classList[1]; //aqui estou chamando um nome que seria 'tecla_(instrument que foi clicado)' para adicionar ap som e deixar o code mais responsivo pois esses teclas soms tem 2 classes o .tecla e o . tecla_instrumento, ai por isso q a gnt ta chamando o 1, que seria o segundo elemento// 
    const idAudio = `som_${instrumento}`; // estou juntando o som_ com a const acima, assim ele vai criar um id que existe com base no instrumento que cliquei// 
    teclasSoms[i].onclick = function () { //função anonima: precisava usar os parametros para chamar a função tocar som mas se eu botasse parentese a função ia chamar de imediato para isso criamos uma function e dentro da function chamamos a desejada sem se preocupar dela ser chamada de cara// 
        tocarSom(idAudio);
    } //o i vai indicar a posição da lista logo a tecla que eu apertei e o .onclick indica que so e pra chamar a função no click// 
    teclasSoms.onkeydown = function() {
        teclasSoms.classList.add('.active'); // onkeydown seria basicamente qando uma tecla desce, ou seja pressionada, então quando uma tecla e pressionada em tal teclasoms ele adiciona a class active que dar a corzinha//
    } 
    teclasSoms.onkeyup = function() {
        teclasSoms.classList.remove('.ative'); // aqui seria quando a tecla sobe, ou seja depois que a gente aperta a tecla ela volta e tira função// 
    }
}   