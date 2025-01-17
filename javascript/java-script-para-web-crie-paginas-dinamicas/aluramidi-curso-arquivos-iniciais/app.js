// função para tocar som//
function tocarSom (id) {
    document.getElementById(id).play();
}
// criei uma const e igualei ela a tudo q tiver a class tecla ou seja todas as teclas//
const teclasSoms = document.querySelectorAll('.tecla'); 

for (let i = 0; i < teclasSoms.length; i++) {
    teclasSoms[i].onclick = tocarSom
}   