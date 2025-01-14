function comprar () {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}
function comprarPista (qtd) {
    let pistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > pistaDisponivel) {
        alert('Quantidade indisponivel para esse tipo');
    } else {
        pistaDisponivel = pistaDisponivel - qtd;
        document.getElementById('qtd-pista').textContent = pistaDisponivel;
        alert('Compra realizada com sucesso!');
    } 
}
function comprarSuperior(qtd) {
    let superiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > superiorDisponivel) {
        alert('Quantidade indisponivel para esse tipo');
    } else {
        superiorDisponivel = superiorDisponivel - qtd;
        document.getElementById('qtd-superior').textContent = superiorDisponivel;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(qtd) {
    let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > inferiorDisponivel) {
        alert('Quantidade indisponivel para esse tipo');
    } else {
        inferiorDisponivel = inferiorDisponivel - qtd;
        document.getElementById('qtd-inferior').textContent = inferiorDisponivel;
        alert('Compra realizada com sucesso!');
    } 
}