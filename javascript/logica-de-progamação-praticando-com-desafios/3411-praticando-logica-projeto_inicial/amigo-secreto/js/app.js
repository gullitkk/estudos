let sorteio = [];
function adicionar () {
    //resgatar os dados que seria os nomes// 
    let nomeAmigos = document.getElementById('nome-amigo').value;
    //adicionar eles ao campo amigos inluidos//
    let listaAmigos = document.getElementById('lista-amigos').textContent;
    if (nomeAmigos.value != '') {

        if (listaAmigos == '') {
        listaAmigos = nomeAmigos;
        } else {
        listaAmigos += ', ' + nomeAmigos;
        }
        document.getElementById('lista-amigos').textContent = listaAmigos;
        document.getElementById('nome-amigo').value = '';
    } else {
        alert('Por favor, insira um valor valido');
    }
    sorteio.push(nomeAmigos);
}
function sortear() {
    embaralhar(sorteio);
    let listaSorteados = document.getElementById('lista-sorteio');
    for (let i = 0; i < sorteio.length; i++) {
        if (i == sorteio.length - 1) {
            listaSorteados.innerHTML += sorteio[i] + '-->' + sorteio[0] + '<br>';
        } else {
            listaSorteados.innerHTML += sorteio[i] + '-->' + sorteio[i + 1] + '<br>';
        }
        
    }
}
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolher um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        // Trocar os elementos de posição
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function reiniciar() {
    //reiniciar tudo//
    document.getElementById('lista-amigos').textContent = ''
    document.getElementById('lista-sorteio').textContent = ''
    sorteio = [];
}